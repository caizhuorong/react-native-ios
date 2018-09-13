
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
    Dimensions
} from 'react-native';

import { NaviGoBack,isPhoneNumber } from '../../common/CommonUtils';
import ShortLineTwo from '../../component/ShortLineTwo';
import {HOST,REGISTER_ACTION} from  '../../common/Request';
import {NativeModules} from 'react-native';
var EncryptionModule = NativeModules.EncryptionModule;
const {height, width} = Dimensions.get('window');
import Loading from '../../component/Loading';
import Setpass from './Setpass';


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
            inputcolor0:'#f2f2f2',
            inputcolor1:'#f2f2f2',
            inputcolor2:'#f2f2f2',
            inputcolor3:'#f2f2f2',
            inputcolor4:'#f2f2f2',
            inputcolor5:'#f2f2f2',
            inputvalue0:'',
            inputvalue1:'',
            inputvalue2:'',
            inputvalue3:'',
            inputvalue4:'',
            inputvalue5:'',
            timerCount:60,
            counting: false,
            selfEnable: true,
            timetile:'60S后重新发送',
        timetype:false
            
        }
    }
    //返回
    buttonBackAction(){
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }
    componentDidMount(){
        this.scondchange();
    }
    registerAction(){
        const {navigator} = this.props;
        //用户登录
        const _this = this;
//        this.getLoading().show();
        if( _this.state.teltype ){
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                               component: Setpass,
                               name: 'Setpass',
                               passProps:{
                               id:_this.props.id,                 yzm:_this.state.inputvalue0+_this.state.inputvalue1+_this.state.inputvalue2+_this.state.inputvalue3+_this.state.inputvalue4+_this.state.inputvalue5
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
//        return this.refs['loading'];
        const {navigator} = this.props;
        const _this = this;
        //用户登录
        
        // this.getLoading().show();
 
        
    }
    inputfocus = (y) => {
        this.setState({
          inputcolor0:'#f2f2f2',
          inputcolor1:'#f2f2f2',
          inputcolor2:'#f2f2f2',
          inputcolor3:'#f2f2f2',
          inputcolor4:'#f2f2f2',
          inputcolor5:'#f2f2f2',
        })
        if( y == 0 ){
            this.setState({
              inputcolor0:'#4FA2FF'
            })
        }else if( y == 1 ){
            this.setState({
              inputcolor1:'#4FA2FF',
            })
        }else if( y == 2 ){
            this.setState({
              inputcolor2:'#4FA2FF'
            })
        }else if( y == 3 ){
            this.setState({
              inputcolor3:'#4FA2FF'
            })
        }else if( y == 4 ){
            this.setState({
              inputcolor4:'#4FA2FF'
            })
        }else{
            this.setState({
              inputcolor5:'#4FA2FF'
            })
        }
    }
    telchange(x,y){
        if(y == 0){
            this.setState({
              inputvalue0:x
            })
            if( x.length >= 1 ){
                this.refs.one.blur();
                this.refs.two.focus();
            }
        }else if( y == 1 ){
            this.refs.two.blur();
            this.setState({
              inputvalue1:x
            })
            if( x.length >= 1 ){
                this.refs.three.focus();
            }else{
                this.refs.one.focus();
            }
        }else if( y == 2 ){
            this.refs.three.blur();
            this.setState({
              inputvalue2:x
            })
            if( x.length >= 1 ){
                this.refs.four.focus();
            }else{
                this.refs.two.focus();
            }
        }else if( y == 3 ){
            this.refs.four.blur();
            this.setState({
              inputvalue3:x
            })
            if( x.length >= 1 ){
                this.refs.five.focus();
            }else{
                this.refs.three.focus();
            }
        }else if( y == 4 ){
            this.refs.five.blur();
            this.setState({
              inputvalue4:x
            })
            if( x.length >= 1 ){
                this.refs.six.focus();
            }else{
                this.refs.four.focus();
            }
        }else if( y== 5 ){
            this.refs.six.blur();
            this.setState({
              inputvalue5:x
            })
            if( x.length >= 1 ){
                this.setState({
                  teltype:true
                })
            }else{
                this.refs.five.focus();
            }
        }
    }
    scondchange=()=>{
        const codeTime = this.state.timerCount;
        const now = Date.now()
        const overTimeStamp = now + codeTime * 1000 + 100;
        this.interval = setInterval(() =>{
            const nowStamp = Date.now()
            if (nowStamp >= overTimeStamp) {
                this.interval&&clearInterval(this.interval);
                this.setState({
                  timetile: `重新发送`,
                  timetype:true
                })
                
            }else{
                const leftTime = parseInt((overTimeStamp - nowStamp)/1000, 10);
                this.setState({
                  timetile: `${leftTime}S后重新发送`,
                  timetype:false
                })
            }
        },1000)
    }
    cxfs = () =>{
        if( this.state.timetype == true ){
            this.scondchange();
        }
    }
    render() {
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
                <Text style={{color:'#333',fontSize:24,}}>输入短信验证码</Text>
                <Text style={{paddingTop:5,color:'#999',fontSize:12}}>短信验证码已发送至{this.props.id}</Text>
                </View>
                <View style={{marginTop:40,width:width*.86,marginLeft:width*.05,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',width:38}}>
                        <TextInput
                        style={{width:38,height:40,fontSize: 15,textAlign: 'center',textAlignVertical:'center',borderBottomWidth:1,borderColor:this.state.inputcolor0}}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'one'}
                        maxLength={1}
                        onFocus={()=>this.inputfocus(0)}
                        onChangeText={(text) => this.telchange(text,0)}
                        />
                    </View>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',width:38}}>
                        <TextInput
                        style={{height:40,fontSize: 15,textAlign: 'center',textAlignVertical:'center',borderBottomWidth:1,borderColor:this.state.inputcolor1,width:38}}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'two'}
                        maxLength={1}
                onFocus={()=>this.inputfocus(1)}
                        onChangeText={(text) => this.telchange(text,1)}
                        />
                    </View>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',width:38}}>
                        <TextInput
                        style={{height:40,fontSize: 15,textAlign: 'center',textAlignVertical:'center',borderBottomWidth:1,borderColor:this.state.inputcolor2,width:38}}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'three'}
                        maxLength={1}
                        onFocus={()=>this.inputfocus(2)}
                        onChangeText={(text) => this.telchange(text,2)}
                        />
                    </View>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',width:38}}>
                        <TextInput
                        style={{height:40,fontSize: 15,textAlign: 'center',width:38,textAlignVertical:'center',borderBottomWidth:1,borderColor:this.state.inputcolor3}}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'four'}
                        maxLength={1}
                        onFocus={()=>this.inputfocus(3)}
                        onChangeText={(text) => this.telchange(text,3)}
                        />
                    </View>
                    <View style={{width:38,flexDirection:'row',height:45,alignItems:'center'}}>
                        <TextInput
                        style={{height:40,width:38,fontSize: 15,textAlign: 'center',textAlignVertical:'center',borderBottomWidth:1,borderColor:this.state.inputcolor4}}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'five'}
                        maxLength={1}
                        onFocus={()=>this.inputfocus(4)}
                        onChangeText={(text) => this.telchange(text,4)}
                        />
                    </View>
                    <View style={{flexDirection:'row',width:38,height:45,alignItems:'center',}}>
                        <TextInput
                style={{height:40,width:38,fontSize: 15,textAlign: 'center',textAlignVertical:'center',borderBottomWidth:1,borderColor:this.state.inputcolor5}}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        ref={'six'}
                        maxLength={1}
                        onFocus={()=>this.inputfocus(5)}
                        onChangeText={(text) => this.telchange(text,5)}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:10,marginLeft:28}}>
                    <TouchableOpacity onPress={this.cxfs}>
                        <Text style={{color:this.state.timetype?'#76A6FF':'#c6c6c6',fontSize:12}}>{this.state.timetile}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.registerAction()}
                style={{justifyContent: 'center', marginTop: 13, alignItems: 'center'}}>
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
                        <Text style={{color: 'white',fontSize:17}}>确定</Text>
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
                               inputstyles:{
                                height:40,
                                fontSize:15,
                                textAlign:'center',
                                textAlignVertical:'center',
                                borderBottomWidth:1,
                                width:38,
                               borderColor:'#f2f2f2'
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
