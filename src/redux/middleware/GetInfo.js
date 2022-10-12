import { MMKV } from 'react-native-mmkv';
import { loading, students, getInfo } from '../actionType';

export const storage = new MMKV()

export default function GetInfo (TOKEN) {
return dispatch => {
dispatch({type: loading, payload: true})
 fetch( 'https://connect-gubkin.uz/api/worker/account/information', {
  method: 'POST',
  headers:{
 token: TOKEN
  }
})
.then((response) => response.json())
.then((json) => {
    console.log(json)
if(json){
    console.log(json)
    dispatch({type: getInfo, payload: json})
    dispatch({type: loading, payload: false})

}else{
    alert('Что-то пошло не так')
    console.log(json)
    dispatch({type: loading, payload: false})
}
}
)
}
}