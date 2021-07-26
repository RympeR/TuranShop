import React, {useState} from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

type TouchableFilterTextType = {
    text: string,
}
const TouchableFilterText = (props:TouchableFilterTextType) =>{
  const [pressed, setPressed] = useState(false);

  const handleClick = () => { 
    setPressed(!pressed);
  }

  return (
      <TouchableHighlight   
        onPress={handleClick}
        activeOpacity={0}
        underlayColor={'#EFEEF2'}
        style={[styles.ml20, styles.filterCategory]}>
          <>          
          {pressed &&
          <LinearGradient style={styles.gradient} colors={['#0C7952', '#289A71']} >
            <Text style={[styles.smallText, styles.mt2, styles.ml10, styles.pr8, {color: "#FFFFFF"}]}>{props.text}</Text>
          </LinearGradient>}
          {!pressed && 
            <Text style={[styles.smallText, styles.mt2, styles.ml10, styles.pr8]}>{props.text}</Text>
          }
          </>
      </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    ml20:{
        marginLeft: 20,
    },
    ml10:{
        marginLeft: 10,
    },
    mt2:{
      marginTop: 2
    },
    pr8:{
      paddingRight: 8
    },
    smallText:{
      fontStyle: "normal",
      fontWeight: "600",
      // fontFamily: 'Montserrat',
      color: "#000000",
      fontSize: 14,
    },
    filterCategory:{
      
    },
    gradient:{
      minWidth: 25,
      height: 25,
      borderRadius: 15,
    }
})

export { TouchableFilterText };