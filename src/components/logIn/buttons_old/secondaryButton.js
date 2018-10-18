import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default (props) => (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
            {props.text}
        </Text>
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
        borderWidth: 1,
        borderColor: '#7bae45',
    },
    text: {  
        color: 'white',
        fontFamily: 'Open Sans',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4,
    },
});
