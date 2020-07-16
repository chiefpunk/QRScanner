import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Title,
  Icon,
} from 'native-base';

const Camera = ({navigation}) => {
  const camRef = useRef('');
  const barcodeRecognized = ({barcodes}) => {
    barcodes.forEach((barcode) =>
      navigation.navigate('Home', {barCodeLink: barcode.data}),
    );
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => navigation.navigate('Home', {barCodeLink: ''})}>
            <Icon name="left" type="AntDesign"></Icon>
          </Button>
        </Left>
        <Body>
          <Title>Scan QR Code</Title>
        </Body>
        <Right></Right>
      </Header>
      <RNCamera
        ref={camRef}
        style={styles.fullWidth}
        onGoogleVisionBarcodesDetected={barcodeRecognized}></RNCamera>
    </Container>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    flex: 1,
    width: '100%',
  },
});
export default Camera;
