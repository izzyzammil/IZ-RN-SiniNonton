import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import auth from '@react-native-firebase/auth';

import {Space, Input, Button} from '../../../components';
import {uiStyle, uiDimen} from '../../../constants';

const SingUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    setError(null);

    if (name === '' || email === '' || password === '') {
      setError('all fields can not be empty');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          userCredential.user.updateProfile({displayName: name});
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Space height={uiDimen.lg}></Space>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../../assets/image/logo-128.png')}></Image>
            <Space height={uiDimen.md}></Space>
            <Text style={styles.title}>Sini Nonton</Text>
          </View>
          <Space height={uiDimen.sm * 5}></Space>

          <Text style={styles.subtitle}>Sign Up Now</Text>
          <Space height={uiDimen.lg} />

          {error && (
            <>
              <View
                style={{
                  padding: uiDimen.sm,
                  backgroundColor: 'red',
                  borderRadius: uiDimen.md,
                  opacity: 0.8,
                }}>
                <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                  {error}
                </Text>
              </View>
              <Space height={uiDimen.sm} />
            </>
          )}

          <Text style={styles.label}>Name</Text>
          <Space height={uiDimen.sm}></Space>
          <Input
            placeholder="Name"
            value={name}
            onChange={(v) => setName(v)}></Input>
          <Space height={uiDimen.lg}></Space>

          <Text style={styles.label}>Email</Text>
          <Space height={uiDimen.sm}></Space>
          <Input
            placeholder="Email"
            value={email}
            onChange={(v) => setEmail(v)}></Input>
          <Space height={uiDimen.lg}></Space>

          <Text style={styles.label}>Password</Text>
          <Space height={uiDimen.sm}></Space>
          <Input
            placeholder="Password"
            value={password}
            onChange={(v) => setPassword(v)}
            secure></Input>
          <Space height={uiDimen.lg}></Space>

          <Space height={uiDimen.sm}></Space>
          <Button title={'Sign Up'} onPress={handleSignUp}></Button>
          <Space height={uiDimen.md}></Space>

          <Text style={styles.question}>Already have an account</Text>
          <Space height={uiDimen.md}></Space>
          <Button
            outlined
            title={'Sign In'}
            onPress={() => {
              navigation.navigate('SignIn');
            }}></Button>
          <Space height={uiDimen.lg}></Space>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: uiDimen.lg,
  },

  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {...uiStyle.textBold, fontSize: 24},
  subtitle: {...uiStyle.textRegular, fontSize: 20},
  label: {...uiStyle.textSemiBold, fontSize: 16},
  question: {
    ...uiStyle.textRegular,
    fontSize: 16,
    textAlign: 'center',
  },
});
