import AsyncStorage from '@react-native-community/async-storage';

const storageKeys = {
  TIME_DATA: '@time_data',
};

const saveItem = async (key, value) =>
  AsyncStorage.setItem(key, JSON.stringify(value));

const loadItem = async (key) => AsyncStorage.getItem(key);

export { loadItem, saveItem, storageKeys };
