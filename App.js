import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {

  const [userInfo,setUserInfo]=useState({
    email:"",
    password:""
  })

  const handleChange=(value,field)=>{
    setUserInfo({...userInfo,[field]:value})
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={{fontSize:20, color:"white"}}>
            Bienvenid@
          </Text>

          <TextInput style={styles.input} placeholder="Email" keyboardType='email-address' autoCapitalize="none" autoComplete="off" onChangeText={(value)=>handleChange(value,"email")}/>

          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} autoCapitalize="none" autoComplete="off" onChangeText={(value)=>handleChange(value,"password")}/>

          <View>
            <Button title="Enviar" color={"#5e503f"} onPress={()=>console.log(userInfo)}/>
          </View>
        </View>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c6ac8f"
  },

  inner:{
    padding:24,
    flex:1,
    justifyContent: "space-around",
  },

  input:{
    borderBottomColor:"#a98467",
    borderBottomWidth: 2,
    margin: 16,
    padding:8,
    color: "#fff"
  }
});