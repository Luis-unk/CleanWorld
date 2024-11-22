import { AppContext, AppProvider } from './src/context/AppContext';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
import React from 'react';

export default function App() {
  return(
    <AppProvider>
      <BottomTabsNavigator></BottomTabsNavigator>
    </AppProvider>
  ) 
}
