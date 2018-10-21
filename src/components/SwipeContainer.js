import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';

import Deck from './Deck';
import DeckCard from './DeckCard';
import EndDeckCard from './EndDeckCard';

class SwipeContainer extends Component {
    
    renderCard = (item) => {
        return (
          <DeckCard item={item} />
        )
    }

    renderNoMoreCards = () => {
        const { likes } = this.props;
        return (
            <EndDeckCard 
                title='Completed'
                text='No more beers to see!'
                btnText='View Tap List'
                onPress={() => this.viewTapList(likes)}
            />
        )
    }

    viewTapList = taplist => {
        Actions.taplist({taplist});
    }

    render(){
        const { data, onSwipeRight, onSwipeLeft } = this.props;
        return (
            <View style={styles.container}>
                <Deck 
                    data={data}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={onSwipeRight}
                    onSwipeLeft={onSwipeLeft}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   justifyContent: 'center',
    },
  });

export default SwipeContainer;