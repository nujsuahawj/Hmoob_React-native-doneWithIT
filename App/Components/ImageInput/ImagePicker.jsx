import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import ImageInput from './ImageInput';

export default function PhotoPicker() {
  const [image, setImage] = useState();


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.6,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      
    }
  };

  return (
    <ImageInput  setImage={setImage} pickImage={pickImage} image={image}/>
  );

}


