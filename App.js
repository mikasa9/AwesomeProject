import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';

const Data = [
  { id: '1', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/599f8f89-3554-4263-b7b1-822957dcc3bc.jpg', text: 'levi' },
  { id: '2', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/aed54fd6-5ddb-4254-a685-5b3e4679b045.jpg', text: 'shifa' },
  { id: '3', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/de5b8b66-7fb5-4d58-8d9e-ea9ea4f5f9ff.jpg', text: 'rahul' },
  { id: '4', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/6ca4bf46-4fa2-4ae6-8f85-2cad61a550d0.jpg', text: 'luffy' },
  { id: '5', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/e1d3f2db-a3ee-40fb-816e-f979f3291f42.jpg', text: 'sana' },
  { id: '6', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/ed58c7a1-56c7-4815-a5e8-64394cb4e21b.jpg', text: 'mitskuni' },
  { id: '7', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/89f5f4cb-5688-4bd9-8991-559b8c73a276.jpg', text: 'mike' },
  { id: '8', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/94cbe1e5-21fe-49a6-8e9c-7ba74148dd3d.jpg', text: 'Light' },
  { id: '9', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/0b6471a4-aed0-439d-9a61-1b6eea47ca32.jpg', text: 'kit' },
  { id: '10', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/1e4c960e-a2ad-42ad-8081-7c92ab8afd3e.jpg', text: 'b' },
  { id: '11', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/3c344f0e-d299-4e09-8ba1-32b692620261.jpg', text: 'mikasa' },
  { id: '12', img: 'http://cdn.playbuzz.com/cdn//b8dc6916-550f-4254-87ca-bc83500cd071/9b194294-a42e-4436-868b-29c734954a13.jpg', text: 'Near' },
]


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalViewVisible: false,
      currentClickedItem: undefined
    };
  }


  toggleModalView = (currentClickedItem) => {
    this.setState({
      isModalViewVisible: !this.state.isModalViewVisible,
      currentClickedItem
    });
  }

  takeKey = ({ id }) => id;

  extractItems = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.toggleModalView(item)}
        style={styles.row}>
        <View style={{ flex: 1, }}>
          <Image
            style={styles.imageStyle}
            source={{ uri: item.img }}
          />

        </View>
        <View style={{ flex: 1.5, }}>
          <Text
            style={styles.textStyle}>
            {item.text}
          </Text>
          <Text
            style={styles.textStyle1}>
            Employee Id:
          {item.id}
          </Text>
        </View>
      </TouchableOpacity>

    );
  }



  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          data={Data}
          renderItem={this.extractItems}
          keyExtractor={this.takeKey}
          showsVerticalScrollIndicator={false}

        />
        <Modal
          visible={this.state.isModalViewVisible}
          transparent={false}

          onRequestClose={this.toggleModalView}
        >
          <Image style={styles.imageDetail} source={{ uri: this.state.currentClickedItem ? this.state.currentClickedItem.img : '' }} />
          <TouchableOpacity

            onPress={this.toggleModalView}
          >
            <Text style={{ padding: 15, fontSize: 30, }}>{this.state.currentClickedItem ? this.state.currentClickedItem.text : 'n/a'}</Text>
          </TouchableOpacity>


        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,

    flex: 1,

    
  },
  row: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 5,
    elevation: 3,
  },
  textStyle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textStyle1: {
    color: '#000000',
    fontSize: 16,
  },
  imageStyle: {

    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
  imageDetail: {

    resizeMode: 'cover',
    width: 200,
    height: 200,


  },

})