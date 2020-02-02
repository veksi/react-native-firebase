import React, { FunctionComponent } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  webviewStyle: {},
  webviewContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export const App: FunctionComponent<{}> = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.webviewContainerStyle}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <WebView
          scalesPageToFit
          originWhitelist={['*']}
          style={styles.webviewContainerStyle}
          domStorageEnabled
          javaScriptEnabled
          cacheEnabled
          source={{ uri: 'https://www.twitch.tv/' }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
