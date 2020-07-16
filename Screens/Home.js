import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Table from '../Components/Table';
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

const Home = ({navigation, route}) => {
  const tableHead = ['Link', 'Actions'];

  const [barCodeLink, setBarCodeLink] = useState(
    route.params && route.params.barCodeLink,
  );
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    if (route.params) setBarCodeLink(route.params.barCodeLink);
  }, [route.params]);

  useEffect(() => {
    if (barCodeLink) {
      setTableData([...tableData, [barCodeLink, '']]);
    }
  }, [barCodeLink]);

  const removeItem = (index) =>
    setTableData(tableData.filter((item) => tableData.indexOf(item) !== index));

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="home" type="AntDesign"></Icon>
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right>
          <Button
            block
            warning
            onPress={() => {
              navigation.navigate('Camera', {name: 'Jane'});
              setBarCodeLink('');
            }}>
            <Icon name="qrcode" type="AntDesign"></Icon>
          </Button>
        </Right>
      </Header>

      <View style={styles.container}>
        <Table
          navigation={navigation}
          removeItem={removeItem}
          tableHead={tableHead}
          tableData={tableData}></Table>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  scanBtn: {
    marginBottom: 10,
    backgroundColor: '#3f51b5',
    width: '40%',
  },
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
});
export default Home;
