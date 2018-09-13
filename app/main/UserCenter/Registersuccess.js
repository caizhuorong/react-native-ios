


'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';
import { NaviGoBack,isPhoneNumber } from '../../common/CommonUtils';
import {HOST,REGISTER_ACTION} from  '../../common/Request';
import {NativeModules} from 'react-native';
const {height, width} = Dimensions.get('window');

var username = '';
var password = '';
var verifyCode = '';
class Login extends Component {
    constructor(props) {
        super(props);
        this.buttonBackAction=this.buttonBackAction.bind(this);
        this.state = {
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
        }
    }
    //返回
    buttonBackAction(){
        const {navigator} = this.props;
        return NaviGoBack(navigator);
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
    render() {
        return (
                <View style={{backgroundColor:'#fff',flex:1}}>
                    <View style={styles.topbar_bg}>
                        <TouchableOpacity onPress={() => {
                        this.buttonBackAction()
                        }}
                        style={styles.topbar_left_item}>
                
                        </TouchableOpacity>
                        <View style={styles.topbar_center_bg}>
                            <Text style={styles.topbar_center_tv}></Text>
                        </View>
                        <TouchableOpacity  style={styles.topbar_right_item}>
                            <Text style={{fontSize:15,color:'#999'}}>跳过</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center'}} >
                        <Image source={require('../../imgs/icon/img_26.png')} style={{marginTop:25,width:43,height:43}} />
                        <Text style={{marginTop:20,fontSize:17,color:'#333'}}>恭喜您，注册成功</Text>
                    </View>
                <View style={{flexDirection:'row',marginTop:66,justifyContent:'center'}}>
                <Text>输入邀请码即可绑定邀请人信息，可获得额外奖励哦</Text>
                </View>
                    <View style={{marginTop:20,width:width*.86,marginLeft:width*.05,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
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
                <View style={{width:width*.8,height:43,flexDirection:'row',justifyContent:'center',backgroundColor:'#f2f2f2',alignItems:'center',marginLeft:width*.1,marginTop:200}}>
                <TouchableOpacity>
                <Text>确认</Text>
                </TouchableOpacity>
                </View>
                </View>
                );
    }
}
const styles=StyleSheet.create({
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
