import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, TabBarProps } from 'react-native-tab-view';
import TabItem from './TabItem';

type Props = TabBarProps;

const AppTabBar: React.FC = (props: Props) => {
  const { state } = props;
  return (
    <View style={styles.root}>
      {state.routes.map((route: Route, index: number) => (
        <TabItem route={route} index={index} {...props} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flexDirection: 'row', marginBottom: 10 },
});

export default AppTabBar;
