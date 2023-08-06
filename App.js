import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  
  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
  }


  return (
    <View style = {styles.appContainer}>
      < GoalInput onAddGoal = {addGoalHandler} />
      <View style = {styles.goalsContainer}>
          <Text style = {styles.goalsHeader}>
            List of Goals
          </Text>
          <FlatList data = {courseGoals} renderItem = {(itemData) => {
             return < GoalItem text = {itemData.item.text} />
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

});