import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../utils/theme';

// Images from Figma Login Screen (exact assets)
const logoText = 'https://www.figma.com/api/mcp/asset/b0e3ea2a-2e02-4fc8-aa10-22ada2d7a4bc';
const logoIcon = 'https://www.figma.com/api/mcp/asset/a304c2b7-c457-4ecd-969b-23e9b8c54126';
const facebookIcon = 'https://www.figma.com/api/mcp/asset/5d8b4788-506b-4f91-8baf-1b3a743f1908';
const googleIcon = 'https://www.figma.com/api/mcp/asset/b40257bc-5c1a-4433-abb4-274136d702f7';
const appleIcon = 'https://www.figma.com/api/mcp/asset/7908e658-b48c-4f35-95b5-c789c5afb431';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login process
    setTimeout(() => {
      navigation.navigate('Balance');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section - Single CMAS Logo */}
        <View style={styles.logoSection}>
          <Image source={{ uri: logoIcon }} style={styles.logo} resizeMode="contain" />
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              placeholder="Ingresa tu correo electrónico"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.underline} />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              placeholderTextColor={theme.colors.textLight}
              secureTextEntry
            />
            <View style={styles.underline} />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Social Login */}
        <View style={styles.socialLoginContainer}>
          <Text style={styles.orText}>O continúa con</Text>
          
          <View style={styles.socialButtonsRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={{ uri: facebookIcon }} style={styles.socialIcon} resizeMode="contain" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <Image source={{ uri: googleIcon }} style={styles.socialIcon} resizeMode="contain" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <Image source={{ uri: appleIcon }} style={styles.socialIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            ¿Aún no tienes cuenta? 
            <Text style={styles.signUpLink}> Regístrate</Text>
          </Text>
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
    paddingTop: 80,
    justifyContent: 'flex-start',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 80,
    paddingTop: 40,
  },
  logo: {
    width: 160,
    height: 60,
  },
  formContainer: {
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 4,
  },
  textInput: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.text,
    paddingVertical: 15,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    fontFamily: 'Poppins_400Regular',
  },
  underline: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginTop: 2,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.sm,
    fontFamily: 'Poppins_500Medium',
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginBottom: 32,
  },
  loginButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
    fontFamily: 'Poppins_600SemiBold',
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  orText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.sm,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 20,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signUpContainer: {
    alignItems: 'center',
  },
  signUpText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.sm,
    fontFamily: 'Poppins_400Regular',
  },
  signUpLink: {
    color: theme.colors.primary,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default LoginScreen;