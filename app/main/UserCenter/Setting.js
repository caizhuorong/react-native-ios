'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    InteractionManager,
    AlertIOS,
    
} from 'react-native';

import { NaviGoBack } from '../../common/CommonUtils';
import SettingItem from '../../component/SettingItem';
import ShortLine from '../../component/ShortLine';
import Login from './Login';
import { toastShort } from '../../common/ToastUtil';
 import MySorage from '../../common/storage';
const {height, width} = Dimensions.get('window');

class Setting extends Component {
  constructor(props) {
      super(props);
      this.state={
        
      };
      
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.itemButtonAction=this.itemButtonAction.bind(this);
  }
    
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
    clearstorage = () => {
        const {navigator} = this.props;
        MySorage._getStorage();
        MySorage._remove('user');
        
         console.log(MySorage._getStorage());
        InteractionManager.runAfterInteractions(() => {
        navigator.push({
               component: Login,
               name: 'Login'
           });
        });
//         global.storage = storage;
    }
  //按钮点击
  itemButtonAction(position){
      const {navigator} = this.props;
      if(position === 6){
          AlertIOS.alert(
          "提示",
          "是否确认清理缓存？",
          [
           {
           text: "取消",
           onPress: () => console.log("Cancel Pressed"),
           style: "cancel"
           },
           {
           text: "确认",
           onPress: password => console.log("OK Pressed, password: "),
           style: "destructive"
           }
           ],
          );
      }else if(position === 7){
          toastShort('该功能暂未开放');
      }
  }
  render() {
      console.log(this.state)
        return (
             <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{height: 60, backgroundColor: '#fff',flexDirection:'row',paddingTop:15}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                     style={{justifyContent:'center',alignItems:'center',height:48,width:48}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/icon/img_23.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'#000',alignSelf:'center'}}>设置</Text>
                    </View>
                <TouchableOpacity
                style={{justifyContent:'center',alignItems:'center',height:48,width:48}}>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'column',flex:1,marginTop:10}}>
                    <View style={{flex:1,justifyContent:'flex-start'}}>
                        <TouchableOpacity style={styles.item_layout}>
                            <SettingItem title="清理缓存" onPress={()=>{this.itemButtonAction(6)}}/>
                        </TouchableOpacity>
                        <ShortLine/>
                        <TouchableOpacity style={styles.item_layout}>
                            <SettingItem title="账户安全" onPress={()=>{this.itemButtonAction(7)}}/>
                        </TouchableOpacity>
                <ShortLine/>
                    </View>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:80}}>
                <TouchableOpacity style={{width:width*.9,height:43,backgroundColor:'#fff',borderWidth:1,borderColor:'#F2F2F2',borderRadius:7}} onPress={this.clearstorage}>
                        <Text style={{textAlign:'center',color:'#FF3838',lineHeight:43}}>退出登陆</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
             </View>
        );
    }
}
const styles=StyleSheet.create({
    item_layout:{
        backgroundColor:'white',
        height:48,
        justifyContent:'center'
    }
});
export default Setting;
//<SettingItem title="清理缓存" onPress={()=>{this.itemButtonAction(2)}}/>
//<ShortLine/>
//<SettingItem title="账户安全" onPress={()=>{this.itemButtonAction(3)}}/>
//<ShortLine/>
//<SettingItem title="报告问题" onPress={()=>{this.itemButtonAction(4)}}/>
//<ShortLine/>
//<SettingItem title="评分" onPress={()=>{this.itemButtonAction(5)}}/>
//<ShortLine/>
//<SettingItem title="隐私策略" onPress={()=>{this.itemButtonAction(6)}}/>
//<ShortLine/>
//<SettingItem title="条款" onPress={()=>{this.itemButtonAction(7)}}/>
//<ShortLine/>
//<SettingItem title="关于我们" onPress={()=>{this.itemButtonAction(8)}}/>
