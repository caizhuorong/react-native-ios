'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    InteractionManager,
    Dimensions,
    StyleSheet,
    ScrollView,
    ToastAndroid,
    ImageBackground
} from 'react-native';

import Setting from './UserCenter/Setting';
import More from './UserCenter/More';
import Login from './UserCenter/Login';
import CenterItem from '../component/CenterItem';
import ImageButton from '../component/ImageButton';
import ModifyInformation from './UserCenter/ModifyInformation';
import Charge from './UserCenter/Charge';
import Prepaid from './UserCenter/Prepaid';
import Withdraw from './UserCenter/Withdraw';

var {height, width} =  Dimensions.get('window');

class User extends Component {
    constructor(props) {
        super(props);
        this.settingButtonAction = this.settingButtonAction.bind(this);
        this.itemActionIndex = this.itemActionIndex.bind(this);
        this.itemModifyAction = this.itemModifyAction.bind(this);
        this.loginButtonActiom = this.loginButtonActiom.bind(this);
    }

    //设置按钮
    settingButtonAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: Setting,
                name: 'Setting'
            });
        });
    }

    //登录
    loginButtonActiom() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: Login,
                name: 'Login'
            });
        });
    }

    //判断当前点击了那个按钮
    itemActionIndex(position) {
        const {navigator} = this.props;
        if (position === 0) {

        } else if (position === 1) {
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                    component: Prepaid,
                    name: 'Prepaid'
                });
            });
        } else if (position === 2) {
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                    component: Withdraw,
                    name: 'Withdraw'
                });
            });
        } else if (position === 3) {
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                    component: Charge,
                    name: 'Charge'
                });
            });
        } else if (position === 4) {

        } else if (position === 5) {
            InteractionManager.runAfterInteractions(() => {
                navigator.push({
                    component: More,
                    name: 'More'
                });
            });
        }
    }

    //编辑按钮
    itemModifyAction() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: ModifyInformation,
                name: 'ModifyInformation'
            });
        });
    }

    render() {
        console.log(width);
        return (
                <View style={{flex: 1, backgroundColor: '#f5f5f5',marginTop:-30}}>
                <ImageBackground style={{width:width,height:370,resizeMode:'contain',flexDirection:'column'}} source={require('../imgs/icon/img_11.png')} >
                    <View style={{justifyContent:'flex-end',alignItems:'flex-start', flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => {
                            this.settingButtonAction()
                            }}
                            style={{marginRight: 10,marginTop:70}}>
                            <Image
                style={{width: 24, height: 22}}
                            source={require('../imgs/ic_center_setting.png')}
                            />
                        </TouchableOpacity>
                    </View>
                <View style={{flexDirection: 'column',alignItems:'center',justifyContent:'center'}}>
                <Image style={{width: 82, height: 82,marginTop:20}}
                source={require('../imgs/ic_center_icon.png')}/>
                <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 10}}>
                <Text style={{color:'#fff',fontSize:17}}>harvest_wang</Text>
                </View>
                </View>
                </ImageBackground>
                <View style={{
                width:width,
                height:398,
                marginTop:-60,
                backgroundColor:'#fff',
                borderTopLeftRadius:14,
                borderTopRightRadius:14
                }}>
                <View style={{
                width:width,
                height:133,
                borderBottomWidth:1,
                borderColor:'#f2f2f2',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
                }}>
                    <View style={styles.one_div}>
                        <Image style={{width:39,height:30}} source={require('../imgs/icon/img_13.png')} />
                        <Text style={styles.one_text}>我的钱包</Text>
                    </View>
                    <View style={styles.one_div}>
                    <Image style={{width:39,height:30}} source={require('../imgs/icon/img_15.png')}/>
                        <Text style={styles.one_text}>BPCC获取</Text>
                    </View>
                    <View style={styles.one_div}>
                        <Image style={{width:32,height:39}} source={require('../imgs/icon/img_12.png')}/>
                        <Text style={{paddingTop:6,
                        fontSize:12,
                        color:'#333',
                        textAlign:'center'}}>我的订单</Text>
                    </View>
                    <View style={styles.one_div}>
                        <Image style={{width:37,height:33}} source={require('../imgs/icon/img_14.png')}/>
                        <Text style={{paddingTop:12,
                        fontSize:12,
                        color:'#333',
                        textAlign:'center'}}>我的收藏</Text>
                    </View>
                </View>
                <View style={{width:width,flexDirection:'row',alignItems:'center',justifyContent:'flex-start',flexWrap:'wrap',marginTop:30}}>
                    <View style={styles.two_div}>
                        <Image style={styles.two_img} source={require('../imgs/icon/img_18.png')} />
                        <Text style={styles.two_text}>激励机制</Text>
                    </View>
                    <View style={styles.two_div}>
                        <Image style={styles.two_img} source={require('../imgs/icon/img_17.png')} />
                        <Text style={styles.two_text}>好友邀请</Text>
                    </View>
                    <View style={styles.two_div}>
                        <Image style={styles.two_img} source={require('../imgs/icon/img_21.png')} />
                        <Text style={styles.two_text}>商户推荐</Text>
                    </View>
                    <View style={styles.two_div}>
                        <Image style={styles.two_img} source={require('../imgs/icon/img_22.png')} />
                        <Text style={styles.two_text}>我要合作</Text>
                    </View>
                    <View style={styles.two_div}>
                        <Image style={styles.two_img} source={require('../imgs/icon/img_19.png')} />
                        <Text style={styles.two_text}>联系客服</Text>
                    </View>
                    <View style={styles.two_div}>
                <Image style={styles.two_img} source={require('../imgs/icon/img_16.png')} />
                <Text style={styles.two_text}>关于我们</Text>
                    </View>
                </View>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    top_line: {
        height: 1,
        backgroundColor: '#ccc'
    },
    center_line: {
        marginLeft: 8,
        marginRight: 8,
    },
    modify_item: {
        alignItems: 'flex-end',
        flex: 1,
        marginRight: 10,
        marginTop: 15
    },
     one_div:{
         flexDirection:'column',
         width:width/4,
         justifyContent:'center',
         alignItems:'center'
     },
     
     one_text:{
         paddingTop:15,
         fontSize:12,
         color:'#333',
         textAlign:'center'
     },
                                 two_div:{
                                 width:width/4,
                                 height:100,
                                 flexDirection:'column',
                                 justifyContent:'center',
                                 alignItems:'center'
                                 },
                                 two_img:{
                                 width:35,
                                 height:32,
                                 resizeMode:'contain',
                                 },
                                 two_text:{
                                 paddingTop:7,
                                 fontSize:12,
                                 color:'#666666',
                                 }
});
export default User;
//                                <ImageButton icon={require('../imgs/ic_center_modify.png')} title='编辑'
//                                             onPress={()=> {
//                                                 this.itemModifyAction()
//                                             }}
//                                />'


//render() {
//    return (
//            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
//            <View style={{width:width,flexDirection:'row'}}>
//            <ImageBackground style={{width:width,height:261}} source={require('../imgs/icon/img_11.png')}>
//            <View style={{height: 261, flexDirection: 'row'}}>
//            <View style={{flex: 1}}></View>
//            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
//            <Text style={{fontSize: 18, color: 'white', alignItems: 'flex-start'}}>我的</Text>
//            </View>
//            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
//            <TouchableOpacity onPress={() => {
//            this.settingButtonAction()
//            }}
//            style={{marginRight: 20, justifyContent: 'center'}}>
//            <Image
//            style={{width: 24, height: 22}}
//            source={require('../imgs/ic_center_setting.png')}
//            />
//            </TouchableOpacity>
//            </View>
//            </View>
//            </ImageBackground>
//            </View>
//            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
//            <View style={{backgroundColor: 'white'}}>
//            <View style={{flexDirection: 'row', height: 100}}>
//            <TouchableWithoutFeedback onPress={() => {
//            this.loginButtonActiom()
//            }}>
//            <Image style={{width: 70, height: 70, marginLeft: 10, marginTop: 15}}
//            source={require('../imgs/ic_center_icon.png')}/>
//            </TouchableWithoutFeedback>
//            <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 10}}>
//            <Text>harvest_wang</Text>
//            <View style={{flexDirection: 'row'}}>
//            <Text style={{color: '#ddd'}}>余额:</Text>
//            <Text style={{color: '#ddd'}}>¥999999999</Text>
//            </View>
//            </View>
//            <View style={styles.modify_item}>
//            </View>
//            </View>
//            </View>
//
//            <View style={styles.top_line}></View>
//            <CenterItem title='充值' icon={require('../imgs/ic_center_chongzhi.png')}
//            onPress={()=>this.itemActionIndex(1)}/>
//            <View style={styles.top_line}></View>
//            <CenterItem title='提现' icon={require('../imgs/ic_center_tixian.png')}
//            onPress={()=>this.itemActionIndex(2)}/>
//            <View style={styles.top_line}></View>
//
//            <View style={[styles.top_line, {marginTop: 10}]}></View>
//            <CenterItem
//            title='交易记录'
//            icon={require('../imgs/ic_center_jilu.png')}
//            />
//            <View style={[styles.top_line, styles.center_line]}></View>
//            <CenterItem
//            title='银行卡'
//            icon={require('../imgs/ic_center_card.png')}
//            onPress={()=>this.itemActionIndex(3)}/>
//            <View style={[styles.top_line, styles.center_line]}></View>
//            <CenterItem
//            title='体验金'
//            icon={require('../imgs/ic_center_tiyanjin.png')}
//            onPress={()=>this.itemActionIndex(3)}/>
//            <View style={[styles.top_line, styles.center_line]}></View>
//            <CenterItem
//            title='对账单'
//            icon={require('../imgs/ic_center_duizhangdan.png')}
//            onPress={()=>this.itemActionIndex(4)}/>
//            <View style={[styles.top_line, styles.center_line]}></View>
//
//            <View style={[styles.top_line, {marginTop: 10}]}></View>
//            <CenterItem
//            title='更多'
//            icon={require('../imgs/ic_center_more.png')}
//            onPress={()=>this.itemActionIndex(5)}/>
//            <View style={styles.top_line}></View>
//            <TouchableOpacity onPress={() => {
//            this.buttonRegisterOrLoginAction(0)
//            }}
//            style={{justifyContent: 'center', marginTop: 13, alignItems: 'center'}}>
//            <View style={{
//            width: 300,
//            height: 40,
//            backgroundColor: '#389e7f',
//            justifyContent: 'center',
//            alignItems: 'center'
//            }}>
//            <Text style={{color: 'white'}}>退出登录</Text>
//            </View>
//            </TouchableOpacity>
//            </ScrollView>
//            </View>

