import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HoldingsScreen from './screens/HoldingsScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <HoldingsScreen />
    </SafeAreaProvider>
  );
}
