import React, { Component } from 'react';
import {StyleSheet, Image, View, Text} from 'react-native'


class Collect extends Component{
    render() {
        return(
            <View style={styles.conent}>
            <View style={styles.detail}>
                
                <Image style={styles.scenery} source={require('../../images/scenery.jpg')}></Image>
                
                <Text style={styles.describe}>
                欲把西湖比西子，浓妆淡抹总相宜”来形容杭州西湖的美，美是一种境界，一种环境的动人状态
                </Text>
                <View style={styles.collect}>
                    <Image style={styles.select} source={require('../../images/cancel.png')}></Image>
                </View>                
            </View>
            <View style={styles.detail}>
                
                <Image style={styles.scenery} source={require('../../images/scenery.jpg')}></Image>
                
                <Text style={styles.describe}>
                欲把西湖比西子，浓妆淡抹总相宜”来形容杭州西湖的美，美是一种境界，一种环境的动人状态
                </Text>
                <View style={styles.collect}>
                    <Image style={styles.select} source={require('../../images/cancel.png')}></Image>
                </View>                
            </View>
            <View style={styles.detail}>
                
                <Image style={styles.scenery} source={require('../../images/scenery.jpg')}></Image>
                
                <Text style={styles.describe}>
                欲把西湖比西子，浓妆淡抹总相宜”来形容杭州西湖的美，美是一种境界，一种环境的动人状态
                </Text>
                <View style={styles.collect}>
                    <Image style={styles.select} source={require('../../images/cancel.png')}></Image>
                </View>                
            </View>
            
        </View>
    
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#2581FF',
    },
    
    textView: {
        flex: 1,
        alignSelf: 'center',
        borderColor: '#fff',
        borderRadius: 6,
        borderWidth: 1,
        margin: 15,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    textInput: {
        height: 40,
        width: '90%',
        color: '#333',
        fontSize: 14,
    },
   
    search: {
        width: 20,
        height: 20,
        color: '#2500FF'
    },
    right: {
        color: '#188DFA'
    },
    conent: {
        paddingTop: 10,
        paddingLeft: 13,
        paddingRight: 13
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 114,
        lineHeight: 114,
        borderBottomWidth: 1,
        borderBottomColor: '#bdbdbd'
    },
    scenery: {
        width: 108,
        height: 73,
        borderRadius: 6
    },
    describe: {
        width: 300,
        paddingLeft: 6,
    },
    collect: {
        paddingLeft: 12
    },
    select:{
        position: 'relative',
        bottom: 16
    }
})


export default Collect
