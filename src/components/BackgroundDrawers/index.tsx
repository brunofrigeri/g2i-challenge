import React from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'

const BackgroundDrawers = () => {
  return (
    <View style={{ position: 'absolute' }}>
      <Image
        source={require('../../assets/draw1.png')}
        style={{ top: 0, left: 0 }}
      />
      <Image
        source={require('../../assets/draw4.png')}
        style={{ top: 0, right: 0 }}
      />
      <Image
        source={require('../../assets/draw9.png')}
        style={{
          top: '-5%',
          right: 0,
        }}
      />
      <Image
        source={require('../../assets/draw3.png')}
        style={{ top: 0, left: 0 }}
      />
      <Image
        source={require('../../assets/draw8.png')}
        style={{ top: 0, left: 0 }}
      />
    </View>
  )
}

export default BackgroundDrawers
