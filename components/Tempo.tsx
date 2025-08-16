import {View, Text, StyleSheet, Image} from 'react-native';

 interface propsTempo{
        date:string,
        max:number,
        min:number,
        description:string,
        condition:string,
        moon:string,
        fullDate:string,
        weekday:string,
        humidity: number,
        cloudiness: number,
        rain: number,
        rainProbability: number,
        windSpeedy: string,
        sunrise: string,
        sunset: string
    }

export default function Tempo({date, max, min, description, condition, moon, fullDate, weekday, humidity, cloudiness, rain, rainProbability, windSpeedy, sunrise, sunset } : propsTempo){
    const icones: Record<string, any> = {
        clear_day: require('../assets/png/clear_day.png'),
        clear_night: require('../assets/png/clear_night.png'),
        cloud: require('../assets/png/cloud.png'),
        cloudly_day: require('../assets/png/cloudly_day.png'),
        cloudly_night: require('../assets/png/cloudly_night.png'),
        fog: require('../assets/png/fog.png'),
        hail: require('../assets/png/hail.png'),
        none_day: require('../assets/png/none_day.png'),
        none_night: require('../assets/png/none_night.png'),
        rain: require('../assets/png/rain.png'),
        snow: require('../assets/png/snow.png'),
        storm: require('../assets/png/storm.png'),
    }

    return(
        <View style={styles.principal}>
                <Text style={styles.texto}>Previsão para o dia: {date}</Text>
                <Text style={styles.texto}>Data completa: {fullDate}</Text>
                <Text style={styles.texto}>Dia da semana: {weekday}</Text>
                <Text style={styles.texto}>Máx: {max}</Text>
                <Text style={styles.texto}>Mín: {min}</Text>
                <Text style={styles.texto}>Descrição: {description}</Text>
                <Text style={styles.texto}>Porcentagem de nebulosidade: {cloudiness}</Text>
                <Text style={styles.texto}>Volume de chuva: {rain}</Text>
                <Text style={styles.texto}>Humidade do ar: {humidity}</Text>
                <Text style={styles.texto}>Probabilidade de chuva: {rainProbability}</Text>
                <Text style={styles.texto}>Velocidade do vento: {windSpeedy}</Text>
                <Text style={styles.texto}>Horário do nascer do sol: {sunrise}</Text>
                <Text style={styles.texto}>Horário do pôr do sol: {sunset}</Text>
                <Image
                    style={styles.imagem}
                    source={icones[condition]}
                />
                <Image 
                    style={styles.imagem}
                    source={{uri:`https://assets.hgbrasil.com/weather/icons/moon/${moon}.png`}}
                />
        </View>
    );
}
const styles = StyleSheet.create({
    imagem:{
        width:80,
        height:80
    },
    principal:{
        backgroundColor: 'rgba(0, 0, 255, 0.6)',
        width:'80%',
        borderWidth:2,
        borderRadius:30,
        padding:20,
        margin:20,
        boxShadow: '10px 8px 20px 1px'
    },
    texto:{
        fontSize:15
    }
    
});