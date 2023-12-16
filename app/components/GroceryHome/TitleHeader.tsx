import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {strings} from '../../i18n';
import {colors, images} from '../../core';
import {Icon} from '..';

const TitleHeader: FC = () => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>{strings.heySanjay}</Text>
      <Icon source={images.bag} imageStyle={styles.bagImg} />
    </View>
  );
};
export default memo(TitleHeader);
const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: colors.white,
    fontSize: 22,
  },
  bagImg: {
    height: 20,
    width: 20,
  },
});
