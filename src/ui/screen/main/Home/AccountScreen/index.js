import React, {useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {UserContext} from '../../../../../commons/contexts/user';
import {Button, Space} from '../../../../components/';
import auth from '@react-native-firebase/auth';
import {uiDimen} from '../../../../constants';

const AccountScreen = () => {
  const {user} = useContext(UserContext);

  const handleSignOut = () => {
    auth().signOut();
  };

  return (
    <SafeAreaView>
      <Text>Hallo {user?.displayName}</Text>
      <Space height={uiDimen.md} />
      <Button title="Sign Out" onPress={handleSignOut} />
    </SafeAreaView>
  );
};

export default AccountScreen;
