import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {
  const { title, artist, image, thumbnail_image } = album
  const {
    albumStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle
  } = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={albumStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  )
}

const styles = {
  albumStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
}

export default AlbumDetail
