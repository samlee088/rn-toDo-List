import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';


function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible = {props.visible} animationType = "slide">
            <View style = {styles.inputContainer}>
                <TextInput 
                style = {styles.textInput} 
                placeholder = 'My Course Goals' 
                onChangeText = {goalInputHandler}
                value = {enteredGoalText}
                />
                <View style = {styles.buttonContainer} >
                    <View style = {styles.button}>
                        <Button 
                        title = 'Add Goal' 
                        onPress = {addGoalHandler} 
                        />
                    </View>
                    <View style = {styles.button}>
                        <Button title = 'Cancel' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;


const styles = StyleSheet.create({

    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      padding: 16,
  
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      backgroundColor: '#69A297',
      width: '100%',
      padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,

    },
    button: {
        width: '40%',
        marginHorizontal: 8,
        backgroundColor: '#69A297',
        borderRadius: 6,

    },
   
  });

