import React, {useEffect, useState} from "react";
import {
    Text,
    Dimensions,
    View,
    TouchableOpacity
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import { useNavigation } from "@react-navigation/native";
import SendNB from "../redux/middleware/SendNB"
import moment from "moment"
import {delArr } from "../redux/actionType";
import NetInfo from "@react-native-community/netinfo";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const StudentsPOSTButton = (props) => {
    const group = props.Group
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const TOKEN = props.TOKEN;
    const day  = moment().format('D');
    const month  = moment().format('MM');
    const time  = moment().format('Hmm');
    const year  = moment().format('yyyy');
    const [lesson, setLesson] = useState(0);
    useEffect(()=>{

    if(time >= 830 && time < 1000){
        setLesson(1)
         }else if(time >= 1000 && time < 1220){
          setLesson(2)
         }else if(time >= 1220 && time <1400 ){
          setLesson(3)
         
         }else if(time >= 1400 && time < 1530){
          setLesson(4)
         }else if(time > 1530){
          setLesson(5)
         }else{
          alert('Вне пар отчёт о посещаемости можете изменить в админ. приложении')
         } 
        }, [])

var id = useSelector(state => state.nbID)

function SEND () {
    NetInfo.fetch().then(state => {
        if(state.isInternetReachable === false){
          alert('Отсутсвует подключение к интернету')
        }else{
dispatch(SendNB(TOKEN, id, lesson, day, month, year, group ));
dispatch({type: delArr, payload: []})
navigation.navigate('MainScreen');
        }
    });
} 


    return(

<TouchableOpacity onPress={() => SEND()} > 
<View style={{height: height/14, justifyContent: 'center', alignItems:'center', width: width/1.5, borderRadius: height/60, backgroundColor: '#0277FA', marginLeft: width/20, marginRight: width/20}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >Отправить</Text>
</View>
</TouchableOpacity>
    )}


export default StudentsPOSTButton;