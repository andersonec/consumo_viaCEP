# consumo_viaCEP

*APP MOBILE*

Criado com expo 

    EXECUÇÃO:
        Requerimentos:
            Node.js LTS ou superior;
            Git;
            Para macOS: Watchman
            
        Abra o terminal na pasta do projeto;
        Execute o comando:
            npm install
            
        Após a instalação, execute:
            npm start
            
        Instale o app Expo no celular:
            ANDROID: https://play.google.com/store/apps/details?id=host.exp.exponent
            IOS: https://apps.apple.com/br/app/expo-go/id982107779
            
        Assim que o QR Code aparecer no terminal, escaneie com o aplicativo Expo no seu celular;
        Em seguida, você conseguirá visualizar a tela de inicio;
        
    UTILIZAÇÃO:
        Na tela login preencha o campo Email com: "a@email.com"
                      preencha o campo Password com: "12345"
                      "ambos sem as aspas".
        
        Feito login, digite o CEP que deseja receber informações;
        Caso digite um CEP com quantidade de dígitos diferente de 8, ou com caracteres ou letras, abrirá uma tela de Alert solicitando que digite um CEP de 8 dígitos numérico.
        Se o CEP digitado não existir no Banco de Dados do ViaCEP, abrirá uma tela de Alert avisando que o CEP não foi encontrado.

  Imagens:
   
        01 - Tela de Login: 
    
   <div  align ="center"> <img width="220px" heigth="360px" src ="https://user-images.githubusercontent.com/53611115/117585821-e07c2400-b0ea-11eb-92a5-5c6a8bf6e6f5.jpeg">
        <img width="220px" heigth="360px" src ="https://user-images.githubusercontent.com/53611115/117585823-e114ba80-b0ea-11eb-8f6c-473c80dfccd5.jpeg">
    <div>
    
   
    04 - Tela de Pesquisa: 
   
   <div  align ="center"> 
        <img width="220px" heigth="360px" src ="https://user-images.githubusercontent.com/53611115/117585825-e1ad5100-b0ea-11eb-9fbd-9c494ca15967.jpeg">
        <img width="220px" heigth="360px" src ="https://user-images.githubusercontent.com/53611115/117585826-e245e780-b0ea-11eb-87fc-f4b225d98df5.jpeg">
        <img width="220px" heigth="360px" src ="https://user-images.githubusercontent.com/53611115/117585827-e245e780-b0ea-11eb-9955-1941abc3dd22.jpeg">
        <img width="220px" heigth="360px" src ="https://user-images.githubusercontent.com/53611115/117585828-e2de7e00-b0ea-11eb-9e47-84a3663f23c2.jpeg">
   <div>



*HISTÓRICO*

    v 1.0.0
        - Projeto criado com Expo;
        - Criada tela de Login com campos de Email e Password, autenticação genérica;
        - Criada tela de Pesquisa com campo preenchivel de CEP, fazendo request à API ViaCEP;

    v 2.0.0
        - Adicionadas telas de Cadastro e Listagem de usuários;
        - Falta implementação;