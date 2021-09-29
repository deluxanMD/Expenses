import React from 'react';
import {VStack, Text, NativeBaseProvider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Accounts = () => {
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center" justifyContent="center">
        <Text fontSize="lg">Account</Text>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Accounts;
