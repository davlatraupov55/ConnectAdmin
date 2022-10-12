import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Text,
    Dimensions,
    View,
    TouchableOpacity
} from "react-native";
import { MMKV } from 'react-native-mmkv'; 

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export const storage = new MMKV()

const GroupComponent = (props) => {
    const navigation = useNavigation();
    const item = props.data


    if (item.title === 'group' || item.title.length == 0){
        return(
            <View style={{height: height/15, width: width/1.5, margin: width/50, marginTop: height/50, marginBottom: height/40,  borderRadius: 5, backgroundColor: 'white', justifyContent:'center', alignItems: 'center'}} >
            
            <Text style={{fontFamily: 'proximanova_regular', fontSize: width/22, opacity: 0.5, color: '#585858'}} >Выберете курс</Text>
            
            </View> 
        )
    }
    else{
    return(
<TouchableOpacity onPress={() => navigation.navigate('StudentsScreen', {id: item.id, name: item.title, token: props.token})}>
<View style={{height: height/15, width: width/1.5, margin: width/50, marginTop: height/50, marginBottom: height/40, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor: 'white', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >

<Text style={{fontFamily: 'proximanova_regular', fontSize: width/17, color: '#585858'}} >{item.title}</Text>

</View>
</TouchableOpacity>
    )
}
}

export default GroupComponent;