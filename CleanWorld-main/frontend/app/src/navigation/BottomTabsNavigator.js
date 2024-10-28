import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginGScreen from '../screens/LoginScreen/LoginGScreen';
import DiscardListScreen from '../screens/DiscardList/DiscardList';
import DiscardingProfileScreen from '../screens/DiscardingProfile/DiscardingProfile';
import RegisterFirstScreen from '../screens/RegisterScreen/RegisterFirstScreen';
import RegisterSecondScreen from '../screens/RegisterScreen/RegisterSecondScreen'
import { Ionicons } from '@expo/vector-icons'; 
import { View, Text, Image, StyleSheet } from 'react-native';

export default function BottomTabsNavigator() {
  const Tab = createBottomTabNavigator();
  
  const HeaderTitle = () => (
    <View style={styles.headerContainer}>
      <Image 
        source={{ uri: '/assets/—Pngtree—green leaves vector icon design_5224035.png' }}
        style={styles.logo}
      />
      <Text style={styles.headerText}>Olá, Usuário</Text>
    </View>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#83D07F', 
          },
          tabBarActiveTintColor: '#FFFFFF', 
          tabBarInactiveTintColor: '#000000', 
        }}
      >
        <Tab.Screen
          name="Login"
          component={LoginGScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="log-in" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterFirstScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-add" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="RegisterSecondScreen"
          component={RegisterSecondScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-add" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ola, Usuario"
          component={DiscardingProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: '#83D07F',
            },
            headerTitle: () => <HeaderTitle />,
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="DiscardList"
          component={DiscardListScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={24} color={color} />
            ),
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
