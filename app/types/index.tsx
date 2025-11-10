export interface CardData {
  id: string;
  number: string;
  type: 'visa' | 'mastercard';
  balance: number;
  cardholderName: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  pin: string;
}

export interface PaymentData {
  amount: number;
  cardId: string;
  cvv: string;
  timestamp: Date;
}