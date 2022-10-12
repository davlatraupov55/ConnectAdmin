import React, {useEffect, useState} from "react";
import {
    ScrollView,
    Text,
    SafeAreaView,
    Dimensions,
    View,
    TouchableOpacity
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import GetStudents from "../redux/middleware/GetStudents";
import { useNavigation } from "@react-navigation/native";
import shortid from "shortid";
import LottieView from 'lottie-react-native';
import animation from '../assets';
import StudentComponent from "../Components/StudentComponent";
import StudentsPOSTButton from "../Components/StudentsPOSTButton";
import NetInfo from "@react-native-community/netinfo";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const StudentsScreen = (props) => {

	const TOKEN = props.route.params.token
	const id = props.route.params.id
     const group = props.route.params.name
	const dispatch = useDispatch();
	const isLoaded = useSelector(state => state.isLoaded)
	const student = useSelector(state => state.students)
	useEffect(()=>{

        NetInfo.fetch().then(state => {
            if(state.isInternetReachable === false){
              alert('Отсутсвует подключение к интернету')
            }else{
		dispatch(GetStudents(TOKEN, id));
            }
        });
	}, [dispatch])

var arr = [];

for(let i = 0; i <= student.length-1; i++){
   arr[i] = student[i].id
}

    return(
<SafeAreaView style={{flex:1, alignItems: 'center', backgroundColor: 'white'}} >

<View style={{flexDirection: 'row'}} >
    <Text style={{fontFamily: 'proximanova_regular', fontSize: width/20, marginTop: height/50, marginBottom: height/40, marginRight: width/40, color: '#585858'}} >Выберите студента</Text>
    <Text style={{fontFamily: 'proximanova_regular', fontSize: width/20, marginTop: height/50, marginBottom: height/40, marginLeft: width/40, color: '#585858'}} >{props.route.params.name}</Text>
</View>  

    <ScrollView vertical showsVerticalScrollIndicator={false} >

	<View style={{height: width/10, width: width/8, marginTop: height/20, alignItems: 'center', justifyContent: 'center', display: isLoaded ? 'flex' : 'none'}} >
<LottieView style={{display: 'flex', position: 'absolute', height: '200%', width: '200%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.preloader}
        />
        </View>

    <View style={{flexDirection: 'column', display: isLoaded ? 'none' : 'flex'}} >

	{ student.map(item =>(
<StudentComponent data={item} Count={student.length} ID={arr} Group={group}  key={shortid.generate()}  />
	))}

    </View>
    </ScrollView>

<View style={{height: height/8.5, width: width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}} >

{/* <View style={{height: height/10, width: height/9, backgroundColor: 'red', borderRadius: 10, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor:'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >
<Text style={{fontFamily: 'proximanova_regular', fontSize: width/16, fontWeight: 'bold'}} >{count}</Text>
</View> */}


<StudentsPOSTButton TOKEN={TOKEN} Group={group} />

{/* <View style={{height: height/10, width: height/9, backgroundColor: 'red', borderRadius: 10, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor:'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >
<Text style={{fontFamily: 'proximanova_regular', fontSize: width/16, fontWeight: 'bold'}} >{percentage}%</Text>
</View> */}

</View>

</SafeAreaView>
    )}


export default StudentsScreen;