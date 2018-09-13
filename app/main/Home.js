/**
 * 商城主页
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Alert,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    RefreshControl,
    ScrollView,
    InteractionManager,
    TextInput,
    FlatList,
    StatusBar
} from 'react-native';
import { Icon } from 'antd-mobile-rn';
import Swiper from 'react-native-swiper';
import ShortLine from '../component/ShortLine';
import HomePageItem from '../component/HomePageItem';
import InvestmentSingle from './InvestmentSingle';
import {connect} from 'react-redux';
import {bannerfetch,activelist,getbpccs} from '../actions/banner';
const {height, width} = Dimensions.get('window');
const item_width = (width - 10) / 2;

const BANNER_IMGS = [require('../imgs/home/1.jpg'), require('../imgs/home/2.png'), require('../imgs/home/3.jpg'), require('../imgs/home/4.png')];
const CENTER_IMGS = [
    require('../imgs/icon/img_1.png'),
    require('../imgs/icon/img_2.png'),
    require('../imgs/icon/img_3.png'),
    require('../imgs/home/img_3.png'),
    require('../imgs/home/img_5.png'),
    require('../imgs/home/img_4.png')
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.onPressItem = this
            .onPressItem
            .bind(this);
        this.centerItemAction = this
            .centerItemAction
            .bind(this);
        this.onScrollDown = this
            .onScrollDown
            .bind(this);
        this.state = {};

    }
    componentWillMount() {
        return this.onScrollDown()
    }

    //下拉刷新
    onScrollDown() {
        const {dispatch} = this.props;
        dispatch(bannerfetch());
        dispatch(activelist());
        dispatch(getbpccs());
    }
    
    centerItemAction(position) {
        if (position === 0) {
            Alert.alert('提示', '新手指引')
        } else if (position === 1) {
            Alert.alert('提示', '平台数据')
        } else if (position === 2) {
            Alert.alert('提示', '邀请有礼')
        } else if (position === 3) {
            Alert.alert('提示', '敬请期待')
        }
    }
 
    
    onPressItem(order) {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({component: InvestmentSingle, name: 'InvestmentSingle', order});
        });
    }
    bannerlisteach=()=>{
        let htmls = [];
        if( this.props.Banner.bannerlist != undefined ){
            this.props.Banner.bannerlist.forEach(function(x,y){
             htmls.push(<View style={styles.slide} key={y}>
                        <Image style={styles.slideImage} source={{uri:x.imgUrl}} resizeMode="stretch"/>
                        </View>
                        );
             })
        }
        return htmls;
    }
    _flatlist = (item) => {
        console.log(item)
        return (
                <View key={item.index} style={{
                height:100,
                flexDirection: 'column',
                width:(width/4),
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Image style={styles.flist_img} source={{uri:item.item.logo}} resizeMode="stretch" />
                <Text style={styles.flist_text}>{item.item.title}</Text>
            </View>
        )
    }
    _flatlist1 = (item) => {
//        console.log(item);
        return (
                <View style={{
                height:100,
                flexDirection: 'column',
                width:(width/4),
                justifyContent:'center',
                alignItems:'center'
                }}>
                <Image style={styles.flist_img} source={{uri:item.item.logo}} resizeMode="stretch" />
                <Text style={styles.flist_text}>{item.item.remark}</Text>
                </View>
                )
    }
    render() {
        const {Banner:{isLoading,bannerlist,activelist,activeloading}} = this.props;
        return (
                
            <View
                style={{
                backgroundColor: '#fff',
            }}>
                <StatusBar
                barStyle='dark-content'
                backgroundColor='#000000'
                style={{height: 26}}
                />
                <View style={{
                marginTop:26,
                marginLeft:12,
                marginRight:12,
                flexDirection: 'row',
                justifyContent:'flex-start',
                alignItems:'flex-start',
                width:width
                }}>
                    <View style={{
                    marginTop:7,
                    width:10,
                    flex:0.5,
                    height:28,
                    flexDirection: 'row',
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    }}>
                        <Text>杭州</Text>
                        <Image style={styles.position_icon} source={CENTER_IMGS[0]} resizeMode="stretch" />
                    </View>
                    <View style={{
                    width:300,
                    height:28,
                    backgroundColor:'#F2F2F2',
                    borderRadius:14,
                    flex:3.3,
                    flexDirection: 'row',
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                marginLeft:9
                    }}>
                        <Image style={{
                        width:12,
                        height:12,
                        marginTop:8,
                        marginLeft:11
                        }} source={CENTER_IMGS[1]} resizeMode="stretch" />
                        <TextInput
                            style={{
                            height: 22,
                            flex:0.8,
                            marginLeft:7,
                            marginTop:3
                            }}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder='请输入商家/商品名称'
                        />
                    </View>
                    <View style={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    }}>
                    <Image style={{
                    width:22,
                    height:18,
                    marginLeft:20
                    }} source={CENTER_IMGS[2]} resizeMode="stretch" />
                    <Text style={{
                    fontSize:9,
                    textAlign:'center',
                    width:65,
                    paddingTop:2
                    }}>在线客服</Text>
                    </View>
                
                </View>
                <ScrollView
                style={{
                }}
                refreshControl={
                <RefreshControl
                refreshing={isLoading}
                onRefresh={() => this.onScrollDown() }
                title="正在加载中……"
                color="#ccc"/>
                }
                showsVerticalScrollIndicator={false}>
                    <Swiper
                        key={bannerlist.length}
                        height={144}
                        autoplay={true}
                        autoplayTimeout={3}
                        bounces={true}
                        width={width}
                        loop={true}
                style={{
                marginLeft:12
                }}
                        dot={< View style = {
                        styles.customDot
                    } />}
                        activeDot={< View style = {
                        styles.customActiveDot
                    } />}
                        paginationStyle={{
                        bottom: 10
                    }}>
                {this.bannerlisteach()}
                    </Swiper>
                    <View style={{
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    backgroundColor:'#F2F2F2',
                width:width
                    }}>
                        <FlatList
                            horizontal={true}
                            refreshing={activeloading}
                            data={activelist}
                            renderItem={this._flatlist}
                        >
                        </FlatList>
                    </View>
                
                    <View
                        style={{
                        paddingTop: 10,
                        height: 60,
                        width:width,
                        borderTopLeftRadius:4,
                        borderTopRightRadius:4,
                        flexDirection:'row',
                        backgroundColor:'#fff',
                        justifyContent:'center',
                    }}>
                        <View style={{
                            width:width*.9,
                            alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'row',
                            backgroundColor:'#4FA2FF',
                            borderRadius:4,
                            height:58
                        }}>
                            <View
                            style={{
                            width: item_width,
                            height:58,
                            alignItems: 'center',
                            justifyContent:'center'
                            }}>
                            <Text
                            style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color:'#fff',
                            }}>123,456,789</Text>
                            <Text style={{
                                fontSize:9,
                                marginTop:2,
                                color:'#fff'
                            }}>(BPCC)</Text>
                            <Text
                            style={{
                            fontSize: 11,
                            color: '#fff',
                            marginTop: 3
                            }}>今日获得</Text>
                            </View>
                            <Image
                            source={require('../imgs/home/ic_home_shu.png')}
                            style={{
                            height: 40
                            }}/>
                            <View
                            style={{
                            width: item_width,
                            alignItems: 'center'
                            }}>
                            <Text
                            style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color:'#fff'
                            }}>123,456,789</Text>
                            <Text style={{
                                fontSize:9,
                                marginTop:2,
                                color:'#fff'
                            }}>(BPCC)</Text>
                            <Text
                            style={{
                            fontSize: 11,
                            color: '#fff',
                            marginTop: 3
                            }}>持有总量</Text>
                            </View>
                            <View style={{
                                width: 10,
                                alignItems: 'center',
                                position:'absolute',
                                right:4
                                }}>
                                <Text style={{color:'#fff',fontSize:9}}>></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 8,
                    }}>
                        <View
                            style={{
                            flexWrap: 'wrap',
                            backgroundColor: 'white',
                            padding: 15
                        }}>
                            <View
                                style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent:'space-between',
                                flexDirection: 'row'
                            }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <View style={{width:2,height:12,backgroundColor:'#4FA2FF'}}></View>
                                    <Text
                                    style={{
                                    fontSize: 17,
                                    paddingLeft:10,
                                    }}>惠享生活</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text
                                    style={{
                                    fontSize: 12,
                                    color:'#C6C6C6',
                                    marginRight:5
                                    }}>更多</Text>
                                    <Image source={require('../imgs/icon/img_4.png')}  />
                                </View>
                            </View>
                        </View>
                    </View>
                <View style={{width:width,flexDirection:'column'}}>
                        <FlatList
                        horizontal={true}
                        refreshing={activeloading}
                        data={activelist}
                        renderItem={this._flatlist1}
                        >
                        </FlatList>
                    </View>
                    <TouchableWithoutFeedback>
                        <View
                            style={{
                            alignItems: 'center',
                            marginTop: 20,
                            marginBottom: 10
                        }}>
                            <Text
                                style={{
                                fontSize: 14,
                                color: '#389e7f'
                            }}>了解更多</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
     position_icon:{
         width:11,
         height:8,
         marginTop:3,
         marginLeft:3
     },
    center_item_wrap: {
        marginTop: 15,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        width: 190,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#389e7f'
    },
    center_item_tv: {
        fontSize: 18,
        color: '#ffffff'
    },
    page: {
        flex: 1,
        height: 200,
        width:width
    },
    slideImage: {
        width: 391,
        height: 144,
        borderRadius:8
    },
    customDot: {
        backgroundColor: '#ccc',
        height: 6,
        width: 6,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 10,
        borderRadius: 3
    },

    customActiveDot: {
        backgroundColor: 'white',
        height: 6,
        width: 6,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 10,
        borderRadius: 3
    },
     flist_img:{
         width:30,
         height:30,
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center'
     },
     flist_text:{
         textAlign:'center',
         color:'#313131',
         marginTop:5,
         fontSize:10,
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center'
     }
});
export default connect((state) => {
    const {Banner} = state;
    return {Banner}
})(Home);
