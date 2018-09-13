

'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    WebView
} from 'react-native';

import { NaviGoBack,isPhoneNumber } from '../../common/CommonUtils';
import {HOST,REGISTER_ACTION} from  '../../common/Request';
import {NativeModules} from 'react-native';
const {height, width} = Dimensions.get('window');
import {userxy} from '../../common/api';

var username = '';
var password = '';
var verifyCode = '';
class Login extends Component {
    constructor(props) {
        super(props);
        this.buttonBackAction=this.buttonBackAction.bind(this);
    }
    //返回
    buttonBackAction(){
        const {navigator} = this.props;
        return NaviGoBack(navigator);
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
                <WebView
                source={{uri: userxy}}
                style={{marginTop: 20}}
                />
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
