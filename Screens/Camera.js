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
  Text,
  Title,
  Icon,
} from 'native-base';

const Camera = ({navigation}) => {
  const camRef = useRef('');
  const barcodeRecognized = ({barcodes}) => {
    barcodes.forEach((barcode) =>
      // (barcode) => alert(barcode.data),
      navigation.navigate('Home', {barCodeLink: barcode.data}),
    );
    // alert(barcodes.data);
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => navigation.navigate('Home', {name: 'Jane'})}>
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
  mt3: {
    marginTop: 3,
  },
});
export default Camera;
