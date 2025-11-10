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

// Exact Figma assets from SelectCard Screen node 424:1119
const imgVector = "https://www.figma.com/api/mcp/asset/5ee34d2c-8223-4f9b-8b47-6fa18b1a59e0";
const imgVector1 = "https://www.figma.com/api/mcp/asset/f83b1386-3014-40c5-95f0-0d79d239ada2";
const imgVector2 = "https://www.figma.com/api/mcp/asset/6deb1cff-41e1-4a20-8f74-db238534e556";
const imgVector3 = "https://www.figma.com/api/mcp/asset/2e3db8e9-c072-41c7-b557-757d7dcf1fe3";
const imgVector4 = "https://www.figma.com/api/mcp/asset/f88dfc4d-b852-418c-a8b5-00055fc78ce2";
const imgVector5 = "https://www.figma.com/api/mcp/asset/9dc66eda-f90a-4e1f-a2dc-bfe0fe3c17a3";
const img = "https://www.figma.com/api/mcp/asset/7f500840-bd73-44cb-9174-f279e32e3975";

const { width, height } = Dimensions.get('window');

type SelectCardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectCard'>;

interface SelectCardScreenProps {
  navigation: SelectCardScreenNavigationProp;
}

// Back Button Component
const BackButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={styles.backButton}>
    <Image source={{ uri: imgVector }} style={styles.backIcon} />
  </TouchableOpacity>
);

// Mastercard Logo Component
const LogosMastercard = () => (
  <View style={styles.mastercardContainer}>
    <Image source={{ uri: imgVector1 }} style={styles.mastercardBottom} />
    <Image source={{ uri: imgVector2 }} style={styles.mastercardCenter} />
    <Image source={{ uri: imgVector3 }} style={styles.mastercardLeft} />
    <Image source={{ uri: imgVector4 }} style={styles.mastercardRight} />
  </View>
);

export const SelectCardScreen: React.FC<SelectCardScreenProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleCardSelect = () => {
    navigation.navigate('CVV');
  };

  const handleAddCard = () => {
    // Navigate to add card flow or handle add card logic
    console.log('Add new card');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Decorative Element */}
        <View style={styles.decorativeElement}>
          <Image source={{ uri: imgVector5 }} style={styles.decorativeIcon} />
        </View>

        {/* Back Button */}
        <BackButton onPress={handleBack} />

        {/* Main Title */}
        <Text style={styles.mainTitle}>Selecciona tarjeta</Text>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Tarjetas guardadas</Text>

        {/* Cards Container */}
        <View style={styles.cardsContainer}>
          {/* Saved Card */}
          <TouchableOpacity style={styles.savedCard} onPress={handleCardSelect}>
            <View style={styles.cardContent}>
              <LogosMastercard />
              <View style={styles.cardTexts}>
                <Text style={styles.cardAlias}>Ingresa el alias de tu tarjeta</Text>
                <Text style={styles.cardNumber}>Ingresa tu número de tarjeta</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Add New Card */}
          <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
            <View style={styles.addCardContent}>
              <View style={styles.addCardIcon}>
                <Image source={{ uri: img }} style={styles.cardIconImage} />
              </View>
              <Text style={styles.addCardText}>Agregar nueva tarjeta</Text>
              <View style={styles.arrowContainer}>
                <Image source={{ uri: imgVector }} style={styles.arrowIcon} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Card Icon at bottom */}
        <View style={styles.bottomCardIcon}>
          {/* This seems to be a decorative icon based on Figma */}
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
  // Decorative element positioned absolutely - top left
  decorativeElement: {
    position: 'absolute',
    left: width * 0.0814, // 8.14% from left
    top: height * 0.5 - 334, // calc(50%+-334px) 
    width: 20,
    height: 20,
    zIndex: 1,
  },
  decorativeIcon: {
    width: '105%', // inset [-2.5%]
    height: '105%',
    position: 'absolute',
    left: '-2.5%',
    top: '-2.5%',
  },
  // Back button
  backButton: {
    position: 'absolute',
    left: width * 0.0814, // matching decorative element
    top: 60, // approximate positioning
    width: 20,
    height: 20,
    zIndex: 2,
  },
  backIcon: {
    width: '100%',
    height: '100%',
    // Using exact inset from Figma: inset-[14.65%_13.22%_14.65%_7.74%]
    marginTop: '14.65%',
    marginRight: '13.22%', 
    marginBottom: '14.65%',
    marginLeft: '7.74%',
  },
  // Main title
  mainTitle: {
    position: 'absolute',
    top: 74,
    left: '50%',
    transform: [{ translateX: -width * 0.5 }],
    fontSize: 26,
    fontFamily: 'Poppins_700Bold',
    color: '#013046',
    textAlign: 'center',
    letterSpacing: -0.52,
  },
  // Section title
  sectionTitle: {
    position: 'absolute',
    left: '25%',
    transform: [{ translateX: -82.25 }], // left-[calc(25%+-82.25px)]
    top: height * 0.5 - 292, // top-[calc(50%+-292px)]
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#026795',
    letterSpacing: -0.34,
  },
  // Cards container
  cardsContainer: {
    position: 'absolute',
    left: 17,
    top: height * 0.5 - 258, // top-[calc(50%+-258px)]
    width: 360,
    height: 263,
  },
  // Saved card (Mastercard)
  savedCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '22.43%', // bottom-[77.57%] means height is 22.43%
    backgroundColor: '#E6F3F9',
    borderRadius: 5,
    shadowColor: 'rgba(1,48,70,0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  // Mastercard logo container
  mastercardContainer: {
    width: 60, // approximate size based on aspect ratio and positioning
    height: 46,
    position: 'relative',
    left: '4.17%',
    marginRight: 15,
  },
  mastercardBottom: {
    position: 'absolute',
    top: '84.72%',
    left: '5.06%',
    right: '4.9%',
    bottom: '0.28%',
  },
  mastercardCenter: {
    position: 'absolute',
    top: '8.49%',
    left: '36.44%',
    right: '36.54%',
    bottom: '29.07%',
  },
  mastercardLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: '50.09%',
    bottom: '20.57%',
  },
  mastercardRight: {
    position: 'absolute',
    top: 0,
    left: '49.99%',
    right: '0.1%',
    bottom: '20.57%',
  },
  // Card texts
  cardTexts: {
    flex: 1,
    marginLeft: '21.11%', // positioning from Figma
  },
  cardAlias: {
    fontSize: 13,
    fontFamily: 'Montserrat_700Bold',
    color: '#025277',
    lineHeight: 19.5, // lineHeight 1.5 * fontSize
    marginBottom: 4,
  },
  cardNumber: {
    fontSize: 13,
    fontFamily: 'Montserrat_700Bold',
    color: '#013046',
    lineHeight: 19.5,
  },
  // Add card button
  addCardButton: {
    position: 'absolute',
    top: '221.29%', // positioning from bottom-[-143.73%] top-[221.29%]
    left: 0,
    right: 0,
    height: '22.43%', // same height as saved card
    backgroundColor: '#E6F3F9',
    borderRadius: 5,
    shadowColor: 'rgba(1,48,70,0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
  },
  addCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: '100%',
  },
  addCardIcon: {
    width: 24,
    height: 24,
    marginLeft: '5.28%',
  },
  cardIconImage: {
    width: '100%',
    height: '100%',
    tintColor: '#013046',
  },
  addCardText: {
    flex: 1,
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#013046',
    letterSpacing: -0.34,
    marginLeft: 15,
  },
  arrowContainer: {
    width: 18,
    height: 36,
    transform: [{ rotate: '180deg' }, { scaleY: -1 }], // rotate and flip
    marginRight: '5%',
  },
  arrowIcon: {
    width: '100%',
    height: '100%',
  },
  // Bottom card icon (decorative)
  bottomCardIcon: {
    position: 'absolute',
    left: 80,
    top: height * 0.5 + 106, // top-[calc(50%+106px)]
    width: 24,
    height: 24,
  },
});