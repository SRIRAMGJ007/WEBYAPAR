import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Upload from '../Screens/Upload';
import Fetch from '../Screens/Fetch';
import Profile from '../Screens/Profile';
import FeatherIcon from 'react-native-vector-icons/Feather'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import {ImgProvider} from '../Context/Provider'
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <ImgProvider>
    <Tab.Navigator screenOptions={{ headerShown: false,  tabBarActiveTintColor:'#a565ff' }}>
      <Tab.Screen 
        name="Home" 
        component={Home}  
        options={{
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Upload" component={Upload} options={{
          tabBarIcon: ({ color, size }) => (
            <FeatherIcon name="upload" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Fetch" component={Fetch} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
    </ImgProvider>
  );
}

export default HomeStack;
