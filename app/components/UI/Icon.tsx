import React, {FC, memo} from 'react';
import {ImageStyle, TouchableOpacity, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
type IconType = {
  style?: ViewStyle | any;
  source?: any;
  imageStyle?: ImageStyle | any;
  onPress?: () => void;
};
const Icon: FC<IconType> = props => {
  const {source, style, onPress, imageStyle} = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <FastImage source={source} style={imageStyle} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export default memo(Icon);
