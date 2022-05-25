import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from './pages/StartScreen';
import Favourite from './pages/Favourite';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StartScreen} />
        <Tab.Screen name="Favourite" component={Favourite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
