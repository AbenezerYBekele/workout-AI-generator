import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WorkoutResult = () => {
  const { workout } = useLocalSearchParams();
  const [saving, setSaving] = useState(false);

  const saveWorkout = async () => {
    try {
      setSaving(true);
      const existingWorkouts = JSON.parse(await AsyncStorage.getItem("savedWorkouts")) || [];
      const newWorkouts = [workout, ...existingWorkouts]; // Add new workout at the beginning
      await AsyncStorage.setItem("savedWorkouts", JSON.stringify(newWorkouts));
      Alert.alert("Success", "Workout saved!");
    } catch (error) {
      Alert.alert("Error", "Failed to save workout.");
      console.error("Error saving workout:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        Your Workout Plan
      </Text>
      <ScrollView style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16 }}>{workout}</Text>

        <TouchableOpacity
        onPress={saveWorkout}
        style={{ 
          height: 45, 
          width: '100%', 
          backgroundColor: "#009688", 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 50,
          borderColor: 'white',
          borderWidth: 2 ,
          marginBottom: 7,
        }}
        disabled={saving}
      >
        <Text style={{ color: "white", fontSize: 25 }}>
          {saving ? "Saving..." : "Save Workout"}
        </Text>
      </TouchableOpacity>

          <TouchableOpacity           
          style={{ 
            height: 45, 
            width: '100%', 
            backgroundColor: "#009688", 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 50,
            borderColor: 'white',
            borderWidth: 2 
          }}
        >
          <Link href={"./form"} style={{ marginHorizontal: "auto" }} asChild>
          <Text style={{ color:'white', fontStyle: 'bold', fontSize: 25, fontWeight: '900'}}> Workout Generator </Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity           
          style={{ 
            height: 40, 
            width: "100%", 
            backgroundColor: "#009688", 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 50,
            borderColor: 'white',
            borderWidth: 2 ,
            marginBottom: 30,
          }}
        >
          <Link href={"/"} style={{ marginHorizontal: "auto" }} asChild>
          <Text style={{ color:'white', fontStyle: 'bold', fontSize: 25, fontWeight: '900'}}>  ← Home </Text>
          </Link>
        </TouchableOpacity>
      </ScrollView>

      {/* Save Button */}
      {/* <TouchableOpacity
        onPress={saveWorkout}
        style={{
          backgroundColor: saving ? "#ccc" : "#28a745",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          marginTop: 15,
        }}
        disabled={saving}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          {saving ? "Saving..." : "Save Workout"}
        </Text>
      </TouchableOpacity> */}

      {/* Navigation Buttons */}
      {/* <Link href="/" style={{ marginTop: 20, fontSize: 18, color: "#007BFF" }}>
        ← Back to Workout Generator
      </Link>
      <Link href="/saved" style={{ marginTop: 10, fontSize: 18, color: "#007BFF" }}>
        📂 View Saved Workouts
      </Link> */}
    </View>
  );
};

export default WorkoutResult;
