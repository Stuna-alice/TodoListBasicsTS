import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import createTodo from "@/store/TodoItemsStore";

const Home = () => {
  //state management
  const [task, setTask] = useState<{
    key: string;
    taskName: string;
    taskDate: string;
  }>({
    key: "",
    taskName: "",
    taskDate: "",
  });

  const handleAddTodo = () => {
    createTodo.addTodo(task.key, task.taskName, task.taskDate);

    console.log("All records ", createTodo.getAllTodo());
    //clear the field after adding
    setTask({ key: "", taskName: "", taskDate: "" });
  };
  //handles
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <TextInput
        value={task.key}
        onChangeText={(ikey) => setTask({ ...task, key: ikey })}
        placeholder="Keys"
      />

      <TextInput
        value={task.taskDate}
        onChangeText={(idate) => setTask({ ...task, taskDate: idate })}
        placeholder="Date"
      />
      <TextInput
        value={task.taskName}
        onChangeText={(iname) => setTask({ ...task, taskName: iname })}
        placeholder="Name"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
