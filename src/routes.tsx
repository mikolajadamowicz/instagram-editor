import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StatisticsScreen from './screens/StatisticsScreen';
import MainScreen from './screens/MainScreen';
import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import AppTabBar from './components/AppTabBar';
import useDimensions from './hooks/useDimensions';
import { COLORS } from './constants';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    card: COLORS.background,
  },
};

const SafeAreaMaterialTopTabBar = ({ ...props }) => {
  const insets = useSafeArea();
  const style = React.useMemo(
    () => ({ backgroundColor: COLORS.background, paddingTop: insets.top }),
    [insets]
  );

  return (
    <View style={style}>
      <AppTabBar {...props} />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const Navigation: React.FC = () => {
  const { width } = useDimensions();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          tabBar={(props) => <SafeAreaMaterialTopTabBar {...props} />}
          initialRouteName="Today"
          initialLayout={{ width }}
          swipeEnabled>
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="Today" component={MainScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
