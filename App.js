import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
  }


  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput 
          style = {styles.textInput} 
          placeholder = 'My Course Goals' 
          onChangeText = {goalInputHandler}
        />
        <View >
          <Button 
            title = 'Add Goal' 
            style = {styles.buttonContainer}
            onPress = {addGoalHandler} 
          />
        </View>
      </View>
      <View style = {styles.goalsContainer}>
          <Text style = {styles.goalsHeader}>
            List of Goals
          </Text>
          <FlatList data = {courseGoals} renderItem = {(itemData) => {
            return (
              <View style = {styles.goalItem}>
                  <Text style = {styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer : {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#DDD8C4',

  }, 
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#69A297',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4,
  },
  goalsHeader: {
    fontSize: 20,
    backgroundColor: '#ADD7F6',
    color: '#3B28CC',
    margin: 20,
    padding: 10,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#3F8EFC',
  },
  goalText: {
    color: '#87BFFF',
  }

});