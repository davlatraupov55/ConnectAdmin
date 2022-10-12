import React, {useState, useEffect} from "react";
import {
    ScrollView,
    Text,
    SafeAreaView,
    Dimensions,
    View,
    TouchableOpacity,
    Image
} from "react-native";
import { MMKV } from 'react-native-mmkv'; 
import { useDispatch, useSelector } from "react-redux";
import GetGroups from "../redux/middleware/GetGroups";
import LottieView from 'lottie-react-native';
import animation from '../assets';
import shortid from 'shortid';
import GroupComponent from "../Components/GroupComponents";
import GetInfo from "../redux/middleware/GetInfo";
import NetInfo from "@react-native-community/netinfo";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export const storage = new MMKV()

const MainScreen = () => {
 
const dispatch = useDispatch();

 const [number, setNumber] = useState(0)

 const TOKEN2 = useSelector(state => state.token)
const TOKEN1 = storage.getString('token');
const TOKEN = TOKEN1 ? TOKEN1 : TOKEN2;


useEffect(()=>{
    NetInfo.fetch().then(state => {
            if(state.isInternetReachable === false){
              alert('Отсутсвует подключение к интернету')
            }else{
    dispatch(GetInfo(TOKEN))
            }
        });
}, [dispatch])


  const Course = (param) => {
    NetInfo.fetch().then(state => {
            if(state.isInternetReachable === false){
              alert('Отсутсвует подключение к интернету')
            }else{
setNumber(param)
dispatch(GetGroups(TOKEN, param))
            }
        });
  }
  const Groups = useSelector(state => state.groups)
  const Info = useSelector(state => state.info)
  const isLoaded = useSelector(state => state.isLoaded)
 const groups =  Groups.length === 0 ? [{"course": "course", "id": 0, "title": "group"}] :  Groups
    return(
<SafeAreaView style={{flex:1, alignItems: 'center', backgroundColor: 'white'}} >

    <View style={{height: height/10, width: width, alignItems: 'center', flexDirection: 'row'}} >
<Image source={{uri: Info.img}} style={{height: height/18, width: height/18, borderRadius: 10, marginLeft: width/25}} />
<Text style={{fontFamily: 'proximanova_regular', fontSize: width/22, marginLeft: width/30, color: '#585858' }} >{Info.name} {Info.surname}</Text>
    </View>

    <Text style={{fontFamily: 'proximanova_regular', fontSize: width/20, marginTop: height/50, color: '#585858'}} >Выберите курс</Text>

    <View style={{flexDirection: 'row'}} >

<TouchableOpacity onPress={()=>Course(1)} >
<View style={{height: height/15, width: height/12, margin: width/50, marginTop: height/40, marginBottom: height/40, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor: number == 1 ? '#C9E5F9' : 'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >

<Text style={{fontFamily: 'proximanova_regular', fontSize: width/15, fontWeight: 'bold',  color: '#585858'}} >1</Text>

</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>Course(2)} >
<View style={{height: height/15, width: height/12, margin: width/50, marginTop: height/40, marginBottom: height/40, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor: number == 2 ? '#C9E5F9' : 'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >

<Text style={{fontFamily: 'proximanova_regular', fontSize: width/15, fontWeight: 'bold',  color: '#585858'}} >2</Text>

</View>
</TouchableOpacity>



<TouchableOpacity onPress={()=>Course(3)} >
<View style={{height: height/15, width: height/12, margin: width/50, marginTop: height/40, marginBottom: height/40, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor: number == 3 ? '#C9E5F9' : 'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >

<Text style={{fontFamily: 'proximanova_regular', fontSize: width/15, fontWeight: 'bold', color: '#585858'}} >3</Text>

</View>
</TouchableOpacity>



<TouchableOpacity onPress={()=>Course(4)} >
<View style={{height: height/15, width: height/12, margin: width/50, marginTop: height/40, marginBottom: height/40, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor: number == 4 ? '#C9E5F9' : 'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >

<Text style={{fontFamily: 'proximanova_regular', fontSize: width/15, fontWeight: 'bold', color: '#585858'}} >4</Text>

</View>
</TouchableOpacity>



<TouchableOpacity onPress={()=>Course(5)} >
<View style={{height: height/15, width: height/12, margin: width/50, marginTop: height/40, marginBottom: height/40, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor: number == 5 ? '#C9E5F9' : 'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >

<Text style={{fontFamily: 'proximanova_regular', fontSize: width/15, fontWeight: 'bold', color: '#585858'}} >5</Text>

</View>
</TouchableOpacity>


    </View>


    <Text style={{fontFamily: 'proximanova_regular', fontSize: width/20, marginTop: height/50, marginBottom: height/40, color: '#585858'}} >Выберите группу</Text>
  
    <ScrollView vertical showsVerticalScrollIndicator={false} >

	<View style={{height: width/10, width: width/8, marginTop: height/20, alignItems: 'center', justifyContent: 'center', display: isLoaded ? 'flex' : 'none'}} >
<LottieView style={{display: 'flex', position: 'absolute', height: '200%', width: '200%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.preloader}
        />
        </View>

    <View style={{flexDirection: 'column', display: isLoaded ? 'none' : 'flex'}} >
	{ groups.map(item =>(

<GroupComponent data={item} token={TOKEN} key={shortid.generate()} />

	))}

    </View>
    </ScrollView>

</SafeAreaView>
    )}

export default MainScreen;