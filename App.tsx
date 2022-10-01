import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';

import Monney from './src/assets/money.svg';
import Calculator from './src/assets/calculator.svg';
import Transaction from './src/assets/transaction.svg';
import RightIcon from './src/assets/right.svg';

import styles from './App.styles';

const App = () => (
  <>
    <StatusBar animated backgroundColor="#294936" />
    <View style={styles.header}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Olá, usuário</Text>
        <Monney width={70} height={70} fill="#fafafa" />
      </View>
      <View style={styles.container}>
        <Text style={styles.titleContainer}>O que deseja fazer?</Text>
        <View>
          <TouchableOpacity style={styles.viewContainer}>
            <Calculator width={70} height={70} fill="#294936" />
            <Text style={styles.titleButton}>REGISTRAR</Text>
            <RightIcon width={25} height={25} fill="#294936" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewContainer}>
            <Transaction width={70} height={70} fill="#294936" />
            <Text style={styles.titleButton}>VER FINANÇAS</Text>
            <RightIcon width={25} height={25} fill="#294936" />
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>Desenvolvido por caiovi98</Text>
      </View>
    </View>
  </>
);

export default App;
{
  /* #294936 #00CECB #798071 */
}
