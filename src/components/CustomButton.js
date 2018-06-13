import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export  default class CustomButton extends Component {

    render() {
        const {
           onLoginPress
           
        } = this.props;

        const {
            body,
            text,
            buttonStyle
        } = styles

        return (
            <View style={body}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onLoginPress}>
                    <Text style={text}>Login</Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1 / 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor:'#e3757c',
    },
    text: {
        alignItems: 'center',
        color: 'white',
        fontSize: 30,
    },
    buttonStyle: {
        backgroundColor: '#fab1b9',
        paddingHorizontal: 100,
        paddingVertical: 7,
        borderRadius: 30,

    },

})