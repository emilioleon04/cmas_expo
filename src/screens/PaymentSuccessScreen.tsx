import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Image,
  Dimensions 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

// Images from Figma PaymentSuccess Screen
const successIcon = 'https://www.figma.com/api/mcp/asset/02b9e67c-9814-4e7b-82bc-56df288ae8b9';

const { width } = Dimensions.get('window');

type PaymentSuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PaymentSuccess'>;

interface PaymentSuccessScreenProps {
  navigation: PaymentSuccessScreenNavigationProp;
}

export const PaymentSuccessScreen: React.FC<PaymentSuccessScreenProps> = ({ navigation }) => {
  const handleBackToBalance = () => {
    navigation.navigate('Balance');
  };

  const handleNewPayment = () => {
    navigation.navigate('SelectCard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <Image source={{ uri: successIcon }} style={styles.successIconImage} />
        </View>
        
        {/* Success Title */}
        <Text style={styles.title}>¡Pago exitoso!</Text>
        
        {/* Success Message */}
        <Text style={styles.subtitle}>
          Tu pago se ha procesado{'\n'}
          correctamente
        </Text>

        {/* Payment Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Detalles del pago</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Monto:</Text>
            <Text style={styles.detailValue}>$150.00</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Tarjeta:</Text>
            <Text style={styles.detailValue}>•••• •••• •••• 1234</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fecha:</Text>
            <Text style={styles.detailValue}>{new Date().toLocaleDateString('es-ES')}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID Transacción:</Text>
            <Text style={styles.detailValue}>TXN{Date.now().toString().slice(-6)}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleBackToBalance}>
            <Text style={styles.primaryButtonText}>Volver al inicio</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryButton} onPress={handleNewPayment}>
            <Text style={styles.secondaryButtonText}>Realizar otro pago</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  successIconImage: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#013046',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#026795',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  detailsContainer: {
    backgroundColor: '#F5F7FA',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    marginBottom: 40,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#013046',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#013046',
  },
  buttonsContainer: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#0084C2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#026795',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#026795',
  },
});