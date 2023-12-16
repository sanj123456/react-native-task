import React, {useState} from 'react';
import {
  Button as RNButton,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  PressableProps,
} from 'react-native';
import {images} from '../../core';

export interface ShoppingCartProps {}

const ShoppingCart: React.FC<ShoppingCartProps> = ({navigation}) => {
  const cartItems = [
    {name: 'Apple', quantity: 2, price: 7.9},
    {name: 'Banana', quantity: 1, price: 7.9},
    {name: 'Orange', quantity: 3, price: 7.9},
  ];
  const calculateTotal = cart => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const [total, setTotal] = useState(calculateTotal(cartItems));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.back} source={images.back} />
        </Pressable>
        <Text style={styles.title}>Shopping Cart (5)</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <CartItem
            item={cartItems[0]}
            onRemove={() => {
              console.log('Cart removed');
            }}
            onQuantityChange={() => {
              console.log('onQuantityChange');
            }}
          />
        )}
      />
      <View style={styles.cartFooter}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.totalText}>Subtotal:</Text>
          <Text style={styles.totalText}>${total.toFixed(2)}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.totalText}>Delivery: </Text>
          <Text style={styles.totalText}>$2.00</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.totalText}>Total: </Text>
          <Text style={styles.totalText}>${Math.floor(total)}</Text>
        </View>
        <RNButton
          title="Proceed to Checkout"
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </View>
  );
};

const CartItem = ({item, onQuantityChange}: any) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (delta: any) => {
    setQuantity(quantity + delta);
    onQuantityChange(item.id, quantity + delta);
  };

  return (
    <View style={styles.cartItem}>
      <Image source={{uri: item.image}} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>
          ${Number(item.price).toFixed(2)}
        </Text>
      </View>
      <View style={styles.cartItemQuantity}>
        {quantity > 0 && (
          <Button type="-" onPress={() => handleQuantityChange(-1)} />
        )}
        <Text style={{color: 'black'}}>{quantity}</Text>
        <Button type="+" onPress={() => handleQuantityChange(1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  title: {
    color: '#1E222B',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    color: 'black',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#888',
  },
  cartItemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    columnGap: 5,
  },
  cartFooter: {
    padding: 10,
    backgroundColor: '#F8F9FB',
    marginHorizontal: 10,
    borderRadius: 30,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
  btnPlusMinus: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F8F9FB',
  },
});

export default ShoppingCart;

const Button = ({type, onPress}: PressableProps & {type: '+' | '-'}) => {
  return (
    <Pressable style={styles.btnPlusMinus} onPress={onPress}>
      <Image source={type === '+' ? images.plus : images.minus} />
    </Pressable>
  );
};
