
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
    Platform,
    Dimensions,
} from 'react-native';

import { NaviGoBack } from '../../common/CommonUtils';
import ShortLineTwo from '../../component/ShortLineTwo';
import {HOST,REGISTER_ACTION} from  '../../common/Request';
import {NativeModules} from 'react-native';
import Verification from './Verification';
var EncryptionModule = NativeModules.EncryptionModule;
const {height, width} = Dimensions.get('window');
import Loading from '../../component/Loading';
import Userxy from './Userxy';
const passicon = require('../../imgs/icon/img_25.png');
const passicons = require('../../imgs/icon/img_24.png');
import Registersuccess from './Registersuccess';
var username = '';
var password = '';
var verifyCode = '';
class Login extends Component {
    constructor(props) {
        super(props);
        this.buttonBackAction=this.buttonBackAction.bind(this);
        this.registerAction=this.registerAction.bind(this);
        this.state={
            tel:'',
            teltype:false,
            passicon:true,
        }
    }
    //返回
    buttonBackAction(){
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }
    componentDidMount(){
        console.log(this.props);
    }
    buttonChangeState = () => {
        this.setState({
          passicon:!this.state.passicon,
        })
        
    }
    registerAction(){
        const {navigator} = this.props;
        const _this = this;
        //用户登录
        
        //       this.getLoading().show();
        if( _this.state.teltype ){
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
               component: Registersuccess,
               name: 'Registersuccess',
               passProps:{
               id:_this.state.tel
               }
               });
            });
        }
        
        // EncryptionModule.MD5ByCallBack(password,(msg)=>{
        // client.addMiddleware(form());
        //          client.addMiddleware(request => {
        //          request.options.headers['appkey'] = '8a9283a0567d5bea01567d5beaf90000';
        //            });
        //        client.post(REGISTER_ACTION, {
        //            form: {
        //              username: username,
        //              password: msg,
        //           },
        //        }).then(response => {
        //          return response.json();
        //        }).then((result)=>{
        //           this.getLoading().dismiss();
        //           if(result.code === '0'){
        //               //登录成功..
        //               (Platform.OS === 'android') ? ToastAndroid.show('注册成功...',ToastAndroid.SHORT) : '';
        //               NaviGoBack(navigator);
        //           }else{
        //               (Platform.OS === 'android') ? ToastAndroid.show(result.msg,ToastAndroid.SHORT) : '';
        //           }
        //        }).catch((error) => {
        //          this.getLoading().dismiss();
        //          (Platform.OS === 'android') ? ToastAndroid.show('网络连接异常...',ToastAndroid.SHORT) : '';
        //        });
        //       },(error)=>{
        //         this.getLoading().dismiss();
        //         (Platform.OS === 'android') ? ToastAndroid.show('密码加密失败...',ToastAndroid.SHORT) : '';
        //     });
    }
    //获取加载进度组件
    getLoading() {
        return this.refs['loading'];
    }
    telchange(e){
        if( e.length >= 6 ){
            this.setState({
              tel:e,
              teltype:true,
            })
        }
        
        
    }
    gotoxy = () =>{
        const {navigator} = this.props;
        const _this = this;
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
               component: Userxy,
               name: 'Userxy',
           });
        });
    }
    render() {
        console.log(this.state.passicon)
        return (
                <View style={{backgroundColor:'#fff',flex:1}}>
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
                <Text style={styles.topbar_center_tv}>注册账号</Text>
                </View>
                <TouchableOpacity  style={styles.topbar_right_item}>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:70,marginLeft:28}}>
                <Text style={{color:'#333',fontSize:24,}}>设置密码</Text>
                <Text style={{paddingTop:14,color:'#c6c6c6',fontSize:12}}>密码须为6~20位数字与字母组合，支持常规特殊符号</Text>
                <Text style={{paddingTop:49,color:'#c6c6c6',fontSize:12}}>密码</Text>
                </View>
                <View style={{marginTop:13,width:width*.86,marginLeft:width*.07}}>
                <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                <TextInput
                style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                placeholder="请设置密码"
                placeholderTextColor="#aaaaaa"
                password={this.state.passicon}
                secureTextEntry={this.state.passicon}
                ref={'username'}
                clearTextOnFocus={false}
                autoFocus={true}
                onChangeText={(text) => this.telchange(text)}
                />
                <TouchableOpacity onPress={this.buttonChangeState}>
                    <Image  source={this.state.passicon == true ?passicon:passicons }
                    style={{width: 16, height: 8, marginRight:20}}/>
                </TouchableOpacity>
                </View>
                <View style={{width:width*.86,height:1,backgroundColor:'#f2f2f2',marginTop:1}} />
                <View style={{marginTop:15}}>
                <Text style={{fontSize:12,color:'#c6c6c6'}}>提示：完成密码设置流程即表示注册成功，且代表您已同意<Text style={{color:'#76A6FF',fontSize:12}} onPress={this.gotoxy}>《用户注册协议》</Text></Text>
                </View>
                </View>
                <TouchableOpacity onPress={() => this.registerAction()}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{
                width: 304,
                height: 43,
                marginTop:48,
                borderRadius:7,
                backgroundColor: this.state.teltype == true ?'#4388D7':'#c6c6c6',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor:'#666666',
                shadowOffset:{h:10,w:10},
                shadowRadius:3,
                shadowOpacity:0.6,
                }}>
                <Text style={{color: 'white',fontSize:17}}>注册</Text>
                </View>
                </TouchableOpacity>
                <Loading ref={'loading'} text={'登录中...'} />
                </View>
                );
    }
}
const styles=StyleSheet.create({
                               item_layout:{
                               backgroundColor:'white',
                               height:48,
                               justifyContent:'center'
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
                               });
export default Login;
