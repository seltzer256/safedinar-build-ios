import {Pressable, SafeAreaView, Text} from 'react-native';
import React from 'react';

const LogInScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>LogIn Screen</Text>
      <Pressable onPress={() => navigation.navigate('OnBoarding')}>
        <Text>Go To OnBoarding Screen</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LogInScreen;
