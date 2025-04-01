import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

const SavedWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const saved = JSON.parse(await AsyncStorage.getItem("savedWorkouts")) || [];
        setWorkouts(saved);
      } catch (error) {
        console.error("Error loading workouts:", error);
      }
    };
    loadWorkouts();
  }, []);

  const clearWorkouts = async () => {
    try {
      await AsyncStorage.removeItem("savedWorkouts");
      setWorkouts([]);
      Alert.alert("Success", "All saved workouts deleted.");
    } catch (error) {
      console.error("Error clearing workouts:", error);
      Alert.alert("Error", "Failed to delete workouts.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        📂 Saved Workouts
      </Text>
      <ScrollView>
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#f8f9fa",
                padding: 10,
                marginBottom: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 16 }}>{workout}</Text>
            </View>
          ))
        ) : (
          <Text>No saved workouts.</Text>
        )}
        {/* Clear All Button */}
      {workouts.length > 0 && (
        <View>
          <TouchableOpacity
            onPress={clearWorkouts}
            style={{
                height: 50, 
                width: '100%', 
                backgroundColor: "#dc3545", 
                justifyContent: 'center', 
                alignItems: 'center', 
                borderRadius: 50,
                borderColor: 'white',
                borderWidth: 2,
                marginTop: 20,
                marginBottom: 5, 
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>🗑 Clear All</Text>
          </TouchableOpacity>
            
          <Link href="/" asChild>
          <TouchableOpacity
            style={{ 
              height: 50, 
              width: '100%', 
              backgroundColor: '#009688', 
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: 50,
              borderColor: 'white',
              borderWidth: 2,
              marginTop: 20, 
            }}
          >
            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20 }}> Home </Text>
          </TouchableOpacity>
          </Link>


        </View>
      )}
      </ScrollView>
      
    </View>
  );
};

export default SavedWorkouts;
