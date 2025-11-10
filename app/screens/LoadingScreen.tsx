import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

// Exact Figma assets from Loading Screen node 424:1433
const imgAtras = "https://www.figma.com/api/mcp/asset/aa7fbca8-89e6-46d1-bbf2-f4137511ec29";
const imgAtras1 = "https://www.figma.com/api/mcp/asset/2e10161b-50d2-4854-bbca-5873b28db869";
const imgAdelante = "https://www.figma.com/api/mcp/asset/08e30fd1-14ab-451c-b235-eb3758b3184c";

const { width, height } = Dimensions.get('window');

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

interface LoadingScreenProps {
  navigation: LoadingScreenNavigationProp;
}

// Gota Component with animation
const Gota = ({ style }: { style?: any }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const animateDrops = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    
    animateDrops();
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 1, 0.3],
  });

  return (
    <Animated.View 
      style={[
        styles.gotaContainer,
        style,
        {
          transform: [{ translateY }],
          opacity,
        }
      ]}
    >
      <View style={styles.agua}>
        <View style={styles.atras}>
          <Image source={{ uri: imgAtras1 }} style={styles.waterImage} />
        </View>
        <View style={styles.adelante}>
          <Image source={{ uri: imgAdelante }} style={styles.waterImage} />
        </View>
      </View>
    </Animated.View>
  );
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // Simular procesamiento del pago - navegar a PaymentSuccess después de 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate('PaymentSuccess');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Capa - Main Layer */}
        <View style={styles.capa}>
          {/* Loading Text */}
          <Text style={styles.loadingText}>Pagando cuenta...</Text>
          
          {/* Water Drop Animation */}
          <Gota style={styles.mainGota} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  // Main layer container
  capa: {
    position: 'absolute',
    left: 65,
    top: height * 0.5 - 155, // top-[calc(50%+-155px)]
    width: width - 130, // account for left margin
    height: 200,
  },
  // Loading text
  loadingText: {
    position: 'absolute',
    left: 196.5 - 65, // adjust for container offset
    top: height * 0.5 + 21 - (height * 0.5 - 155), // relative to capa container
    transform: [{ translateX: -131.5 }], // center text (263/2)
    width: 263,
    fontSize: 24,
    fontFamily: 'Poppins_700Bold', // Using Poppins Bold as alternative to Inter
    color: '#025277',
    textAlign: 'center',
    lineHeight: 'normal' as any,
  },
  // Main gota (water drop)
  mainGota: {
    position: 'absolute',
    left: '25%',
    top: 0, // top of capa container
    transform: [{ translateX: 40.75 - (width - 130) * 0.25 }], // left-[calc(25%+40.75px)]
    width: 114.798,
    height: 154,
  },
  // Gota container
  gotaContainer: {
    width: 114.798,
    height: 154,
    position: 'relative',
  },
  // Water elements container
  agua: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  // Background water layer
  atras: {
    position: 'absolute',
    width: 67,
    height: 89.538,
    left: 20, // approximate positioning
    top: 30, // approximate positioning
    opacity: 0.7,
  },
  // Foreground water layer
  adelante: {
    position: 'absolute',
    width: 67,
    height: 89.538,
    left: 25, // slightly offset from atras
    top: 35, // slightly offset from atras
    opacity: 0.9,
  },
  // Water images
  waterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain' as const,
  },
});