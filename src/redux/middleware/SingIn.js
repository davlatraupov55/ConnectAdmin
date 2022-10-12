import { MMKV } from 'react-native-mmkv';
import { auth, loading } from '../actionType';

export const storage = new MMKV()

export default function Login (Login, Password, navigation) {
let formdata = new FormData();
formdata.append("login", Login)
formdata.append("password", Password)
return dispatch => {
 fetch( 'https://connect-gubkin.uz/api/worker/login', {
  method: 'POST',
  header:{
    'Accept': 'application/json',
    'Content-type': 'application/json'
  },
      body: formdata     
})
.then((response) => response.json())
.then((json) => {
if(json.token_api){
    storage.set('token', json.token_api)
    storage.set('user', 0)
    storage.set('login', Login)
    storage.set('password', Password)
    dispatch({type: auth, payload: json.token_api})
    dispatch({type: loading, payload: false})
    navigation.navigate('MainScreen')

} else if (json.message === 'Неверно указан логин или пароль'){
    alert(json.message)
    dispatch({type: loading, payload: false})
}else{
    console.log(json)
    dispatch({type: loading, payload: false})
}
}
)
}
}