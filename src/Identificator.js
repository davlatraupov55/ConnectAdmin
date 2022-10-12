import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

const a  =  storage.getNumber('user');


let RoutName

if (a === undefined){
    RoutName = 'AuthScreen';
// }else if (a === 1){
//      RoutName = 'PinScreen';
} else if (a === 0) {
     RoutName = 'MainScreen';
}

export default RoutName;