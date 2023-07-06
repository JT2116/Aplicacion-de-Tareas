import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Formulario from "./Formulario.js";

const ListaDeTareas = () => {
    return(
        <View style={styles.containerTarea}>
            <Text style={styles.textTitle}>Lista de tareas</Text>
            <Formulario/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerTarea: {
        backgroundColor: '#d0d0d5',        
        borderRadius: 15,
        borderWidth: 6,
        borderColor: '#cdcfd1'
    },
    textTitle: {
      color: '#1b1b32',        
      fontSize: 23,     
    }
});

export default ListaDeTareas;