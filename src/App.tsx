import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';

import { GlobalProvider } from './context/GlobalState';

export const App: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GlobalProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
