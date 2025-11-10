import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Dimensions 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { CardData } from '../types/index';

// Images from Figma SelectCard Screen  
const backArrowIcon = 'https://www.figma.com/api/mcp/asset/95dda077-c245-46c9-951d-29fac91caffd';
const cardBackgroundImage = 'https://www.figma.com/api/mcp/asset/9bd6c07b-2b9e-416b-b36e-729e89f6dc3c';
const mastercardLogo = 'https://www.figma.com/api/mcp/asset/3ba14233-e673-40c7-a0b8-2871921484b9';
const addCardIcon = 'https://www.figma.com/api/mcp/asset/ff8ac70c-f258-4484-8b49-9a6e2fd67ef6';

const { width } = Dimensions.get('window');

type SelectCardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectCard'>;

interface SelectCardScreenProps {
  navigation: SelectCardScreenNavigationProp;
}

export const SelectCardScreen: React.FC<SelectCardScreenProps> = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedCard) {
      navigation.navigate('CVV');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Image source={{ uri: backArrowIcon }} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Seleccionar tarjeta</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Elige la tarjeta para realizar el pago</Text>

        {/* Cards Section */}
        <ScrollView style={styles.cardsContainer} showsVerticalScrollIndicator={false}>
          {/* Main Credit Card */}
          <TouchableOpacity 
            style={[styles.cardContainer, selectedCard === 'main' && styles.selectedCard]} 
            onPress={() => setSelectedCard('main')}
          >
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
            
            {selectedCard === 'main' && (
              <View style={styles.selectionIndicator} />
            )}
          </TouchableOpacity>

          {/* Add New Card Option */}
          <TouchableOpacity 
            style={[styles.addCardContainer, selectedCard === 'add' && styles.selectedCard]}
            onPress={() => setSelectedCard('add')}
          >
            <View style={styles.addCardContent}>
              <Image source={{ uri: addCardIcon }} style={styles.addCardIcon} />
              <Text style={styles.addCardText}>Agregar nueva tarjeta</Text>
            </View>
            
            {selectedCard === 'add' && (
              <View style={styles.selectionIndicator} />
            )}
          </TouchableOpacity>
        </ScrollView>

        {/* Continue Button */}
        <TouchableOpacity 
          style={[styles.continueButton, !selectedCard && styles.disabledButton]} 
          onPress={handleContinue}
          disabled={!selectedCard}
        >
          <Text style={[styles.continueButtonText, !selectedCard && styles.disabledButtonText]}>
            Continuar
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
    justifyContent: 'space-between',
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#013046',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#013046',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  cardsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  cardContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#026795',
    borderRadius: 16,
  },
  creditCard: {
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
  selectionIndicator: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#026795',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addCardContainer: {
    height: 80,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  addCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCardIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#026795',
  },
  addCardText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#026795',
  },
  continueButton: {
    backgroundColor: '#006B9E',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#E5E5E5',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  disabledButtonText: {
    color: '#999999',
  },
});