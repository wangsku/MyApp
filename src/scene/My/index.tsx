import React, { Component } from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class My extends Component {
    render() {

        return(
            <View style={{height: '100%'}}>
                <View style={styles.headPortrait}>
                    <Image style={{width: 50, height: 50, borderRadius: 50, marginBottom: 10}} source={require("../../images/head.jpg")}></Image>
                    <Text>ccement</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Image style={{width: 20, height: 20}} source={require("../../images/enshrine.png")}></Image>
                            <Text style={{paddingLeft: 15}}>我的收藏</Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={{width: 20, height: 20}} source={require("../../images/arrow.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Image style={{width: 20, height: 20}} source={require("../../images/set.png")}></Image>
                            <Text style={{paddingLeft: 15}}>修改信息</Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={{width: 20, height: 20}} source={require("../../images/arrow.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.left}>
                            <Image style={{width: 20, height: 20}} source={require("../../images/phone.png")}></Image>
                            <Text style={{paddingLeft: 15}}>联系我们</Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={{width: 20, height: 20}} source={require("../../images/arrow.png")}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headPortrait: {
        height: '15%',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#eee',
        paddingTop: 20,
        flex: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})




