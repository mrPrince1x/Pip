import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>this is a test to see if it works on my Samsung s23 :D</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73bdfa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
