import React, { Component } from 'react';
import {  StyleSheet, TouchableOpacity, View, AsyncStorage,ToastAndroid, Text,TextInput } from 'react-native';
import {Actions} from "react-native-router-flux";

export default class Login extends Component {
  state = {
    loginMsg: {
        user: '',
        password: '',
    },
  }
  login = () => {
    let loginMsg = this.state.loginMsg
    let str = JSON.stringify(loginMsg)
    if (loginMsg.user !=='' && loginMsg.password !== '') {
        AsyncStorage.setItem('loginMsg', str,(error)=>{
            if (error) {
                ToastAndroid.showWithGravity(
                    '存储失败',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
            } else {
                Actions.Home()
            }
        })
    } else {
        ToastAndroid.showWithGravity(
            '请输入用户名和密码',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    }
   
}
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.top}>登录</Text>
        </View>
        <View style={styles.account}>
            <TextInput inlineImageLeft="user" placeholder="请输入账号" style={{textAlign: "center"}} />
        </View>
        <View style={styles.number}>
            <TextInput inlineImageLeft="user" placeholder="请输入密码" style={{textAlign: "center"}} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { this.login()}}>
          <Text style={styles.login}>登陆</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   padding: 20
  },
  top:{
    fontSize: 20,
    paddingBottom: 20
  },
  account:{
      borderColor: '#bdbdbd',
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: 10,
  },
  number:{
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 6,
  },
  button:{
    backgroundColor: '#2581FF',
    borderRadius: 4,
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
  login:{
    color: '#fff',
    textAlign: 'center',
  }
  
})



