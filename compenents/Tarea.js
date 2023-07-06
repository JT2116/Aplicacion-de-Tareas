import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tarea = () => {
    return(
        <View>
            <Text style={styles.text}>
                Tarea 1
            </Text>
            <TouchableOpacity>
                <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    text: {
        borderWidth: 0.7,
        borderRadius: 7,
        fontSize: 19
    },

});

export default Tarea;