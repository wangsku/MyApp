import React, { Component } from 'react';
import {Image, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'



export default class Home extends Component{
    render() {
        return(
            <View style={{height: '100%'}}>
                <View style={styles.header}>
                    <View style={styles.head}>
                        <TouchableOpacity>
                            <Image style={styles.search} source={require('../../images/search.png')}></Image>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.seek}
                            placeholder={'请输入搜索关键词'}
                            placeholderTextColor="#BDBDBD"  
                        />
                        <View>
                            <Text style={styles.right}>搜索</Text>
                        </View>
                        
                    </View>
                </View>
                <View style={styles.conent}>
                    <View style={styles.detail}>
                        
                        <Image style={styles.scenery} source={require('../../images/scenery.jpg')}></Image>
                        
                        <Text style={styles.describe}>
                        欲把西湖比西子，浓妆淡抹总相宜”来形容杭州西湖的美，美是一种境界，一种环境的动人状态
                        </Text>
                        <View style={styles.collect}>
                            <Image style={styles.select} source={require('../../images/collect.png')}></Image>
                        </View>                
                    </View>
                    <View style={styles.detail}>
                        
                        <Image style={styles.scenery} source={require('../../images/scenery.jpg')}></Image>
                        
                        <Text style={styles.describe}>
                        欲把西湖比西子，浓妆淡抹总相宜”来形容杭州西湖的美，美是一种境界，一种环境的动人状态
                        </Text>
                        <View style={styles.collect}>
                            <Image style={styles.select} source={require('../../images/collect.png')}></Image>
                        </View>                
                    </View>
                    <View style={styles.detail}>
                        
                        <Image style={styles.scenery} source={require('../../images/scenery.jpg')}></Image>
                        
                        <Text style={styles.describe}>
                        欲把西湖比西子，浓妆淡抹总相宜”来形容杭州西湖的美，美是一种境界，一种环境的动人状态
                        </Text>
                        <View style={styles.collect}>
                            <Image style={styles.select} source={require('../../images/collect.png')}></Image>
                        </View>                
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
    
    head: {
        flex: 1,
        alignSelf: 'center',
        borderColor: '#fff',
        borderRadius: 6,
        margin: 15,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor:'#FFFFFF'
    },
    seek: {
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








