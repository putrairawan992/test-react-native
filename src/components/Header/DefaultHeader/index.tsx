import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../../utils/colors';
import {navigationRef} from '../../../navigations/RootNavigation';
import DefaultText from '../../DefaultText';

interface DefaultHeaderProps {
  title: string;
}

export default function DefaultHeader({title}: DefaultHeaderProps) {
  return (
    <View className="py-3">
      <TouchableOpacity
        activeOpacity={0.7}
        className="absolute left-5 top-3 z-10"
        onPress={() => navigationRef.goBack()}>
        <Icon name="arrow-left" size={24} color={colors.white} />
      </TouchableOpacity>
      <DefaultText
        title={title}
        titleClassName="text-center text-warning font-inter-bold text-base"
      />
    </View>
  );
}
