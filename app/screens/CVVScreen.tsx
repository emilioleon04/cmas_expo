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
import { RootStackParamList } from '../types/navigation';
import BackButton from '../components/backButton';

// Exact Figma assets from CVV Screen node 424:1190
const img31 = "https://www.figma.com/api/mcp/asset/a77b2269-4770-4efb-8822-c4704999e5fa";
const imgGroup275 = "https://www.figma.com/api/mcp/asset/0386b8b4-df30-42a7-bd58-c48bc72ee6e2";
const imgVector = "https://www.figma.com/api/mcp/asset/060cfff2-decc-448f-8ca5-ee9e43a2830f";
const imgVector1 = "https://www.figma.com/api/mcp/asset/975f175d-b60a-4a3a-9344-8bac57aa807e";
const imgGroup = "https://www.figma.com/api/mcp/asset/6d3a6c3a-0084-4ec5-a9c5-25b1fb7524c5";
const imgVector2 = "https://www.figma.com/api/mcp/asset/a06475db-5125-40c4-9b23-4134d2fe84f3";
const imgVector3 = "https://www.figma.com/api/mcp/asset/976a32f9-a713-4d40-9258-77c08c38b2e2";
// Card asset images
const img = "https://www.figma.com/api/mcp/asset/426c9654-d544-4ca5-9c35-4185408eb3bb";

const { width, height } = Dimensions.get('window');

type CVVScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CVV'>;

interface CVVScreenProps {
  navigation: CVVScreenNavigationProp;
}

// Credit Card Icon Component
const IconamoonCreditCardFill = () => (
  <View style={styles.cardIconContainer}>
    <Image source={{ uri: imgVector1 }} style={styles.cardIcon} />
  </View>
);

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
    if (text.length <= 3 && /^\d*$/.test(text)) {
      setCvv(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <BackButton size={22} />
          <Text style={styles.title}>Ingresa el CVV</Text>
        </View>

        {/* Credit Card Section */}
        <View style={styles.cardSection}>
          <View style={styles.creditCard}>
            <Image source={{ uri: img }} style={styles.cardBackground} />
            <View style={styles.cardOverlay}>
              <Text style={styles.cardAlias}>Ingresa el alias de tu tarjeta</Text>
              <Text style={styles.cardNumber}>**** **** ****nero de tarjeta</Text>
              <View style={styles.cardFooter}>
                <View style={styles.cardLeft}>
                  <Text style={styles.cardLabel}>Card Holder name</Text>
                  <Text style={styles.cardHolder}>Ingresa el nombre que aparece en la tarjeta</Text>
                </View>
                <View style={styles.cardRight}>
                  <Text style={styles.cardLabel}>Expiry Date</Text>
                  <Text style={styles.cardExpiry}>mm / yyyy</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* CVV Instructions */}
        <Text style={styles.cvvTitle}>Codigo de seguridad de tu tarjeta (CVV)</Text>

        {/* CVV Input Section */}
        <View style={styles.cvvSection}>
          <View style={styles.cvvInputRow}>
            <TextInput
              style={styles.cvvDigit}
              value={cvv[0] || ''}
              onChangeText={(text) => handleCvvChange(cvv.substring(1) ? cvv[1] + cvv[2] + text : text)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
            <TextInput
              style={styles.cvvDigit}
              value={cvv[1] || ''}
              onChangeText={(text) => handleCvvChange((cvv[0] || '') + text + (cvv[2] || ''))}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
            <TextInput
              style={styles.cvvDigit}
              value={cvv[2] || ''}
              onChangeText={(text) => handleCvvChange((cvv[0] || '') + (cvv[1] || '') + text)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
            />
          </View>
          <View style={styles.underline} />
        </View>

        <Text style={styles.cvvSubtitle}>3 dígitos al reverso de tu tarjeta</Text>

        {/* Card Icon */}
        <View style={styles.cardIconSection}>
          <IconamoonCreditCardFill />
        </View>

        {/* Confirm Button */}
        <View style={styles.buttonSection}>
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
  // Header Section
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    position: 'relative',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#013046',
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
    fontSize: 26,
    fontFamily: 'Poppins_700Bold',
    color: '#013046',
    textAlign: 'center',
    letterSpacing: -0.52,
    marginLeft: -40, // Compensate for back button width
  },
  // Card Section
  cardSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  creditCard: {
    width: width * 0.9,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover' as const,
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
  cardAlias: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 19,
    fontFamily: 'Montserrat_400Regular',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  cardLeft: {
    flex: 1,
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  cardLabel: {
    fontSize: 8,
    fontFamily: 'Montserrat_400Regular',
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 2,
  },
  cardHolder: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    color: '#FFFFFF',
  },
  cardExpiry: {
    fontSize: 11,
    fontFamily: 'Montserrat_400Regular',
    color: '#FFFFFF',
  },
  // CVV Section
  cvvTitle: {
    fontSize: 13,
    fontFamily: 'Montserrat_700Bold',
    color: '#026795',
    textAlign: 'center',
    marginVertical: 20,
  },
  cvvSection: {
    alignItems: 'center',
    marginVertical: 10,
  },
  cvvInputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  cvvDigit: {
    width: 50,
    height: 60,
    fontSize: 40,
    fontFamily: 'Montserrat_400Regular',
    color: '#999999',
    textAlign: 'center',
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  underline: {
    width: 180,
    height: 2,
    backgroundColor: '#026795',
    marginTop: 5,
  },
  cvvSubtitle: {
    fontSize: 12,
    fontFamily: 'Poppins_300Light',
    color: '#026795',
    textAlign: 'center',
    letterSpacing: -0.24,
    marginVertical: 10,
  },
  // Card Icon Section
  cardIconSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  cardIconContainer: {
    width: 63,
    height: 63,
  },
  cardIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain' as const,
  },
  // Button Section
  buttonSection: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#006B9E',
    borderRadius: 13,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 0,
  },
  disabledButton: {
    backgroundColor: '#E5E5E5',
  },
  confirmButtonText: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#E6F4FB',
    letterSpacing: -0.34,
  },
  disabledButtonText: {
    color: '#999999',
  },
  // Unused styles for asterisk components
  asteriskContainer: {
    width: 8,
    height: 8,
  },
  asteriskIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain' as const,
  },
});