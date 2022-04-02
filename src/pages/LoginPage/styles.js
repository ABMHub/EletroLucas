import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    title: {
        position: 'relative',
        marginBottom:'35%',
        fontSize:36,
        fontFamily:'monospace',
        color: 'white',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
    },
    container: {
        flex: 1,
    },
    bkg: {
        position: 'relative',
        marginLeft:'5%',
        marginRight: '5%',
        justifyContent: 'center',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fdfdfd",
        margin: 5
    },
    btt: {
        position: 'relative',
        marginLeft:'5%',
        marginRight: '5%',
        justifyContent: 'center',
        padding: 5,
    }
});

export const LoginImage = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
});