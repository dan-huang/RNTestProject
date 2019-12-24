import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

export class App extends Component {
  componentDidMount() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });

    // ImagePicker.openPicker({
    //   multiple: true
    // }).then(images => {
    //   console.log(images);
    // });
  }
  render() {
    return (
      <View>
        <Text> textInComponent  </Text>
      </View>
    )
  }
}

export default App
