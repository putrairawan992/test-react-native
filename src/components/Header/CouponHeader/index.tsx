import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {images} from '../../../utils/images';
import {colors} from '../../../utils/colors';
import {navigationRef} from '../../../navigations/RootNavigation';

export default function CouponHeader() {
  return (
    <View className="py-2">
      <TouchableOpacity
        activeOpacity={0.7}
        className="absolute left-5 top-5"
        onPress={() => navigationRef.navigate('Notification')}>
        <Icon name="arrow-left" size={24} color={colors.white} />
      </TouchableOpacity>
      <Image className="w-[120] h-[50] self-center" source={images.logo} />
    </View>
  );
}
