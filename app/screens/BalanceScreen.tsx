import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  Image
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../utils/theme';

// Images from Figma Balance Screen (exact assets)
const menuIcon = 'https://www.figma.com/api/mcp/asset/83eb6cc0-d640-4a2e-a852-5adda16db212';
const balanceDecorationIcon1 = 'https://www.figma.com/api/mcp/asset/28a0f52e-dd00-4fac-aa3f-739c5583f0b7';
const balanceDecorationIcon2 = 'https://www.figma.com/api/mcp/asset/2f6bf2a6-192e-4f64-8a26-2238ece5ce81';
const balanceDecorationIcon3 = 'https://www.figma.com/api/mcp/asset/b2f6c00b-ef59-4696-9682-90c2e71268c0';
const balanceDecorationIcon4 = 'https://www.figma.com/api/mcp/asset/f016b237-ec62-49d4-98f3-54164ace7442';
const addAccountIcon = 'https://www.figma.com/api/mcp/asset/383ff64b-4efb-474d-900b-949202f0d156';
const plusIcon = 'https://www.figma.com/api/mcp/asset/c81e6825-578d-4cb9-8de4-bbdf2e87b15c';
const chevronIcon = 'https://www.figma.com/api/mcp/asset/b2396dc7-8b8f-4a89-9edc-544b14e37c42';
const dropdownIcon = 'https://www.figma.com/api/mcp/asset/3fae07e1-5a44-4fdb-a525-f152b82556bf';
const scheduleIcon = 'https://www.figma.com/api/mcp/asset/052b336c-4254-424c-b4dd-f445caa8c062';
const calendarIcon = 'https://www.figma.com/api/mcp/asset/c2a5be27-73ab-4cb8-a062-df554442c5d5';
const attentionIcon = 'https://www.figma.com/api/mcp/asset/31492731-1598-4c74-ae9b-de858aaab405';

// Navigation icons
const reportIcon = 'https://www.figma.com/api/mcp/asset/078deb93-26e4-4b93-a51f-495b8b3c1157';
const homeIconActive = 'https://www.figma.com/api/mcp/asset/42ffb5d7-8d3e-42c5-8ce9-4d0d1958c19a';
const receiptIcon = 'https://www.figma.com/api/mcp/asset/618192ab-cc21-4416-86c3-3c69185fca2a';

type BalanceScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Balance'>;

interface BalanceScreenProps {
  navigation: BalanceScreenNavigationProp;
}

const BalanceScreen: React.FC<BalanceScreenProps> = ({ navigation }) => {
  const handlePayment = () => {
    navigation.navigate('SelectCard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Saldo</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={{ uri: menuIcon }} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          {/* Decorative elements */}
          <Image source={{ uri: balanceDecorationIcon1 }} style={styles.decorationIcon1} />
          <Image source={{ uri: balanceDecorationIcon2 }} style={styles.decorationIcon2} />
          <Image source={{ uri: balanceDecorationIcon3 }} style={styles.decorationIcon3} />
          <Image source={{ uri: balanceDecorationIcon4 }} style={styles.decorationIcon4} />
          
          <Text style={styles.balanceLabel}>Total a pagar</Text>
          <Text style={styles.balanceAmount}>$0.00</Text>
          <Text style={styles.balanceStatus}>Sin adeudo</Text>
        </View>

        {/* Account Selector */}
        <TouchableOpacity style={styles.accountSelector}>
          <Text style={styles.accountText}>Cuenta 1 - 73810</Text>
          <Image source={{ uri: dropdownIcon }} style={styles.dropdownIcon} />
        </TouchableOpacity>

        {/* Account Information */}
        <View style={styles.accountInfo}>
          <View style={styles.infoRow}>
            <Image source={{ uri: scheduleIcon }} style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Periodo:</Text>
              <Text style={styles.infoValue}>Noviembre 2025</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Image source={{ uri: calendarIcon }} style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Fecha límite de pago:</Text>
              <Text style={styles.infoValue}>30/11/2025</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Image source={{ uri: attentionIcon }} style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Atrasos:</Text>
              <Text style={styles.infoValue}>0</Text>
            </View>
          </View>
        </View>

        {/* Add Account Button */}
        <TouchableOpacity style={styles.addAccountButton}>
          <View style={styles.addAccountIcon}>
            <Image source={{ uri: plusIcon }} style={styles.plusIcon} />
          </View>
          <View style={styles.addAccountContent}>
            <Text style={styles.addAccountTitle}>Agregar cuenta</Text>
            <Text style={styles.addAccountSubtitle}>Agrega una nueva cuenta para pagar</Text>
          </View>
          <Image source={{ uri: chevronIcon }} style={styles.chevronIconRotated} />
        </TouchableOpacity>

        {/* Pay Button */}
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={{ uri: reportIcon }} style={styles.navIcon} />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Image source={{ uri: homeIconActive }} style={styles.navIcon} />
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Image source={{ uri: receiptIcon }} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: theme.fontSizes.xxxl,
    fontFamily: 'Poppins_700Bold',
    color: theme.colors.tertiary,
    textAlign: 'center',
    flex: 1,
  },
  menuButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  balanceCard: {
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
    height: 220,
  },
  decorationIcon1: {
    position: 'absolute',
    width: 80,
    height: 108,
    top: 18,
    right: 45,
    opacity: 0.3,
  },
  decorationIcon2: {
    position: 'absolute',
    width: 60,
    height: 81,
    bottom: 7,
    right: 51,
    opacity: 0.3,
  },
  decorationIcon3: {
    position: 'absolute',
    width: 51,
    height: 132,
    top: 0,
    right: 42,
    opacity: 0.3,
  },
  decorationIcon4: {
    position: 'absolute',
    width: 21,
    height: 37,
    top: 70,
    left: 32,
    opacity: 0.3,
  },
  balanceLabel: {
    fontSize: theme.fontSizes.lg,
    fontFamily: 'Poppins_600SemiBold',
    color: theme.colors.textLight,
    marginBottom: 20,
    marginTop: 8,
  },
  balanceAmount: {
    fontSize: 48,
    fontFamily: 'Montserrat_700Bold',
    color: theme.colors.textLight,
    marginBottom: 20,
    lineHeight: 58,
  },
  balanceStatus: {
    fontSize: theme.fontSizes.lg,
    fontFamily: 'Poppins_600SemiBold',
    color: theme.colors.textLight,
  },
  accountSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 13,
    paddingHorizontal: 14,
    paddingVertical: 22,
    marginBottom: 24,
  },
  accountText: {
    fontSize: theme.fontSizes.md,
    fontFamily: 'Poppins_500Medium',
    color: theme.colors.primary,
  },
  dropdownIcon: {
    width: 35,
    height: 35,
  },
  accountInfo: {
    backgroundColor: '#E6F3F9',
    borderRadius: 20,
    padding: 18,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  infoLabel: {
    fontSize: theme.fontSizes.md,
    fontFamily: 'Poppins_500Medium',
    color: theme.colors.primary,
    marginRight: 8,
  },
  infoValue: {
    fontSize: theme.fontSizes.sm,
    fontFamily: 'Poppins_300Light',
    color: theme.colors.primary,
  },
  addAccountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F3F9',
    borderRadius: 5,
    padding: 8,
    marginBottom: 24,
  },
  addAccountIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  plusIcon: {
    width: 14,
    height: 14,
  },
  addAccountContent: {
    flex: 1,
  },
  addAccountTitle: {
    fontSize: theme.fontSizes.md,
    fontFamily: 'Poppins_500Medium',
    color: theme.colors.primary,
    marginBottom: 2,
  },
  addAccountSubtitle: {
    fontSize: theme.fontSizes.sm,
    fontFamily: 'Poppins_300Light',
    color: theme.colors.primary,
  },
  chevronIconRotated: {
    width: 39,
    height: 39,
    transform: [{ rotate: '270deg' }],
  },
  payButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 13,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  payButtonText: {
    fontSize: theme.fontSizes.xl,
    fontFamily: 'Poppins_600SemiBold',
    color: theme.colors.white,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    paddingVertical: 18,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
    position: 'relative',
  },
  activeNavItem: {
    // Active state styling
  },
  navIcon: {
    width: 29,
    height: 32,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -10,
    width: 53,
    height: 2,
    backgroundColor: theme.colors.primary,
  },
});

export default BalanceScreen;