import { View, Image, TextInput, TouchableOpacity, Text, Button, StyleSheet ,SafeAreaView} from 'react-native';
import React ,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios'; 
import { loginSuccess } from "../../store/reducer/userSlice"; 
import { useNavigation } from '@react-navigation/native';


import { useDispatch } from 'react-redux';



const Login = () => {
  

  const dispatch = useDispatch(); // Initialize useDispatch hook
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Use useNavigation hook to get the navigation object



  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.0.111:8001/api/login", {
        phone: phoneNumber,
        password: password
      },
      );
      //consolel.log(response);
      const { token, user } = response.data;
      // console.log(token);
       console.log(user);
       console.log(token);

      dispatch(loginSuccess({ user, token }));


    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  
  return (
    <SafeAreaView style={styles.container}>
      <View >
      <Image source={require('../../../assets/mic/vertical.png')} style={styles.image} />
      <View style={styles.inputContainer}>
        <View style={styles.inputphone}>
        <Text style={styles.Mtext} >تسجيل الدخول</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
        </View>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.passwordInput}
            secureTextEntry={!passwordVisible} 
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Entypo name={passwordVisible ? 'eye' : 'eye-with-line'} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.forgotPasswordText}>نسيت كلمة المرور؟</Text>
        </View>
        
        <TouchableOpacity onPress={handleLogin}  style={styles.login}>
          <Text style={styles.loginTxt}>تسجيل الدخول</Text>
          </TouchableOpacity>
        <Text style={styles.signUpText}>ليس لديك حساب؟ <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={styles.txtpart}>انشئ حسابك</Text></TouchableOpacity>
        </Text>
    </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC'
  },
  image: {
    width: 280,
    height: 148,
    marginTop: 96,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems:'center',
    flexShrink:0,

  },
  inputContainer: {
    marginBottom:39,
    marginLeft: 42,
    marginRight:42,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  Mtext:{
    textAlign: 'center',
    fontFamily: 'Cairo700',
    fontSize: 32,
    fontStyle: 'normal',
    lineHeight: 40,
    color: '#00CD5E',
    marginBottom:39,

  },
  input: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width:280,
    borderWidth: 1,
    borderColor: '#00CD5E',

    backgroundColor: '#F5F9FE',
    borderRadius: 14,
    paddingVertical: 18 ,
    paddingHorizontal: 24,
    gap: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#F5F9FE',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#00CD5E',
    height: 60,
    width:280,
    gap: 16,
    paddingVertical: 18 ,
    paddingHorizontal: 24,

    


  },
  passwordInput: {
    flex: 1,
    height: 60,
    
  },
  forgotPasswordText: {
    marginLeft: 10,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    textAlign: 'right',
    lineHeight: 22,
    textDecorationLine: 'none',
    color: '#00CD5E',
    fontWeight: '400',
  },
  signUpText: {
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 22,
    color: '#3B4054',
    marginRight:51,
    fontWeight: '400',

  },
  txtpart:{
    color: '#00CD5E',
    fontWeight: '400',

    
  },
  login:{
    paddingVertical:18,
    paddingHorizontal: 24,
    width: 280,
    height:60,
    borderRadius:14,
    backgroundColor: '#00CD5E',
    marginBottom:39,
    marginLeft: 42,
    marginRight:42,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink:0,
  },
  loginTxt:{
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#FFF',
    fontWeight: '400',

  },
})