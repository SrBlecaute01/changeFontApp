import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {useState} from "react";

// noinspection JSUnusedGlobalSymbols
export default function App() {
    const [font, setFont] = useState(12)
    const [time, setTime] = useState(null)

    const onPress = (number) => {
        setFont((prev) => prev + number)
    }

    const onLongPress = (number) => {
        setFont((prev) => prev + number)
        setTime(setTimeout(() => onLongPress(number), 20))
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: font}}>Hello World</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onLongPress={() => onLongPress(1)}
                    onPressOut={() => clearTimeout(time)} onPress={() =>
                    onPress(1)}
                >
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onLongPress={() => onLongPress(-1)}
                    onPressOut={() => clearTimeout(time)}
                    onPress={() => onPress(-1)}
                >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },

    button: {
        marginLeft: '2%',
        marginRight: '2%',
        backgroundColor: '#fff',
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {height: 2, width: 2},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },

    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: '3%',
        paddingLeft: '3%',
        backgroundColor: 'rgb(55,122,248)',
    }

});