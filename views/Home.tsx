import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home() {

  const navigation = useNavigation();

  return(
    <View style={styles.bloco}>
      <Text style={styles.texto}>Seja bem vindo!</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Itanhaem' as never)}
        style={styles.btn}
        >
        <Text style={styles.textoBtn}>Itanhaém</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Mongagua' as never)}
        style={styles.btn}
        >
        <Text style={styles.textoBtn}>Mongaguá</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('PraiaGrande' as never)}
        style={styles.btn}
        >
        <Text style={styles.textoBtn}>Praia Grande</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  bloco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 30
  },
  btn: {
    width: '80%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 255, 0.6)',
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 15,
    boxShadow: '1px 5px 20px black'
  },
  textoBtn: {
    fontSize: 20,
    textAlign: 'center'
  }
});