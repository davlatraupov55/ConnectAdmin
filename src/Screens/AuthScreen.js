import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Dimensions,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import { Icon } from "@rneui/themed";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import LottieView from 'lottie-react-native';
import animation from '../assets';
import { useNavigation } from "@react-navigation/native";
import { MotiView } from 'moti';
import {useDispatch, useSelector} from "react-redux";
import Login from "../redux/middleware/SingIn";
import NetInfo from "@react-native-community/netinfo";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const AuthScreen = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();



    const Auth = () => {

      NetInfo.fetch().then(state => {
        if(state.isInternetReachable === false){
          alert('Отсутсвует подключение к интернету')
        }else{
          dispatch(Login(login, password, navigation))
        }
        
  
      });

    }

    const isLoaded = useSelector(state => state.isLoaded)
    return(


<SafeAreaView style={{flex:1, backgroundColor: 'white'}} >
<ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',}} style={{height: '100%', width: '100%'}}>


<MotiView
  from={{
    translateY: height/3.4,
  }}
  style={{position: 'relative'}}
  animate={{
    translateY: height/-50,
    height: height/20,
  }}
  transition={{
    type: 'timing',
    duration: 900,
    delay: 2500,
  }}
>

<View style={{flexDirection: 'row',}} >


<MotiView
  from={{
    translateY: 0,
    translateX: width/5,
    height: height/7,
    width: height/7,
    transform: [{ rotate: '0deg'}] 
  }}
  style={{position: 'relative'}}
  animate={{
    translateY: height/-13,
    translateX: width/15,
    transform: [{ rotate: '220deg'}],
    height: height/15,
    width: height/15,
    
  }}
  transition={{
    type: 'timing',
    duration: 900,
    delay: 1000,
  }}
>

<Image source={require('../img/bootsplash_logo_original.png')} style={{height: '100%', width: "100%", top: height/-19,}} />

</MotiView>


<MotiView
  from={{
    translateY: 0,
    top: height/-22,
    opacity: 0
  }}
  style={{position: 'relative'}}
  animate={{
    translateY: height/-11,
    top: height/15,
    opacity: 1
    
  }}
  transition={{
    type: 'timing',
    duration: 900,
    delay: 1000,
  }}
>

<Text style={{ fontSize: width/18, fontFamily: 'proximanova_regular', fontWeight: 'normal', color: '#585858'}} >onnect Admin</Text>
</MotiView>


</View>

</MotiView>




<MotiView
  from={{
    opacity: 0,
  }}
  style={{position: 'relative'}}
  animate={{
    opacity: 1,
    
  }}
  transition={{
    type: 'timing',
    duration: 900,
    delay: 2900,
  }}
>

    <View style={{position: 'relative', width: width, height: height/2.8, justifyContent: 'center', alignItems: 'center', marginBottom: height/40, paddingRight: width/20, marginTop: height/-25}} >
<LottieView style={{position: 'relative', width: '115%', height: '115%'}}
      autoPlay
      loop
      source={animation.lottieFiles.dot}
      />
      </View>


      </MotiView>


      <MotiView
  from={{
    opacity: 0,
    translateY: height/20
  }}
  style={{position: 'relative', justifyContent: 'center', alignItems: 'center'}}
  animate={{
    opacity: 1,
    translateY: 0
  }}
  transition={{
    type: 'timing',
    duration: 900,
    delay: 2900,
  }}
>

    <Text style={{fontSize: width/20, fontFamily: 'proximanova_regular',}} >Авторизация</Text>
    
    <View style={styles.LoginInput}>
<FloatingLabelInput
        label={'Введите логин'}
        value={login}
        onChangeText={value => {
            setLogin(value);
          }}
        containerStyles={{
            borderBottomWidth: 0.8,
            paddingHorizontal: 10,
            borderColor: 'black',
            borderRadius: 1,
          }}
          isPassword
          customHidePasswordComponent={<Icon
            size={width/20}
            name='key'
            marginTop={height/55}
            opacity={0.7}
            type='font-awesome'
            color='black'
          />}
          customShowPasswordComponent={<Icon
            size={width/20}
            name='key'
            marginTop={height/55}
            opacity={0.7}
            type='font-awesome'
            color='black'
          />}
          animationDuration={'100'}
          customLabelStyles={{
            colorFocused: 'gray',
            colorBlurred: 'gray',
            fontSizeFocused: width/36,
            fontSizeBlurred: width/22,
          }}
          labelStyles={{
           fontFamily: 'proximanova_regular',
           fontWeight: '600',
           paddingTop: height/50
          }}
          inputStyles={{
            color: 'gray',
            paddingTop: height/20,
            fontSize: width/22,
            fontFamily: "proximanova_regular"
          }}

      />

      
</View>
<View style={styles.LoginInput}>
<FloatingLabelInput
        label={'Введите пароль'}
        value={password}
        onChangeText={value => {
            setPassword(value);
          }}
        containerStyles={{
            borderBottomWidth: 0.8,
            paddingHorizontal: 10,
            borderColor: 'black',
            borderRadius: 1,
          }}
          isPassword
          customHidePasswordComponent={<Icon
            size={width/18}
            name='lock'
            marginTop={height/55}
            opacity={0.7}
            type='font-awesome'
            color='black'
          />}
          customShowPasswordComponent={<Icon
            size={width/18}
            name='lock'
            marginTop={height/55}
            opacity={0.7}
            type='font-awesome'
            color='black'
          />}
          animationDuration={'100'}
          customLabelStyles={{
            colorFocused: 'gray',
            colorBlurred: 'gray',
            fontSizeFocused: width/36,
            fontSizeBlurred: width/22,
          }}
          labelStyles={{
           fontFamily: 'proximanova_regular',
           fontWeight: '600',
           paddingTop: height/50
          }}
          inputStyles={{
            color: 'gray',
            paddingTop: height/20,
            fontSize: width/22,
            fontFamily: "proximanova_regular"
          }}

      />

      
</View>

<TouchableOpacity onPress={() => Auth() } > 
<View style={{height: height/14, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA', marginTop: height/20, marginBottom: height/-15}} >
<View style={{height: width/15, width: width/10, alignItems: 'center', justifyContent: 'center', display: isLoaded ? 'flex' : 'none'}} >
<LottieView style={{display: 'flex', position: 'absolute', height: '200%', width: '200%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.preloader}
        />
        </View>
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28, display: isLoaded ? 'none' : 'flex'}} >Войти</Text>
</View>
</TouchableOpacity>
</MotiView>
</ScrollView>
</SafeAreaView>
    )

}
var styles = StyleSheet.create({
    LoginInput: {
        height: height/10,
        width: width/1.15,
        fontSize: width/20,
        fontFamily: 'proximanova_regular',
        marginTop: height/30
    }
})


export default AuthScreen;
