import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, Image, View, TouchableOpacity, AsyncStorage } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Logon(){
    const [id, setId] = useState('');  
    
    const navigation = useNavigation();

    async function handleLogon(e){
        e.preventDefault();
    
        const data = {
            id
        };
    
        try{
            const response = await api.post('sessions', data);
            AsyncStorage.setItem('userId', id);
            AsyncStorage.setItem('userName', response.data.name);
            setId('');
            navigation.navigate('Incidents');
        } catch (err){
            alert('Falha no logon!');
        }
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <View style={styles.form}>
                <Text style={styles.inputLabel}>Sua ID:</Text>
                <TextInput
                    style={styles.input}
                    value={id}
                    onChangeText={id => setId(id)}
                />

                <TouchableOpacity 
                    style={styles.action} 
                    onPress={handleLogon}
                >
                    <Text style={styles.actionLabel}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}