# Pokemon Finder
![](/screens/print.png)

## Motivação

Esse projeto foi criado para demonstrar algumas de minhas habilidades ao desenvolver aplicações multiplataforma com React-Native.

## O que é?

O projeto consiste em uma aplicação que agrupa os pokemon's por tipo, e permite a ordenação e busca por nome.

## Recursos utilizados

- Typescript - linguagem de programação utilizada no desenvolvimento.
- Axios - biblioteca utilizada para fazer requisições a API
- i18n-js - biblioteca utilizada para internacionalização do aplicativo (Inglês e Portugues)
- lootie-react-native - biblioteca utilizada para colocar animações do lootie na aplicação
- styled-components - biblioteca utilizada para estilização do aplicativo
- context API - recurso utilizado para guardar as informações e compartilha-las com os demais componentes
- Async-Storage - biblioteca utilizada para persistir as informações
- React-native-vector-icons - biblioteca utilizada como fonte de icones
- react-navigation - biblioteca utilizada para navegar entre as *pages* do aplicativo

## Configurar Projeto

- Faça o clone do projeto e logo após execute:
```sh
yarn
```
Se for rodar no iOS
```sh
cd ios && pod install
```

## Rodar Aplicação
- Android
```sh
yarn android
```
- iOS
```sh
yarn ios
```