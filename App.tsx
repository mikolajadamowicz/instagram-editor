/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect } from 'react';

import MyTabs from './src/routes';
import { loadItem, storageKeys } from 'src/services/storage.service';

export default function App() {
  useEffect(() => {
    loadItem(storageKeys.TIME_DATA);
  }, []);

  return <MyTabs />;
}
