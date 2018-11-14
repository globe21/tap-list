import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import BeerRating from './BeerRating';

const DeckCard = ({item}) => {
  const { id, name, genre, brewery, uri, description, rating } = item;
  const {
    container, textStyle, titleStyle, subtitleStyle, genreStyle
  } = styles;


  return (
    <Card
      key={id}
      featuredTitle={name}
      featuredTitleStyle={titleStyle}
      featuredSubtitle={brewery}
      featuredSubtitleStyle={subtitleStyle}
      image={{ uri: uri }}
      containerStyle={container}
    >
      <Text style={genreStyle}>{genre}</Text>
      <Text style={textStyle}>
        {description}
      </Text>
      <BeerRating rating={rating} style={{ marginTop: 15 }} />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 350,
  },
  titleStyle: {
    fontSize: 25,
  },
  subtitleStyle: {
    fontSize: 20,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 10
  },
  genreStyle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  }
})

export default DeckCard;