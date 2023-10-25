import React from 'react';
import {View, FlatList, Text, Button, TextInput} from 'react-native';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      name: '', // Initialize name in state
      age: '', // Initialize age in state
    };

    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    // Check if the 'data' prop has changed
    if (this.props.data !== prevProps.data) {
      console.log('The "data" prop has changed.');

      // Update the state with the new 'data' prop
      this.setState({data: this.props.data});
    }
  }

  handleChange = (field, value) => {
    this.setState({[field]: value});
  };

  handleAdd = () => {
    // Ensure both name and age are not empty before adding to data
    if (this.state.name && this.state.age) {
      const newItem = {
        name: this.state.name,
        age: this.state.age,
      };

      this.setState({
        data: [...this.state.data, newItem],
        name: '', // Clear the input fields after adding
        age: '',
      });
    }
  };

  render() {
    const {data, name, age} = this.state;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'skyblue',
          padding: 20,
        }}>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={{margin: 10, padding: 5, backgroundColor: 'yellow'}}>
                <Text>
                  {item.name} {':'} {item.age}
                </Text>
              </View>
            )}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'grey',
            marginTop: 10,
          }}>
          <Text> Hello World </Text>

          <TextInput
            style={{backgroundColor: 'white', margin: 5, padding: 10}}
            placeholder="Enter Name"
            value={name}
            onChangeText={text => this.handleChange('name', text)} // Update name
          />

          <TextInput
            style={{backgroundColor: 'white', margin: 5, padding: 10}}
            placeholder="Enter age"
            value={age}
            onChangeText={text => this.handleChange('age', text)} // Update age
          />

          <Button title="Add" onPress={this.handleAdd} />
        </View>
      </View>
    );
  }
}

export default ClassComponent;
