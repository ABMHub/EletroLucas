import { Text, View} from 'react-native';
import Header,{TaskBar} from "../../components/Navbar/navbar";
import styles from "./styles";
import { StatusBar } from 'expo-status-bar';

export default function DiagnosisPage({navigation}) {

    return (
    <>
        <Header navigation={navigation}/>
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.button_grid}>
                <Text style={styles.txt}>Quantidade de dias que os aparelhos ficaram ligados</Text>
            </View>

            <View style={styles.dev_names}>
                <Text>SHOOS</Text>
            </View>
        </View>
        <TaskBar navigation={navigation}/>
    </>
    );
}