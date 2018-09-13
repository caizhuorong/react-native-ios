/**
 * 商城主框架界面
 */
//'use strict';
//import React, {Component} from 'react';
//import {
//    StyleSheet,
//    View,
//    Text,
//    Image,
//} from 'react-native';
//import TabNavigator from 'react-native-tab-navigator';
//
//
//import Home from './Home';
//import Invest from './Invest';
//import Find from './Find';
//import Center from './UserCenter';
//
//
//class AppMain extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            selectedTab: 'home'
//        };
//    }
//
//    render() {
//        return (
//            <TabNavigator tabBarStyle={styles.TabNavigator}>
//                <TabNavigator.Item
//                    title="主页"
//                    selected={this.state.selectedTab === 'home'}
//                    selectedTitleStyle={styles.selectedTextStyle}
//                    titleStyle={styles.textStyle}
//                    renderIcon={() => <Image source={require("../imgs/tab_home.png")} style={styles.iconStyle}/>}
//                    renderSelectedIcon={() => <Image source={require("../imgs/tab_home_press.png")}
//                                                     style={styles.iconStyle}/>}
//                    onPress={() => this.setState({selectedTab: 'home'})}>
//                    <Home {...this.props}/>
//                </TabNavigator.Item>
//                <TabNavigator.Item
//                    title="投资"
//                    selected={this.state.selectedTab === 'invest'}
//                    selectedTitleStyle={styles.selectedTextStyle}
//                    titleStyle={styles.textStyle}
//                    renderIcon={() => <Image source={require("../imgs/tab_order.png")} style={styles.iconStyle}/>}
//                    renderSelectedIcon={() => <Image source={require("../imgs/tab_order_press.png")}
//                                                     style={styles.iconStyle}/>}
//                    onPress={() => this.setState({selectedTab: 'invest'})}>
//                    <Invest {...this.props}/>
//                </TabNavigator.Item>
//                <TabNavigator.Item
//                    title="发现"
//                    selected={this.state.selectedTab === 'find'}
//                    selectedTitleStyle={styles.selectedTextStyle}
//                    titleStyle={styles.textStyle}
//                    renderIcon={() => <Image source={require("../imgs/tab_find.png")} style={styles.iconStyle}/>}
//                    renderSelectedIcon={() => <Image source={require("../imgs/tab_find_press.png")}
//                                                     style={styles.iconStyle}/>}
//                    onPress={() => this.setState({selectedTab: 'find'})}>
//                    <Find {...this.props}/>
//                </TabNavigator.Item>
//                <TabNavigator.Item
//                    title="我"
//                    selected={this.state.selectedTab === 'center'}
//                    selectedTitleStyle={styles.selectedTextStyle}
//                    titleStyle={styles.textStyle}
//                    renderIcon={() => <Image source={require("../imgs/tab_center.png")} style={styles.iconStyle}/>}
//                    renderSelectedIcon={() => <Image source={require("../imgs/tab_center_press.png")}
//                                                     style={styles.iconStyle}/>}
//                    onPress={() => this.setState({selectedTab: 'center'})}>
//                    <Center {...this.props}/>
//                </TabNavigator.Item>
//            </TabNavigator>
//        );
//    }
//}
//const styles = StyleSheet.create({
//    TabNavigator: {
//        backgroundColor: '#ffffff'
//    },
//    iconStyle: {
//        width: 26,
//        height: 26,
//    },
//    textStyle: {
//        color: '#515151',
//    },
//    selectedTextStyle: {
//        color: '#389e7f',
//    }
//});
//export default AppMain;

/**
 * 商城主框架界面
 */

 'use strict';
 import React, {Component} from 'react';
 import {
 StyleSheet,
 View,
 Text,
 Image,
 } from 'react-native';
 import TabNavigator from 'react-native-tab-navigator';
 
 
 import Home from './Home';
 import Invest from './Invest';
 import Find from './Find';
 import Center from './UserCenter';
 
 
 class AppMain extends Component {
 constructor(props) {
 super(props);
 this.state = {
 selectedTab: 'home'
 };
 }
 
 render() {
 return (
 <TabNavigator tabBarStyle={styles.TabNavigator}>
 <TabNavigator.Item
 title="主页"
 selected={this.state.selectedTab === 'home'}
 selectedTitleStyle={styles.selectedTextStyle}
 titleStyle={styles.textStyle}
 renderIcon={() => <Image source={require("../imgs/icon/img_5.png")} style={styles.iconStyle}/>}
 renderSelectedIcon={() => <Image source={require("../imgs/icon/img_8.png")}
 style={styles.iconStyle}/>}
 onPress={() => this.setState({selectedTab: 'home'})}>
 <Home {...this.props}/>
 </TabNavigator.Item>
 <TabNavigator.Item
 title="附近"
 selected={this.state.selectedTab === 'invest'}
 selectedTitleStyle={styles.selectedTextStyle}
 titleStyle={styles.textStyle}
 renderIcon={() => <Image source={require("../imgs/icon/img_6.png")} style={styles.iconStyle}/>}
 renderSelectedIcon={() => <Image source={require("../imgs/icon/img_9.png")}
 style={styles.iconStyle}/>}
 onPress={() => this.setState({selectedTab: 'invest'})}>
 <Invest {...this.props}/>
 </TabNavigator.Item>
 <TabNavigator.Item
 title="我的"
 selected={this.state.selectedTab === 'center'}
 selectedTitleStyle={styles.selectedTextStyle}
 titleStyle={styles.textStyle}
 renderIcon={() => <Image source={require("../imgs/icon/img_7.png")} style={styles.iconStyle}/>}
 renderSelectedIcon={() => <Image source={require("../imgs/icon/img_10.png")}
 style={styles.iconStyle}/>}
 onPress={() => this.setState({selectedTab: 'center'})}>
 <Center {...this.props}/>
 </TabNavigator.Item>
 </TabNavigator>
 );
 }
 }
 const styles = StyleSheet.create({
 TabNavigator: {
 backgroundColor: '#ffffff'
 },
 iconStyle: {
 width: 26,
 height: 26,
 },
 textStyle: {
 color: '#515151',
 },
 selectedTextStyle: {
 color: '#389e7f',
 }
 });
 export default AppMain;
 
