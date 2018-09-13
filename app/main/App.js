// //根据页面
'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    StatusBar,
    View,
    Text,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
 import Splash from './Ready';
import AppMain from './AppMain';
 import MySorage from '../common/storage';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        
    }
    renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route} {...route.passProps}/>
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }
    
    render() {

        return (
            <View style={{flex: 1}}>
                <Navigator
                ref='navigator'
                style={{flex: 1}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                initialRoute={{
                component: AppMain,
                name: 'AppMain'
                }}
                />
            </View>
        );
    }
}
/*

*/
/*

*/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */




