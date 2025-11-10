import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../utils/theme';
import { CardData } from '../types/index';

interface CreditCardProps {
  card: CardData;
  onPress?: () => void;
  selected?: boolean;
}

export const CreditCard: React.FC<CreditCardProps> = ({ card, onPress, selected = false }) => {
  const formatCardNumber = (number: string) => {
    return number.replace(/(.{4})/g, '$1 ').trim();
  };

  const getCardIcon = () => {
    // En una implementación real, aquí usarías iconos de Visa/Mastercard
    return card.type.toUpperCase();
  };

  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardType}>{getCardIcon()}</Text>
        <Text style={styles.balance}>${card.balance.toFixed(2)}</Text>
      </View>
      
      <View style={styles.cardNumber}>
        <Text style={styles.cardNumberText}>
          {formatCardNumber(card.number)}
        </Text>
      </View>
      
      <View style={styles.cardFooter}>
        <Text style={styles.cardholderName}>{card.cardholderName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.sm,
    minHeight: 180,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardSelected: {
    borderWidth: 3,
    borderColor: theme.colors.success,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  cardType: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
  },
  balance: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  cardNumber: {
    marginBottom: theme.spacing.lg,
  },
  cardNumberText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: '600',
    letterSpacing: 2,
  },
  cardFooter: {
    marginTop: 'auto',
  },
  cardholderName: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});