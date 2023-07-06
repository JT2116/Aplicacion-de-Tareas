import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native';

const Formulario = () => {
    return(
        <View>
            <TextInput
                style={styles.textInput}
                placeholder="Escribe una tarea"
                onChangeText={()=>{}}
            />
            <Button 
                style={styles.botom}
                title="Agregar tarea" 
                onPress={()=>{console.log('owo')}}                            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 0.7,
        borderRadius: 7,
        fontSize: 19
    },
    botom: {
        borderRadius: 7,        
    }

});

export default Formulario;
