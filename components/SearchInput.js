import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = text => {
    this.setState({text});
  }

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    // Checa que text não está vazio, caso esteja retornará vazio e não fará nada
    if(!text) return;

    // Caso não tenha retornado vazio, significa que o campo não esta vazio e então
    // executa onSubmit da TextInput props
    onSubmit(text);

    // Após executar onSubmit seta text novamente para vazio
    this.setState({text: ''});
  }

  render(){
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
        <View style={styles.container}>
            <TextInput 
            autoCorrect={false}
            value={ text }
            placeholder={ placeholder }
            placeholderTextColor="white"
            underlineColorAndroid='transparent'
            style={styles.textInput}
            clearButtonMode="always" // Habilita butão de limpeza apenas disponível para IOS
            onChangeText={this.handleChangeText}
            onSubmitEditing={this.handleSubmitEditing}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});