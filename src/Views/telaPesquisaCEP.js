import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

class PesquisaCEP extends Component{
     
    state = {
        cep: '',
        cidade: '',
        uf: '',
        logradouro: '',
        bairro: '',
        ibge: '',
        ddd: ''
    }
    
    handleCEP = (text) => {
        this.setState({ cep: text })
    }

    pesquisa = (cep) => {
      // Tratamento para ignorar qualquer caractere diferente de int, utilizando REGEX
      //cep = value?.replace(/[^0-9]/g, '');
      if(cep?.length !== 8){
        alert('O campo CEP deve conter 8 dígitos numéricos.')
        return;
      }
      // FETCH para fazer as requisições na API ViaCEP 
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if(!("erro" in data)){
            this.setState({ 
              cep: data.cep,
              cidade: data.localidade,
              uf: data.uf,
              logradouro: data.logradouro,
              bairro: data.bairro,
              ddd: data.ddd,
              ibge: data.ibge,
            });
          }
          else{
            alert('CEP não encontrado.')
          }
        });
    }

    render(){
        return (
          <View style={styles.mainContainer}>
            <View style={styles.loginContainer}>
              <Text style={styles.textInfo}>CEP:</Text>
              <TextInput style={styles.input}
                underlineColorAndroid = "transparent"
                placeholder="Digite o CEP"
                autoCapitalize = "none"
                keyboardType= "numeric"
                onChangeText={this.handleCEP}
              />
              <TouchableHighlight
                  style = {styles.botaoSubmit}
                  onPress = {
                      () => this.pesquisa(this.state.cep)
                  }>
                  <Text style = {styles.submitButtonText}>Pesquisar</Text>
              </TouchableHighlight>
      
              <Text style={styles.textInfo}>Cidade:</Text>
              <TextInput style={styles.input}
                value = {`${!!this.state.cep ? this.state.cidade : ""}`}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText={this.handleCEP}
              />
              <Text style={styles.textInfo}>UF:</Text>
              <TextInput style={styles.input}
                value = {`${!!this.state.cep ? this.state.uf : ""}`}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText={this.handleCEP}
              />
              <Text style={styles.textInfo}>Logradouro:</Text>
              <TextInput style={styles.input}
                value = {`${!!this.state.cep ? this.state.logradouro : ""}`}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText={this.handleCEP}
              />
              <Text style={styles.textInfo}>Bairro:</Text>
              <TextInput style={styles.input}
                value = {`${!!this.state.cep ? this.state.bairro : ""}`}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText={this.handleCEP}
              />
              <Text style={styles.textInfo}>DDD:</Text>
              <TextInput style={styles.input}
                value = {`${!!this.state.cep ? this.state.ddd : ""}`}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText={this.handleCEP}
              />
              <Text style={styles.textInfo}>IBGE:</Text>
              <TextInput style={styles.input}
                value = {`${!!this.state.cep ? this.state.ibge : ""}`}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText={this.handleCEP}
              />
      
            </View>
      
            <StatusBar style="auto" />
          </View>
        );
    }
}

export default PesquisaCEP

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      flex: 1,
      maxHeight: 250,
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    textInfo: {
      color: 'black',
    },
    input: {
      width: 200,
      height: 40,
      marginBottom: 10,
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 15,
    },
    botaoSubmit: {
      width: 70,
      height: 25,
      marginBottom: 15,
      marginLeft: 65,
      backgroundColor: '#0000cd',
      borderWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
