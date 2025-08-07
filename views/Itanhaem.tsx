import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Tempo from '../components/Tempo';
import Api from '../components/Api';

export default function Itanhaem() {
  const [dados, setDados] = useState<any[]>([]);

  async function buscaTempo(){
    const response = await Api.get('weather?array_limit=3&fields=only_results,temp,city_name,forecast,condition,max,min,description,date,moon_phase&key=2c790d78&city_name=Itanhaem,SP');
    setDados(response.data.forecast);
  }

  useEffect(
    ()=>{
      buscaTempo()
    },[]
    );

  return(
    <View style={styles.bloco}>
        <Text style={styles.texto}>Previsão do Tempo para Itanhaém</Text>

        <FlatList
          data={dados}
          keyExtractor={(item)=>item.date}
          renderItem={({item})=> <Tempo date={item.date} max={item.max} min={item.min} description={item.description}
             condition={item.condition} moon={item.moon_phase}
             />}
        />
    </View>
  );
}

const styles = StyleSheet.create ({
  bloco: {
    backgroundColor: '#d2d2d2',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  texto: {
    fontSize: 25
  }
});