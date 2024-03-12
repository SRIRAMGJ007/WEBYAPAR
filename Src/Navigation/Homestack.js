import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Upload from '../Screens/Upload';
import Fetch from '../Screens/Fetch';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Fetch" component={Fetch} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default HomeStack;
