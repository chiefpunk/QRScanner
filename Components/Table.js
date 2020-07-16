import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {Button, Icon} from 'native-base';

const TableComponent = ({removeItem, tableData, tableHead, navigation}) => {
  const action = (data, index) => (
    <Button
      block
      danger
      onPress={() => removeItem(index)}
      style={styles.removeBtn}>
      <Icon name="delete" type="AntDesign"></Icon>
      <Text style={styles.btnText}>Remove</Text>
    </Button>
  );

  const link = (data, index) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('WebView', {link: data})}>
      <Text style={styles.linkText}>{data}</Text>
    </TouchableOpacity>
  );

  return (
    <Table borderStyle={{borderColor: '#3f51b5', borderWidth: 1}}>
      <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
      {tableData &&
        tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={
                  cellIndex === 1
                    ? action(cellData, index)
                    : link(cellData, index)
                }
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
    </Table>
  );
};

const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#3f51b5'},
  headText: {margin: 6, textAlign: 'center', color: '#fff', fontSize: 20},
  row: {flexDirection: 'row', backgroundColor: '#fff', borderColor: '#000'},
  removeBtn: {
    width: '100%',
    height: 34,
    backgroundColor: '#ff0000',
    borderRadius: 2,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  linkText: {margin: 6, textAlign: 'center', fontSize: 17},
});

export default TableComponent;
