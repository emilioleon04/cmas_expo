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

// Images from Figma Balance Screen
const bellIcon = 'https://www.figma.com/api/mcp/asset/2b259b16-2c66-4493-acf3-50d5f528dea3';
const eyeIcon = 'https://www.figma.com/api/mcp/asset/99b20cec-c1ea-4860-8e87-dd5f932ebf43';
const cardImage = 'https://www.figma.com/api/mcp/asset/9bd6c07b-2b9e-416b-b36e-729e89f6dc3c';
const arrowIcon = 'https://www.figma.com/api/mcp/asset/8ad5fd30-6b97-4edf-9ba8-529b6b0e0162';
const homeIcon = 'https://www.figma.com/api/mcp/asset/ee3962fb-f5b3-4336-8ac1-65127b50e277';
const cardIcon = 'https://www.figma.com/api/mcp/asset/96bbc0d0-0bfc-47d0-8e2d-75e1ee1974ce';
const transferIcon = 'https://www.figma.com/api/mcp/asset/ea1f27be-0c1e-4b57-a780-bb8aa5aa7d7c';
const userIcon = 'https://www.figma.com/api/mcp/asset/753ba195-ca49-4243-8ae0-c4a71e88f9c3';

const { width } = Dimensions.get('window');

type BalanceScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Balance'>;

interface BalanceScreenProps {
  navigation: BalanceScreenNavigationProp;
}

export const BalanceScreen: React.FC<BalanceScreenProps> = ({ navigation }) => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const handlePayment = () => {
    navigation.navigate('SelectCard');
  };

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.greeting}>Hola, Victor</Text>
            <Text style={styles.subtitle}>Bienvenido de nuevo</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Image source={{ uri: bellIcon }} style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Mi Saldo</Text>
            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Image source={{ uri: eyeIcon }} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.balanceAmount}>
            {balanceVisible ? '$1,245.00' : '****'}
          </Text>
          <Text style={styles.accountNumber}>**** **** **** 1234</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickActionItem} onPress={handlePayment}>
              <View style={styles.quickActionIcon}>
                <Image source={{ uri: transferIcon }} style={styles.actionIcon} />
              </View>
              <Text style={styles.quickActionText}>Pagar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionIcon}>
                <Image source={{ uri: cardIcon }} style={styles.actionIcon} />
              </View>
              <Text style={styles.quickActionText}>Tarjetas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionIcon}>
                <Image source={{ uri: transferIcon }} style={styles.actionIcon} />
              </View>
              <Text style={styles.quickActionText}>Transferir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionIcon}>
                <Image source={{ uri: userIcon }} style={styles.actionIcon} />
              </View>
              <Text style={styles.quickActionText}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionsContainer}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.sectionTitle}>Transacciones Recientes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Image source={{ uri: cardIcon }} style={styles.actionIcon} />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Pago de Servicios</Text>
              <Text style={styles.transactionDate}>Hoy, 2:30 PM</Text>
            </View>
            <Text style={styles.transactionAmount}>-$45.00</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Image source={{ uri: transferIcon }} style={styles.actionIcon} />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>Transferencia</Text>
              <Text style={styles.transactionDate}>Ayer, 5:15 PM</Text>
            </View>
            <Text style={styles.transactionAmount}>-$120.00</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={{ uri: homeIcon }} style={styles.navIcon} />
          <Text style={styles.navText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={{ uri: cardIcon }} style={styles.navIcon} />
          <Text style={styles.navText}>Tarjetas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={{ uri: transferIcon }} style={styles.navIcon} />
          <Text style={styles.navText}>Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={{ uri: userIcon }} style={styles.navIcon} />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 24,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#026795',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationIcon: {
    width: 20,
    height: 20,
  },
  balanceCard: {
    backgroundColor: '#026795',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  quickActionsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#013046',
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionItem: {
    alignItems: 'center',
    flex: 1,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 24,
    height: 24,
    tintColor: '#026795',
  },
  quickActionText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  transactionsContainer: {
    marginBottom: 24,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#026795',
    fontWeight: '500',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#013046',
    marginBottom: 2,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999999',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF4757',
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIcon: {
    width: 20,
    height: 20,
    marginBottom: 4,
    tintColor: '#026795',
  },
  navText: {
    fontSize: 10,
    color: '#026795',
    fontWeight: '500',
  },
});