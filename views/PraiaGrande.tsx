import {Text, FlatList, View, StyleSheet} from 'react-native'
import {useState, useEffect} from 'react'
import Tempo from '../components/Tempo';
import Api from '../components/Api'

export default function PraiaGrande() {

    const [dados, setDados] =useState<any[]>([]);

    async function buscaTempo() {
        const response = await Api.get('weather?array_limit=7&fields=only_results,temp,city_name,forecast,condition,max,min,description,date,moon_phase,full_date,weekday,humidity,cloudiness,rain,rain_probability,wind_speedy,sunrise,sunset&key=c0cd1deb&city_name=Praia Grande,SP');
        setDados(response.data.forecast);
    }

    useEffect(
        ()=>{
            buscaTempo()
        },[]
    );

    return (
        <View style={styles.bloco}>
            <Text style={styles.texto}>Previsão do Tempo para Praia Grande</Text>

            <FlatList
                data={dados}
                keyExtractor={(item)=>item.date}
                renderItem={({item})=> <Tempo date={item.date} max={item.max}
                min={item.min} description={item.description}
                condition={item.condition} moon={item.moon_phase} fullDate={item.full_date} weekday={item.weekday} humidity={item.humidity}
                cloudiness={item.cloudiness} rain={item.rain} rainProbability={item.rain_probability} windSpeedy={item.wind_speedy} sunrise={item.sunrise} sunset={item.sunset}
                />}
                style={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    bloco: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40
    },
    texto:{
        fontSize: 20
    },
    lista: {
        height: '70%',
        width: '100%'
    }
});