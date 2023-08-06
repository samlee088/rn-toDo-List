import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    //Option to close out Modal when adding in a goal or not
    // endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals( currentCourseGoals => {
      return currentCourseGoals.filter( (goal) => goal.id !== id );
    });
  }


  return (
    <View style = {styles.appContainer}>
      <Button 
        title = "Add New Goal"
        color = '#50808E' 
        onPress = {startAddGoalHandler} 
      />
      {/* Different ways to render modal, the modalsVisible && method is not recommended for this type, and it is better to use the built in modal visible functionality */}
      {/* { modalIsVisible && < GoalInput onAddGoal = {addGoalHandler} />} */}
      < GoalInput onAddGoal = {addGoalHandler} visible = {modalIsVisible} onCancel = {endAddGoalHandler} />
      <View style = {styles.goalsContainer}>
          <Text style = {styles.goalsHeader}>
            List of Goals
          </Text>
          <FlatList data = {courseGoals} renderItem = {(itemData) => {
            return ( 
              < GoalItem 
                text = {itemData.item.text} 
                id = {itemData.item.id}
                onDeleteItem = {deleteGoalHandler} 
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
    backgroundColor: '#1e085a',

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