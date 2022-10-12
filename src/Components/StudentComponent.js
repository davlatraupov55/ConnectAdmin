import React, {useState} from "react";
import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {nbIDs, nbIDsDEL} from "../redux/actionType"

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const StudentComponent = (props) => {
   const item = props.data
   const group = props.Group
	const dispatch = useDispatch();
    const ID = props.ID
	const [Color, setColor] = useState('white')
    
	const Active = (id) =>{
        for(let i = 0; i <= ID.length-1; i++){
    if(Color === 'white' &  id == ID[i] ){
        setColor('#F5A4A4');
        dispatch({type: nbIDs, payload: id})
    }else if (Color === '#F5A4A4'){
        setColor('white')
        dispatch({type: nbIDsDEL, payload: id})
    }
        }
    }

    return(
<TouchableOpacity onPress={()=>Active(item.id)}>
<View style={{height: height/12.5, width: width/1.1, margin: width/50, marginTop: height/50, marginBottom: height/40, borderWidth: 2, borderColor: '#D4D4D4',  borderRadius: 5, backgroundColor: Color, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 4, justifyContent:'center', alignItems: 'center'}} >

<Text style={{fontFamily: 'proximanova_regular', fontSize: width/22, textAlign: 'center', color: '#585858'}} >{item.name} {item.surname} {item.patronymic}</Text>

</View>
</TouchableOpacity>
    )}


export default StudentComponent;