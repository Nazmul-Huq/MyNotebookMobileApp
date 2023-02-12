import React from "react";
import { View, Text, StyleSheet } from "react-native";

// make individual note and return it
const Note = (props) => {
    return(
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#20788E',
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      
    },
    itemLeft: { //put the item on left side
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
      color: '#fff'
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#e51247',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
export default Note;