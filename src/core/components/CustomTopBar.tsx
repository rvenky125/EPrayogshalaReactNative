import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

export default function CustomTopBar() {
  const {name} = useRoute();
  return (
    <Appbar.Header>
      <Appbar.Content title={name} />
    </Appbar.Header>
  );
}
