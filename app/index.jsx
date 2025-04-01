import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {FadeIn, FadeInDown, FadeOut} from 'react-native-reanimated';
import { Link } from 'expo-router';

export default function Index() {
  
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <StatusBar style="light" />
      
      <Image 
        source={require('../assets/images/welcome.png')} 
        style={{ position: 'absolute', width: '100%', height: '100%' }} 
      />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{
          width: wp('100%'), 
          height: hp('70%'), 
          position: 'absolute', 
          bottom: 0, 
          justifyContent: 'flex-end'
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View style={{ alignItems: 'center' }}>


          <View style={{ marginBottom: '50%' }}>
          <Text style={{ color: '#E11D48', fontSize: 80, fontWeight: 'bold' }}>
            AI <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>Workout</Text>
          </Text>
          <Text style={{ color: 'white', fontSize: 70, fontWeight: 'bold' , textAlign: 'center' }}>
            for <Text style={{ color: '#E11D48', fontSize: 70, fontWeight: 'bold' }}> You </Text> </Text>
          </View>
          
        </Animated.View>
        <Animated.View style={{ width: '100%', alignItems: 'center', marginBottom: hp(5) }}>
          <TouchableOpacity 
            
            style={{ 
              height: hp(7), 
              width: wp(80), 
              backgroundColor: '#E11D48', 
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
          < TouchableOpacity
            style={{ 
              height: hp(7), 
              width: wp(80), 
              backgroundColor: 'transparent', 
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: 50,
              borderColor: 'white',
              borderWidth: 2,
              marginTop: hp(2) 
            }}
          >
            <Link href={"./saved"} style={{ marginHorizontal: "auto" }} asChild>
            <Text style={{ color:'white', fontStyle: 'bold', fontSize: 20}}> saved Workout </Text>
            </Link>
            </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
