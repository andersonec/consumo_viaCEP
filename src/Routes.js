import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './telaLogin.js'
import PesquisaCEP from './telaPesquisaCEP.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "login" component = {Login} title = "TelaLogin" initial = {true} />
            <Scene key = "pesquisa" component = {PesquisaCEP} title = "Pesquisa" />
        </Scene>
    </Router>
)
export default Routes