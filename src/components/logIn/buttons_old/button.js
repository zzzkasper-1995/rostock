import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default (props) => (
    <TouchableOpacity>
        <LinearGradient colors={props.colorGradient} style={styles.button}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: 232,
        height: 40,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    text: {  
        color: 'white',
        fontFamily: 'Open Sans',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4,
    },
});
