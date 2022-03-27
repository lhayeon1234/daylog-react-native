import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LogContext from '../contexts/LogContext';

function CalenderScreen() {
  const {text} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <Text>text: {text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default CalenderScreen;
