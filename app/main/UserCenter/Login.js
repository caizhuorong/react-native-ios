'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    InteractionManager,
    TextInput,
    ToastAndroid,
    Dimensions
} from 'react-native';
import {NaviGoBack} from '../../common/CommonUtils';
import {toastShort} from '../../common/ToastUtil';
import ShortLineTwo from '../../component/ShortLineTwo';
import Register from './Register';
import ResetPwd from  './ResetPwd';
import Loading from '../../component/Loading';
const {height, width} = Dimensions.get('window');
const passicon = require('../../imgs/icon/img_25.png');
const passicons = require('../../imgs/icon/img_24.png');
class Login extends Component {
    constructor(props) {
        super(props);
        this.buttonBackAction = this.buttonBackAction.bind(this);
        this.buttonRegisterOrLoginAction = this.buttonRegisterOrLoginAction.bind(this);
        this.buttonChangeState = this.buttonChangeState.bind(this);
        this.findPwdAction = this.findPwdAction.bind(this);
        this.thirdPartLoginAction = this.thirdPartLoginAction.bind(this);
        this.state = {
            username: '',
            password: '',
            passicon:true,
            hui:true,
            usertype:false,
            passtype:false,
        }
    }

    //返回
    buttonBackAction() {
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }

    //用户登录/注册
    buttonRegisterOrLoginAction(position) {
        const {navigator,dispatch} = this.props;
        if (position === 0) {
            //用户登录
            if( this.state.usertype && this.state.passtype ){
//                dispatch(getbpccs());
            }
        } else if (position === 1) {
            //用户注册
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                    component: Register,
                    name: 'Register'
                });
            });
        }
    }

    buttonChangeState() {
        this.setState({
            passicon:!this.state.passicon,
        })
        
    }

    findPwdAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: ResetPwd,
                name: 'ResetPwd'
            });
        });
    }

    thirdPartLoginAction(position) {

    }
    input1(e){
        console.log(e);
        if( e == '' ){
            this.setState({
              username:e,
                          usertype:false,
            })
        }else{
            this.setState({
                          username:e,
                          usertype:true,
            })
        }
    }
    input2(e){
        console.log(e.length);
        if( e.length < 6 ){
            this.setState({
                  password:e,
                  passtype:false,
            })
        }else{
            this.setState({
                  password:e,
                  passtype:true,
            })
        }
    }
    render() {
        const {navigator, dispatch} = this.props;
        console.log(this.state.passicon);
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <View style={styles.topbar_bg}>
                    <TouchableOpacity onPress={() => {
                        this.buttonBackAction()
                    }}
                                      style={styles.topbar_left_item}>
                        <Image
                            style={{width: 13, height: 20}}
                            source={require('../../imgs/icon/img_23.png')}
                        />
                    </TouchableOpacity>
                    <View style={styles.topbar_center_bg}>
                        <Text style={styles.topbar_center_tv}>登录账号</Text>
                    </View>
                    <TouchableOpacity  style={styles.topbar_right_item}>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:70,marginLeft:28}}>
                <Text style={{fontSize:24,color:'#333'}}>欢迎登录区付美</Text>
                <TouchableOpacity style={{marginTop:14,}}>
                <Text style={{fontSize:12,color:'#76A6FF',}}>验证码登录</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: 'white', marginTop: 13}}>
                <View style={{flexDirection: 'column',height:45, alignItems: 'flex-start',marginLeft:28,marginTop:50}}>
                    <Text style={{color:'#C6C6C6',fontSize:12,}}>手机号</Text>
                    <TextInput
                        style={{
                            height: 30,
                            marginTop: 10,
                            marginLeft: 5,
                            fontSize: 14,
                            color:'#333',
                            textAlign: 'left',
                            textAlignVertical: 'center',
                            flex: 1,
                            width:width*.9,
                        }}
                        placeholder="账号/手机/邮箱"
                        placeholderTextColor="#aaaaaa"
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        maxLength={11}
                        ref={'username'}
                        multiline={true}
                        autoCapitalize={'none'}
                        autoFocus={true}
                        onChangeText={(username) => this.input1(username)}
                        value={this.state.username}
                    />
                </View>
                <View style={{width:width*.9,marginLeft:width*.05,height:1,backgroundColor:'#f2f2f2',marginTop:10}}>
                </View>
                <View style={{marginLeft:28,marginTop:30}}>
                    <Text style={{color:'#C6C6C6',fontSize:12,}}>密码</Text>
                </View>
                <View style={{flexDirection: 'row',height:39,alignItems: 'center',marginLeft:28}}>
                        <TextInput
                            style={{
                                height: 30,
                                marginTop: 10,
                                marginLeft: 5,
                                fontSize: 14,
                                textAlign: 'left',
                                textAlignVertical: 'center',
                                flex: 1,
                                color:'#333',
                                width:width*.9,
                            }}
                            placeholder="请输入登录密码"
                            placeholderTextColor="#aaaaaa"
                            ref={'password'}
                            password={this.state.passicon}
                            secureTextEntry={this.state.passicon}
                            onChangeText={(password) => this.input2(password)}
                            value={this.state.password}
                        />
                        <TouchableOpacity onPress={() => {
                            this.buttonChangeState()
                        }} style={{width: 45, height: 45, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={this.state.passicon == true ?passicon:passicons }
                                   style={{width: 16, height: 8, marginRight:20}}/>
                        </TouchableOpacity>
                    </View>
                <View style={{width:width*.9,marginLeft:width*.05,height:1,backgroundColor:'#f2f2f2',marginTop:10}}>
                </View>
                </View>
                <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}} >
                <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row',marginLeft:28}}>
                    <Text style={{color:'#C6C6C6',fontSize:12}}>还没有账号？</Text>
                    <TouchableOpacity onPress={()=> this.buttonRegisterOrLoginAction(1)}>
                        <Text style={{color:'#76A6FF',fontSize:12}}>立即注册</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginRight:28}}>
                <TouchableOpacity onPress={()=> {
                this.findPwdAction()
                }}>
                <Text style={{color:'#76A6FF',fontSize:12}}>忘记密码？</Text>
                </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity onPress={() => {
                    this.buttonRegisterOrLoginAction(0)
                }}
                                  style={{justifyContent: 'center', marginTop: 13, alignItems: 'center'}}>
                    <View style={{
                        width: 304,
                        height: 43,
                        marginTop:48,
                        borderRadius:7,
                        backgroundColor: this.state.usertype == true && this.state.passtype == true ?'#4388D7':'#c6c6c6',
                        justifyContent: 'center',
                        alignItems: 'center',
                    shadowColor:'#666666',
                    shadowOffset:{h:10,w:10},
                    shadowRadius:3,
                    shadowOpacity:0.6,
                    }}>
                <Text style={{color: 'white',fontSize:17}}>登录</Text>
                    </View>
                </TouchableOpacity>
               
                
                <Loading ref={'loading'} text={'登录中...'}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item_layout: {
        backgroundColor: 'white',
        height: 48,
        justifyContent: 'center'
    },
    topbar_bg: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingTop: 10
    },
    topbar_left_item: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_center_bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_center_tv: {
        fontSize: 18,
         color: '#333',
        alignSelf: 'center'
    },
    topbar_right_item: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topbar_right_tv: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    }
});
export default Login;
