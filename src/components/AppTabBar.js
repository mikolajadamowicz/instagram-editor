import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabItem from './TabItem';

const AppTabBar = (props) => {
  const { state } = props;
  return (
    <View style={styles.root}>
      {state.routes.map((route, index) => (
        <TabItem route={route} index={index} {...props} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flexDirection: 'row', marginBottom: 10 },
});

export default AppTabBar;
