import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';

interface ImageSliderProps {
  images: ImageSourcePropType[];
}

const Slider: React.FC<ImageSliderProps> = ({images}) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.sliderContainer}>
      {images.map((imageUrl, index) => {
        console.log(imageUrl, ' imageURlll=====');

        return <Image key={index} source={imageUrl} style={styles.image} />;
      })}
    </ScrollView>
  );
};

// const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  sliderContainer: {
    // height: 200,
  },
  image: {
    width: 280,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 20,
    marginHorizontal: 16,
  },
});

export default Slider;
