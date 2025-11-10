# CMAS Expo App

Una aplicación móvil desarrollada con React Native y Expo para el sistema de pagos CMAS.

## 🚀 Configuración del Proyecto

### Requisitos Previos

- Node.js (versión 16 o superior)
- Expo CLI
- React Native development environment

### 📱 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/emilioleon04/cmas_expo.git
cd cmas_expo
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Instalar fuentes requeridas:**

El proyecto utiliza las fuentes **Poppins** y **Montserrat** con diferentes pesos. Ejecuta los siguientes comandos:

```bash
# Instalar Expo Google Fonts
npx expo install expo-font

# Instalar fuentes Poppins
npx expo install @expo-google-fonts/poppins

# Instalar fuentes Montserrat  
npx expo install @expo-google-fonts/montserrat

# Instalar hook para cargar fuentes
npx expo install expo-app-loading
```

### 🎨 Fuentes Utilizadas

El proyecto utiliza las siguientes variantes de fuentes:

#### Poppins
- `Poppins_300Light`
- `Poppins_400Regular` 
- `Poppins_500Medium`
- `Poppins_600SemiBold`
- `Poppins_700Bold`

#### Montserrat
- `Montserrat_400Regular`
- `Montserrat_500Medium` 
- `Montserrat_600SemiBold`
- `Montserrat_700Bold`

### 🎯 Ejecutar el Proyecto

```bash
# Iniciar el servidor de desarrollo
npx expo start

# Para dispositivos iOS (requiere macOS)
npx expo start --ios

# Para dispositivos Android
npx expo start --android

# Para web
npx expo start --web
```

### 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CreditCard.tsx
│   ├── InputField.tsx
│   └── PrimaryButton.tsx
├── navigation/          # Configuración de navegación
│   └── AppNavigation.tsx
├── screens/            # Pantallas de la aplicación
│   ├── BalanceScreen.tsx
│   ├── CVVScreen.tsx
│   ├── LoadingScreen.tsx
│   ├── LoginScreen.tsx
│   ├── PaymentSuccessScreen.tsx
│   └── SelectCardScreen.tsx
├── types/              # Definiciones de tipos TypeScript
│   ├── index.tsx
│   └── navigation.tsx
└── utils/              # Utilidades y temas
    └── theme.tsx
```

### 🎨 Design System

El proyecto implementa un design system basado en Figma con los siguientes colores principales:

- **Primary Dark:** `#013046`
- **Secondary:** `#026795` 
- **Blue Normal:** `#0084C2`
- **Blue Dark:** `#006B9E`
- **Light Blue:** `#E6F4FB`
- **Background Light:** `#E6F3F9`

### 🔧 Scripts Disponibles

```bash
# Verificar tipos TypeScript
npx tsc --noEmit

# Iniciar con verificación de TypeScript
npx expo start --typescript-check

# Limpiar cache
npx expo start --clear
```

### 📋 Funcionalidades

- ✅ Pantalla de Login con autenticación social
- ✅ Dashboard de Balance con información de cuenta
- ✅ Selección de tarjeta de crédito/débito
- ✅ Ingreso de CVV con validación
- ✅ Pantalla de carga animada
- ✅ Confirmación de pago exitoso
- ✅ Navegación fluida entre pantallas
- ✅ Diseño responsive y accesible

### 🛠️ Tecnologías

- **React Native** - Framework móvil
- **Expo** - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **React Navigation** - Navegación entre pantallas
- **Expo Google Fonts** - Sistema de fuentes
- **Figma Design System** - Diseño y tokens

### 📝 Notas Importantes

1. **Fuentes:** Asegúrate de que todas las fuentes estén instaladas antes de ejecutar la aplicación
2. **Assets:** Las imágenes de Figma se cargan desde URLs temporales (válidas por 7 días)
3. **Navegación:** El flujo completo es: Login → Balance → SelectCard → CVV → Loading → PaymentSuccess

### 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

**Desarrollado para CMAS** - Sistema de pagos y gestión de cuentas