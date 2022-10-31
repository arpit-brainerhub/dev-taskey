import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Home, Statistics, Setting, CreateTask} from '../screens';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from '../utils/theme';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                name="home"
                size={24}
                color={focused ? theme.colors.gray : theme.colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Entypo
                name="bar-graph"
                size={24}
                color={focused ? theme.colors.gray : theme.colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CreateTask"
        component={CreateTask}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                name="pluscircleo"
                size={24}
                color={focused ? theme.colors.gray : theme.colors.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                name="setting"
                size={24}
                color={focused ? theme.colors.gray : theme.colors.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
