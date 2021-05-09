import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

class Login extends Component {
    // Set nas variáveis para EMAIL e SENHA
    state = { 
        email: '',
        password: ''
    }

    // Utiliza método para capturar entrada do usuário e ler nas TextInputs
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    login = (email, password) => {
        // LOGIN e SENHA pré definidos, apenas para demonstração
        if(email == "a@email.com" && password == '12345'){
            // Se tudo estiver OK, vai direto para a tela de pesquisa
            this.props.navigation.navigate('PesquisaCEP');
        }
        else {
            // Se estiver ERRADO, abre caixa de ALERTA para aviso de erro
            alert('Digite as credenciais válidas.')
        }
    } 

  render(){
    return (
        <View style={styles.mainContainer}>

            <View>
                <Text style={styles.barraTitulo}>CONSUMO DA API VIACEP</Text>
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.textInfo}>Email:</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder="Digite seu email"
                    autoCapitalize = "none"
                    onChangeText={this.handleEmail}
                />

                <Text style={styles.textInfo}>Password:</Text>
                <TextInput style={styles.input}
                    placeholder="Digite sua senha"
                    autoCapitalize = "none"
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                />
            </View>

            <TouchableHighlight
                style = {styles.botaoSubmit}
                onPress = {
                    () => this.login(this.state.email, this.state.password)
                }>
                <Text style = {styles.submitButtonText}>Login</Text>
            </TouchableHighlight>
            <StatusBar style="auto" />
        </View>
    );
  }
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1e90ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    barraTitulo: {
        fontWeight: 'bold',
        fontSize: 20
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
      backgroundColor: '#0000cd',
      borderWidth: 1,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

