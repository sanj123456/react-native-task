import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {colors, images} from '../../core';
import {Icon} from '../../components';
const {width, height} = Dimensions.get('window');
const ProductDetails = ({navigation}) => {
  const [productImagesPageIndicatorIndex, setProductImagesPageIndicatorIndex] =
    useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image style={styles.back} source={images.back} />
          </Pressable>
          <Pressable style={styles.bagContainer}>
            <Image source={images.bag} style={styles.bagImg} />
          </Pressable>
        </View>
        <Text style={styles.title}>
          Thin Choise{'\n'}
          <Text style={styles.darkTitle}>Top Orange</Text>
        </Text>
        <View style={styles.ratingContainer}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => {
              return (
                <Image source={item <= 4 ? images.star : images.halfstar} />
              );
            }}
            horizontal
            style={{flexGrow: 0}}
          />
          <Text style={styles.reviewsText}>110 Reviews</Text>
        </View>
        <View>
          <PagerView
            onPageSelected={({nativeEvent}) => {
              setProductImagesPageIndicatorIndex(nativeEvent.position);
            }}
            style={styles.pagerContainer}
            pageMargin={1}>
            {[1, 2, 3].map(() => {
              return <ProductImageItem />;
            })}
          </PagerView>
          <Paging acitveIndex={productImagesPageIndicatorIndex} />
          <FavoriteButton />
        </View>
        <Price />
        <View style={styles.buttonContainer}>
          <PaymentButton
            title="Add to Cart"
            onPress={() => console.log('Add to cart')}
            tStyle={{color: '#2A4BA0'}}
          />
          <PaymentButton
            title="Buy Now"
            onPress={() => console.log('Buy now')}
            style={{backgroundColor: '#2A4BA0'}}
            tStyle={{color: '#fff'}}
          />
        </View>
        <Text style={styles.txtDetails}>Details</Text>
        <Text style={styles.txtDetailsDescription}>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nullam quis risus eget urna mollis ornare vel eu leo.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductDetails;

const ProductImageItem = () => {
  return (
    <Image
      source={{
        uri: 'https://tapetum.in/cdn/shop/products/allinonesolarstreetlight40watt.png?v=1677825659',
      }}
      style={styles.productImage}
    />
  );
};

const Paging = ({acitveIndex}: any) => {
  return (
    <View pointerEvents="none" style={styles.paggingContainer}>
      {[0, 1, 2].map((_, i) => {
        return (
          <View
            style={[
              acitveIndex === i
                ? styles.activePosition
                : styles.inActivePosition,
            ]}
            key={i}
          />
        );
      })}
    </View>
  );
};

const FavoriteButton = () => {
  return (
    <Pressable style={styles.favBtn}>
      <Image source={images.heart} />
    </Pressable>
  );
};

const Price = () => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.price}>
        $34.70<Text style={styles.priceUnit}>/KG</Text>
      </Text>
      <View style={styles.offTextContainer}>
        <Text style={styles.offText}>$22.04 OFF</Text>
      </View>
    </View>
  );
};

const PaymentButton = ({onPress, title, style, tStyle}: any) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.btnText, tStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    marginTop: 10,
  },
  bagContainer: {height: 40, width: 40},
  bagImg: {
    tintColor: 'black',
    resizeMode: 'center',
  },
  title: {
    color: '#1E222B',
    fontFamily: 'Manrope',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 62,
    marginHorizontal: 20,
  },
  darkTitle: {
    fontWeight: '800',
  },
  ratingContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  reviewsText: {
    color: '#A1A1AB',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 5,
  },
  pagerContainer: {
    width,
    height: 207,
    marginTop: 15,
  },
  productImage: {
    width: width,
    height: 207,
    resizeMode: 'stretch',
  },
  paggingContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    columnGap: 20,
  },
  activePosition: {
    width: 20,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#F9B023',
  },
  inActivePosition: {
    width: 20,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
  },
  favBtn: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 34,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    columnGap: 20,
    marginHorizontal: 20,
    marginTop: 26,
  },
  price: {
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    color: '#2A4BA0',
  },
  priceUnit: {
    fontWeight: '400',
  },
  offTextContainer: {
    backgroundColor: '#2A4BA0',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  offText: {
    color: 'white',
  },
  txtDetails: {
    color: '#1E222B',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginHorizontal: 20,
    marginTop: 30,
  },
  txtDetailsDescription: {
    color: '#8891A5',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginHorizontal: 20,
    marginTop: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    columnGap: 23,
    marginHorizontal: 20,
  },
  button: {
    borderWidth: 1.5,
    borderColor: '#2A4BA0',
    borderRadius: 20,
    flex: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
  },
});
