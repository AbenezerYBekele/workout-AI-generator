import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Link } from "expo-router";

const WorkoutPlan = ({ userData }) => {
  const [workout, setWorkout] = useState("");
  const [workoutImage, setWorkoutImage] = useState(null);

  const getWorkout = async () => {
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAdTSoxyoFm-Pa4sTT1t1oX10ObbNzNTpc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:  `My name is ${userData.name}. Generate a workout plan for a ${userData.age}-year-old ${userData.sex} at ${userData.fitnessLevel} level with a goal of ${userData.goal} considering their preference of ${userData.preference}. `,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      const generatedWorkout = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Workout not available.";
      const imageUrl = data?.candidates?.[0]?.content?.parts?.[1]?.image_url || null;

      setWorkout(generatedWorkout);
      setWorkoutImage(imageUrl);
    } catch (error) {
      console.error("Error fetching workout:", error);
      setWorkout("Failed to load workout. Try again!");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 30}}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>
        AI-Powered Workout Plan
      </Text>
      </View>
      
      <TouchableOpacity
        onPress={getWorkout}
        style={{
          backgroundColor: "#007BFF",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Generate Workout</Text>
      </TouchableOpacity>

      {workout ? (
        <>
          <ScrollView style={{ marginTop: 10 }}>
            {/* <Text style={{ fontSize: 16 }}>{workout}</Text> */}
          </ScrollView>

          {workoutImage && (
            <Image
              source={{ uri: workoutImage }}
              style={{
                width: "100%",
                height: 200,
                marginTop: 10,
                borderRadius: 5,
              }}
              resizeMode="cover"
            />
          )}

          {/* Navigate to WorkoutResult page with text and image */}
          <Link
            href={{
              pathname: "./result",
              params: { workout, workoutImage },
            }}
            style={{
              backgroundColor: "#28a745",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              marginTop: 15,
              textAlign: "center",
              color: "white",
              fontSize: 16,
            }}
          >
            View Full Workout →
          </Link>
        </>
      ) : null}
    </View>
  );
};

export default WorkoutPlan;
