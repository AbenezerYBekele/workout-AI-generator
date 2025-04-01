import {  Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dropdown } from "react-native-element-dropdown";
import WorkoutPlan from './WorkoutPlan'; 
import { AntDesign } from '@expo/vector-icons';
import GymBackGround2 from '../assets/images/GymBackGround2.jpg';
import styles from './styles';

export default function Home2() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [goal, setGoal] = useState('');
    const [fitnessLevel, setFitnessLevel] = useState('');
    const [Preference, setPreference] = useState('');
    const [weight, setWeight] = useState('');
    const [sex, setsex]=useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    const Levels = [
        { label: "Beginner", value: "Beginner" },
        { label: "Intermediate", value: "Intermediate" },
        { label: "Advanced", value: "Advanced" },
    ];

    const Goals = [
        { label: "Weight Loss", value: "Weight Loss" },
        { label: "Muscle Gain", value: "Muscle Gain" },
        { label: "Endurance", value: "Endurance" },
        { label: "Flexibility", value: "Flexibility" },
        { label: "Strength", value: "Strength" },
        { label: "General Fitness", value: "General Fitness" },
    ];

    const Preferences = [
        { label: "Gym", value: "Gym" },
        { label: "Home", value: "Home" },
        { label: "Outdoor", value: "Outdoor" },
        { label: "No Preference", value: "No Preference" },
    ];
    const Sex = [
        { label: "female", value: "female" },
        { label: "male", value: "male" },
        ];
    

    const handleSubmit = () => {
        if (name && age && goal && fitnessLevel && weight) {
            setSubmitted(true);
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {!submitted ? (
                <>
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 5 , width: 'auto', height: '70', borderRadius: '25%' }}>
                        <Text style={{ color: 'Black', fontSize: 40, fontWeight: 'bold' }}>
                            Workout <Text style={{ justifyContent: 'center', color: 'red', fontSize: 55, fontWeight: 'bold' }}>Generator</Text>
                        </Text>
                        <Text>
                        </Text>
                            </View>
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 30 ,  width: '95%', height: '30', borderRadius: '20%' }}>
                    <Text style={{ fontSize: 20 , alignItems: "center", color: 'black'}}>Get your personalized workout plan</Text>
                    </View>
                    <Text style = { styles.formText}>Your Name</Text>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your name"
                    />

                    <Text style = { styles.formText}>Gender</Text>
                    <Dropdown
                        style={styles.Dropdown}
                        placeholderStyle={{ color: 'gray' }}
                        selectedTextStyle={{ color: 'black' }}
                        data={Sex}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select your level' : '...'}
                        value={sex}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setsex(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={{ marginRight: 10 }}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />

                    <Text style = { styles.formText}>Your Age</Text>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={setAge}
                        value={age}
                        placeholder="Enter your age"
                        keyboardType="numeric"
                    />
                    <Text style = { styles.formText}>Your Weight</Text>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Enter your weight"
                        keyboardType="numeric"
                    />

                    <Text style = { styles.formText}>Your Fitness Level</Text>
                    <Dropdown
                        style={styles.Dropdown}
                        placeholderStyle={{ color: 'gray' }}
                        selectedTextStyle={{ color: 'black' }}
                        data={Levels}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select your level' : '...'}
                        value={fitnessLevel}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setFitnessLevel(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={{ marginRight: 10 }}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    
                    <Text style = { styles.formText}>Goal</Text>
                    <Dropdown
                        style={styles.Dropdown}
                        placeholderStyle={{ color: 'gray' }}
                        selectedTextStyle={{ color: 'black' }}
                        data={Goals}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select your level' : '...'}
                        value={goal}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setGoal(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={{ marginRight: 10 }}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    <Text style = { styles.formText}>Workout Preferences</Text>
                    <Dropdown
                        style={styles.Dropdown}
                        placeholderStyle={{ color: 'gray' }}
                        selectedTextStyle={{ color: 'black' }}
                        data={Preferences}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select your level' : '...'}
                        value={Preference}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setPreference(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={{ marginRight: 10 }}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />

                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={handleSubmit}
                         style={{ 
                                      height: 45, 
                                      width: 180, 
                                      backgroundColor: '#009688', 
                                      justifyContent: 'center', 
                                      alignItems: "center", 
                                      borderRadius: 50,
                                      borderColor: 'white',
                                      borderWidth: 2,
                                      marginTop: 20 
                                    }}
                    >
                        <Text style={styles.SubmitText}>Submit</Text>
                    </TouchableOpacity>
                    </View>
                </>
            ) : (
                <WorkoutPlan userData={{ sex, name, age, goal, fitnessLevel, weight, Preference }} />
            )}
        </View>
    );
}
