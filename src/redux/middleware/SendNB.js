import { loading, delArr } from '../actionType';


export default function SendNB (TOKEN, id, lesson, day, month, year, group) {
    let formdata = new FormData();
    for (var i = 0; i < id.length; i++) {
        formdata.append("students[]", id[i])
      }
    formdata.append("subject_id", '1')
    formdata.append("pass", '1')
    formdata.append("lesson_part", lesson)
    formdata.append("day", day)
    formdata.append("month", month)
    formdata.append("year", year)
    formdata.append("group", group)
return dispatch => {
 fetch( 'https://connect-gubkin.uz/api/worker/umo/add/pass', {
  method: 'POST',
  headers:{
    token: TOKEN
  },
      body: formdata 
})
.then((response) => response.text())
.then((text) => {
console.log(text)
if(json.message == "Данные пропусков перезаписаны"){
  alert(json.message)
    dispatch({type: delArr, payload: []})
    dispatch({type: loading, payload: false})
}else{
    alert('Непредвиденная ошибка')
    dispatch({type: loading, payload: false})
}
}
)
}
}