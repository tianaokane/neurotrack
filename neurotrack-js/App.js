import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const initialHabits = [
  { id: '1', name: 'Drink Water', completed: false },
  { id: '2', name: 'Study 30 mins', completed: false },
  { id: '3', name: 'Go for a walk', completed: false },
];

export default function App() {
  const [habits, setHabits] = useState(initialHabits);
  const [xp, setXP] = useState(0);

  const toggleHabit = (id) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === id) {
        if (!habit.completed) setXP(xp + 10);
        return { ...habit, completed: !habit.completed };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>NeuroTrack 🌱</Text>
      <Text style={styles.xp}>XP: {xp}</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.habit, item.completed && styles.completed]}
            onPress={() => toggleHabit(item.id)}
          >
            <Text style={styles.habitText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fefefe',
  padding: 20,
},

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  xp: {
    fontSize: 18,
    marginBottom: 20,
  },
  habit: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#cce5ff',
    marginVertical: 5,
    width: 250,
    alignItems: 'center',
  },
  habitText: {
    fontSize: 16,
  },
  completed: {
    backgroundColor: '#b2fab4',
  },
});
