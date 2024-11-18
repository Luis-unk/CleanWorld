import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginGScreen from '../screens/LoginScreen/LoginGScreen';
import RegisterUserTwo from '../screens/RegisterScreen/RegisterUser/RegisterUserTwo';
import RegisterUserOne from '../screens/RegisterScreen/RegisterUser/RegisterUserOne';
import DiscardingProfile from '../screens/Profile/DiscardingProfile/DiscardingProfile';
import PreRegister from '../screens/RegisterScreen/PreRegister';
import RegisterEnterpriseOne from '../screens/RegisterScreen/RegisterEnterprise/RegisterEnterpriseOne';
import RegisterEnterpriseTwo from '../screens/RegisterScreen/RegisterEnterprise/RegisterEnterpriseTwo';
import { Ionicons } from '@expo/vector-icons'; 


import { View, Text, Image, StyleSheet } from 'react-native';
import EnterpriseProfile from '../screens/Profile/CollectorProfile/EnterpriseProfile';
import RegisterVehicle from '../screens/EnterpriseScreen/RegisterVehicle';


export default function BottomTabsNavigator() {
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#000000',
          tabBarStyle: {
            display: route.name === 'Login' || route.name === 'Pre-registro' || route.name === 'RegisterUserOne' || route.name === 'RegisterUserTwo' || route.name === 'RegisterEnterpriseOne' || route.name === 'RegisterEnterpriseTwo' ? 'none' : 'flex', // Oculta abas em Login e RegisterZeroScreen
            backgroundColor: '#83D07F',
          }
        })}
      >
        <Tab.Screen
          name="Login"
          component={LoginGScreen}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
        

        <Tab.Screen
          name="Pre-registro"
          component={PreRegister}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />

        <Tab.Screen
          name="RegisterUserOne"
          component={RegisterUserOne}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="RegisterUserTwo"
          component={RegisterUserTwo}
          options={{
            headerShown: false,
            tabBarButton: () => null, // Torna a aba de pré-registro invisível e inativa
          }}
        />

        <Tab.Screen
          name="RegisterEnterpriseOne"
          component={RegisterEnterpriseOne}
          options={{
            headerShown: false,
            tabBarButton: () => null, // Torna a aba de pré-registro invisível e inativa
          }}
        />


        <Tab.Screen
          name="RegisterEnterpriseTwo"
          component={RegisterEnterpriseTwo}
          options={{
            headerShown: false,
            tabBarButton: () => null, // Torna a aba de pré-registro invisível e inativa
          }}
        />
        <Tab.Screen
          name="DiscardingProfile"
          component={DiscardingProfile}
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />

        <Tab.Screen
          name="EnterpriseProfile"
          component={EnterpriseProfile}
          options={{
            headerShown: false,
          }}
        />


        <Tab.Screen
          name="RegisterVehicle"
          component={RegisterVehicle}
          options={{
            headerShown: false,
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 5,
  },
  headerText: {
    fontSize: 20,
  },
});
