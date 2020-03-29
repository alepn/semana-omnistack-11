import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },

    header:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },

    form:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    input:{
        width: '100%',
        height: 50,
        color: '#333',
        borderWidth: 1,
        borderColor: '#dcdce6',
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 10
    },

    inputLabel:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },

    action:{
        marginTop: 20,
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionLabel:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }

});