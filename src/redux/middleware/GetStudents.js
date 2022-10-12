import { MMKV } from 'react-native-mmkv';
import { loading, students } from '../actionType';

export const storage = new MMKV()

export default function GetStudents (TOKEN, id) {
return dispatch => {
dispatch({type: loading, payload: true})
 fetch( 'https://connect-gubkin.uz/api/worker/umo/get/' + id + '/group', {
  method: 'GET',
  headers:{
 token: TOKEN
  }
})
.then((response) => response.json())
.then((json) => {
if(json){
    dispatch({type: students, payload: json})
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