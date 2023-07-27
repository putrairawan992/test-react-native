import {TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../utils/colors';
import DefaultText from '../DefaultText';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  buttonColors?: string[];
}

export default function Button({title, onPress, buttonColors}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <LinearGradient
        className="rounded-lg h-[47] justify-center items-center"
        colors={buttonColors ?? [colors.primary, colors.secondary]}>
        <DefaultText
          title={title}
          titleClassName="text-base font-inter-medium"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}
