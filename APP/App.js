import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { AppContextProvider } from './src/navigation/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
<OTPInputView pinCount={4} />
const App = () => {
  LogBox.ignoreAllLogs(true)
  return (
    <Provider store={store}>
      <AppContextProvider>
        <NavigationContainer styles={styles.container}>
          <AppNavigator />
        </NavigationContainer>
      </AppContextProvider>
    </Provider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
export default App;