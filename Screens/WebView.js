import React, {useRef} from 'react';
import {
  Container,
  Header,
  Button,
  Left,
  Right,
  Body,
  Title,
  Icon,
} from 'native-base';
import {WebView} from 'react-native-webview';

const WebViewComponent = ({navigation, route}) => {
  const {link} = route.params;
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
          <Title>WebView</Title>
        </Body>
        <Right></Right>
      </Header>
      <WebView
        source={{
          uri: link,
        }}
      />
    </Container>
  );
};

export default WebViewComponent;
