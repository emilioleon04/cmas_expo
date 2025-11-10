import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  TextInput,
  Dimensions 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

// Images from Figma CVV Screen
const backArrowIcon = 'https://www.figma.com/api/mcp/asset/95dda077-c245-46c9-951d-29fac91caffd';
const cardIcon = 'https://www.figma.com/api/mcp/asset/166ea63a-8945-446d-b951-36593b804ce5';
const cardBackgroundImage = 'https://www.figma.com/api/mcp/asset/9bd6c07b-2b9e-416b-b36e-729e89f6dc3c';
const mastercardLogo = 'https://www.figma.com/api/mcp/asset/3ba14233-e673-40c7-a0b8-2871921484b9';

const { width } = Dimensions.get('window');

type CVVScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CVV'>;

interface CVVScreenProps {
  navigation: CVVScreenNavigationProp;
}

export const CVVScreen: React.FC<CVVScreenProps> = ({ navigation }) => {
  const [cvv, setCvv] = useState('');

  const handleConfirm = () => {
    if (cvv.length === 3) {
      navigation.navigate('Loading');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCvvChange = (text: string) => {
    if (text.length <= 3) {
      setCvv(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image source={{ uri: backArrowIcon }} style={styles.backIcon} />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>Ingresa el CVV</Text>

        {/* Card Display */}
        <View style={styles.cardContainer}>
          <View style={styles.creditCard}>
            <Image source={{ uri: cardBackgroundImage }} style={styles.cardBackground} />
            
            {/* Card Content Overlay */}
            <View style={styles.cardOverlay}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Ingresa el alias de tu tarjeta</Text>
              </View>
              
              <Text style={styles.cardNumber}>Ingresa tu número de tarjeta</Text>
              
              <View style={styles.cardFooter}>
                <View style={styles.expiryContainer}>
                  <Text style={styles.expiryText}>mm</Text>
                  <Text style={styles.expirySlash}>/</Text>
                  <Text style={styles.expiryText}>yyyy</Text>
                </View>
                
                <Image source={{ uri: mastercardLogo }} style={styles.mastercardLogo} />
              </View>
              
              <Text style={styles.cardHolderText}>Ingresa el nombre que aparece en la tarjeta</Text>
            </View>
          </View>
        </View>

        {/* CVV Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Codigo de seguridad de tu tarjeta (CVV)</Text>
          <Text style={styles.instructionsSubtitle}>3 dígitos al reverso de tu tarjeta</Text>
        </View>

        {/* Card Icon with CVV Visual */}
        <View style={styles.cvvVisualContainer}>
          <Image source={{ uri: cardIcon }} style={styles.cardIconLarge} />
          <View style={styles.asterisksContainer}>
            <Text style={styles.asterisk}>*</Text>
            <Text style={styles.asterisk}>*</Text>
            <Text style={styles.asterisk}>*</Text>
            <View style={styles.cvvBox} />
          </View>
        </View>

        {/* CVV Input Field */}
        <View style={styles.cvvInputContainer}>
          <TextInput
            style={styles.cvvInput}
            value={cvv}
            onChangeText={handleCvvChange}
            keyboardType="numeric"
            maxLength={3}
            placeholder="000"
            placeholderTextColor="#999999"
            textAlign="center"
          />
        </View>

        {/* Confirm Button */}
        <TouchableOpacity 
          style={[styles.confirmButton, cvv.length !== 3 && styles.disabledButton]} 
          onPress={handleConfirm}
          disabled={cvv.length !== 3}
        >
          <Text style={[styles.confirmButtonText, cvv.length !== 3 && styles.disabledButtonText]}>
            Confirmar
          </Text>
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
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#013046',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#013046',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  creditCard: {
    width: width * 0.85,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    marginTop: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expiryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expiryText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  expirySlash: {
    fontSize: 11,
    color: '#FFFFFF',
    marginHorizontal: 2,
  },
  mastercardLogo: {
    width: 32,
    height: 20,
  },
  cardHolderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 8,
  },
  instructionsContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  instructionsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#026795',
    textAlign: 'center',
    marginBottom: 8,
  },
  instructionsSubtitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#026795',
    textAlign: 'center',
  },
  cvvVisualContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  cardIconLarge: {
    width: 63,
    height: 63,
    marginBottom: 16,
    tintColor: '#026795',
  },
  asterisksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  asterisk: {
    fontSize: 16,
    color: '#999999',
    marginHorizontal: 2,
  },
  cvvBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#FF484B',
    borderRadius: 4,
    marginLeft: 4,
  },
  cvvInputContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  cvvInput: {
    width: 178,
    height: 60,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    fontSize: 40,
    color: '#999999',
    textAlign: 'center',
    letterSpacing: 24,
    backgroundColor: '#FFFFFF',
  },
  confirmButton: {
    backgroundColor: '#006B9E',
    borderRadius: 13,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#E5E5E5',
  },
  confirmButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#E6F4FB',
  },
  disabledButtonText: {
    color: '#999999',
  },
});