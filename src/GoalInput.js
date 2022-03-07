import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState(" ");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal(" ");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.innerInputContainer}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.inputContainerChild}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.cancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  innerInputContainer: {
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1,
    padding: 5
  },
  inputContainerChild: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
