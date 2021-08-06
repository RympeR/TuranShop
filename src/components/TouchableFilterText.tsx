import React, {useState} from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from '../styles/style'
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

export { TouchableFilterText };