// components/common/BackButton.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageStyle, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

type Props = {
  onPress?: () => void;
  size?: number;           // tamaño del ícono (ancho/alto)
  tintColor?: string;      // color opcional si tu PNG es monocromo
  style?: ViewStyle;       // estilos para el touchable
  imageStyle?: ImageStyle; // estilos para la imagen
  hitSlop?: { top?: number; left?: number; bottom?: number; right?: number };
};

export default function BackButton({
  onPress,
  size = 24,
  tintColor,
  style,
  imageStyle,
  hitSlop = { top: 10, left: 10, bottom: 10, right: 10 },
}: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={onPress ?? (() => router.back())}
      style={[styles.btn, style]}
      hitSlop={hitSlop}
      activeOpacity={0.7}
    >
      <Image
        source={require('../assets/images/back.png')}
        style={[{ width: size, height: size, tintColor }, imageStyle]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
