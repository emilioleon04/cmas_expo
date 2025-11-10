import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

// Loading spinner icon - using a simple activity indicator for now
const loadingIcon = 'https://www.figma.com/api/mcp/asset/02b9e67c-9814-4e7b-82bc-56df288ae8b9';

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

interface LoadingScreenProps {
  navigation: LoadingScreenNavigationProp;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // Simular procesamiento del pago
    const timer = setTimeout(() => {
      navigation.navigate('PaymentSuccess');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator size="large" color="#026795" style={styles.spinner} />
        <Text style={styles.title}>Procesando Pago</Text>
        <Text style={styles.subtitle}>
          Por favor espera mientras{'\n'}
          procesamos tu transacción
        </Text>
        
        <View style={styles.steps}>
          <Text style={styles.stepCompleted}>✓ Validando datos</Text>
          <Text style={styles.stepCompleted}>✓ Conectando con el banco</Text>
          <Text style={styles.stepInProgress}>⏳ Procesando transacción</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  spinner: {
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#013046',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  steps: {
    alignItems: 'flex-start',
  },
  stepCompleted: {
    fontSize: 16,
    color: '#026795',
    marginBottom: 12,
    fontWeight: '500',
  },
  stepInProgress: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 12,
    fontWeight: '500',
  },
});