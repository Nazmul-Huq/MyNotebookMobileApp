import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Note from './components/Note';


// learned from
// https://www.youtube.com/watch?v=0kL6nhutjQ8
// https://www.youtube.com/watch?v=00HFzh3w1B8

export default function App() {
  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNote = () => {
    console.log(note)
    Keyboard.dismiss();
    setNoteItems([...noteItems, note])
    setNote(null);
  }

  const removeNote = (index) => {
    let itemsCopy = [...noteItems];
    itemsCopy.splice(index, 1);
    setNoteItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

      <View style={styles.notesWrapper}>
          <View style={styles.title}>
            <Text style={styles.sectionTitle}>My Notebook</Text>
          </View>
        
        <View style={styles.items}>
          {
            noteItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => removeNote(index)}>
                  <Note text={item} /> 
                </TouchableOpacity>
              )
            })
          }
          <Note text={'Default Note-1, can not remove'}/>
          <Note text={'Default Note-2, can not remove'}/>
        </View>
      </View>
      <KeyboardAvoidingView 
        style={styles.writeNoteWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a note'} value={note} onChangeText={text => setNote(text)} />
        <TouchableOpacity onPress={() => handleAddNote()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD9D8',
  },
  notesWrapper : {
    paddingTop:80,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  title : {
    backgroundColor: '#125488',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  sectionTitle : {
    fontSize: 24,
    fontWeight: 'bold',    
    color: '#fff'
  },
  items : {

  },
  writeNoteWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#258180',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});