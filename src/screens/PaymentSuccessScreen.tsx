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

// Exact Figma assets from PaymentSuccess Screen node 424:1463
const imgExito = "https://www.figma.com/api/mcp/asset/4f052f50-8a54-435c-8bee-69f2ee82ebc0";
const imgVector = "https://www.figma.com/api/mcp/asset/874c49bf-9c20-4163-8cbb-3cb2edb3c6da";

const { width, height } = Dimensions.get('window');

type PaymentSuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PaymentSuccess'>;

interface PaymentSuccessScreenProps {
  navigation: PaymentSuccessScreenNavigationProp;
}

export const PaymentSuccessScreen: React.FC<PaymentSuccessScreenProps> = ({ navigation }) => {
  const handleEntendido = () => {
    navigation.navigate('Balance');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Pago exitoso - Title */}
        <Text style={styles.title}>Pago exitoso</Text>
        
        {/* Success Icon - Exito */}
        <View style={styles.exitoContainer}>
          <Image source={{ uri: imgExito }} style={styles.exitoImage} />
        </View>

        {/* Monto Section */}
        <View style={styles.montoSection}>
          <Text style={styles.montoLabel}>Monto pagado</Text>
          <View style={styles.montoContainer}>
            <Text style={styles.dollarSign}>$</Text>
            <Text style={styles.montoValue}>00.00</Text>
          </View>
        </View>

        {/* Email Section */}
        <View style={styles.emailSection}>
          <Text style={styles.reciboText}>Tu recibo fue enviado a:</Text>
          <Text style={styles.emailPrompt}>Ingresa tu correo electrónico</Text>
        </View>

        {/* Information Panel */}
        <View style={styles.infoPanel}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Periodo:</Text>
            <Text style={styles.infoValue}>Junio 2025</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>No. de servicio:</Text>
            <Text style={styles.infoValue}>000000000000</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Fecha de pago:</Text>
            <Text style={styles.infoValue}>16/06/2026</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>No. de referencia:</Text>
            <Text style={styles.infoValue}>LL-00000000</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estatus:</Text>
            <Text style={styles.infoValue}>Sin adeudo</Text>
          </View>
        </View>

        {/* Entendido Button */}
        <TouchableOpacity style={styles.entendidoButton} onPress={handleEntendido}>
          <Text style={styles.entendidoButtonText}>Entendido</Text>
        </TouchableOpacity>
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
    paddingTop: 60,
    paddingBottom: 40,
  },
  // Title - Pago exitoso
  title: {
    fontSize: 26,
    fontFamily: 'Poppins_700Bold',
    color: '#013046',
    textAlign: 'center',
    letterSpacing: -0.52,
    marginBottom: 40,
  },
  // Success Icon - Exito
  exitoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  exitoImage: {
    width: 83,
    height: 84,
    resizeMode: 'contain' as const,
  },
  // Monto Section
  montoSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  montoLabel: {
    fontSize: 23,
    fontFamily: 'Montserrat_700Bold',
    color: '#026795',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 16,
  },
  montoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  dollarSign: {
    fontSize: 48,
    fontFamily: 'Montserrat_700Bold',
    color: '#026795',
    lineHeight: 72,
    marginRight: 4,
  },
  montoValue: {
    fontSize: 48,
    fontFamily: 'Montserrat_700Bold',
    color: '#026795',
    lineHeight: 72,
  },
  // Email Section
  emailSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  reciboText: {
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    color: '#0084C2',
    textAlign: 'center',
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  emailPrompt: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#026795',
    textAlign: 'center',
    letterSpacing: -0.34,
  },
  // Information Panel
  infoPanel: {
    backgroundColor: '#E6F3F9',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#026795',
    letterSpacing: -0.34,
    flex: 1,
  },
  infoValue: {
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    color: '#0084C2',
    letterSpacing: -0.3,
    flex: 1,
    textAlign: 'right',
  },
  // Entendido Button
  entendidoButton: {
    backgroundColor: '#006B9E',
    borderRadius: 13,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  entendidoButtonText: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#E6F4FB',
    letterSpacing: -0.34,
  },
});