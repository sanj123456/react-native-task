import React, {useCallback} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {TitleHeader} from '../../components';
import {styles} from './styles';
import {Icon} from '../../components';
import {images, screenName} from '../../core';
import Slider from '../../components/ImageSlider/Slider';

const imagess = [
  require('../../assets/images/Card.png'),
  require('../../assets/images/Card.png'),
  require('../../assets/images/Card.png'),
  require('../../assets/images/Card.png'),
];
const data = [
  {
    id: 1,
    dollar: 325,
    name: 'ClownTang.HO3',
  },
  {
    id: 2,
    dollar: 89,
    name: 'ClownFang.HO3',
  },
  {
    id: 3,
    dollar: 120,
    name: 'ClownFish.HO3',
  },
  {
    id: 4,
    dollar: 35,
    name: 'ClownCat.HO3',
  },
  {
    id: 5,
    dollar: 225,
    name: 'ClownLobster.HO3',
  },
  {id: 6, dollar: 425, name: 'ClownJinga.HO3'},
];
const GroceryHome = ({navigation}) => {
  const renderItem = useCallback(({item}: any) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(screenName.productDetails);
        }}>
        <View style={styless.card}>
          <View style={{margin: 10}}>
            <Icon source={images.unFav} imageStyle={styless.unFav} />
          </View>
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Icon source={images.product} imageStyle={styless.product} />
          </View>
          <View style={{marginHorizontal: 10, flexDirection: 'row'}}>
            <View>
              <Text style={styless.dollar}> ${item.dollar}</Text>
              <Text style={styless.name}> ${item.name}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Icon source={images.add} imageStyle={styless.addicon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }, []);
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TitleHeader />
        <View style={styless.searchContainer}>
          <Icon source={images.search} imageStyle={styless.icon} />
          <TextInput
            style={styless.input}
            placeholder="Search Products or store"
            placeholderTextColor="#8891A5"
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styless.locationContainer}>
            <Text style={styless.locationText}>Delivery to</Text>
            <Text style={styless.locationText}>Within</Text>
          </View>
          <View style={styless.locationSemiContain}>
            <View style={styless.iconContain}>
              <Text style={styless.locationAddText}>
                Green Way 3000, Sylhet
              </Text>
              <Icon source={images.arrow} imageStyle={styless.arrowIcon} />
            </View>
            <View style={styless.iconContain}>
              <Text style={styless.locationAddText}>1 Hour</Text>
              <Icon source={images.arrow} imageStyle={styless.arrowIcon} />
            </View>
          </View>
        </View>
      </View>
      <View style={styless.bodyContent}>
        <Slider images={imagess} />
      </View>
      <View style={styless.listingContainer}>
        <Text style={styless.recom}>Recommended</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          numColumns={2}
          contentContainerStyle={styless.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </View>
  );
};
export default GroceryHome;

export const styless = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#153075',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 54,
  },
  icon: {
    marginRight: 10,
    width: 18,
    height: 18,
    marginLeft: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  locationContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 11,
    fontWeight: '300',
    lineHeight: 15,
    color: 'rgba(248, 249, 251, 1)',
    opacity: 0.5,
  },
  locationSemiContain: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationAddText: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 19,
    color: 'rgba(248, 249, 251, 1)',
  },
  iconContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 8,
    height: 6,
    marginLeft: 5,
  },
  bodyContent: {
    marginTop: 20,
  },
  recom: {
    fontSize: 30,
    lineHeight: 38,
    color: '#1E222B',
  },
  listingContainer: {
    marginVertical: 20,
    marginHorizontal: 16,
  },
  card: {
    width: 160,
    height: 190,
    backgroundColor: '#F8F9FB',
    borderRadius: 20,
    marginVertical: 10,
    opacity: 0.7,
  },
  unFav: {
    width: 14,
    height: 14,
  },
  product: {
    width: 70,
    height: 70,
  },
  contentContainerStyle: {
    paddingBottom: 480,
    minHeight: '100%',
  },
  dollar: {
    fontSize: 14,
    color: '#1E222B',
  },
  name: {
    fontSize: 12,
    color: '#616A7D',
  },
  addicon: {
    width: 20,
    height: 20,
  },
});
