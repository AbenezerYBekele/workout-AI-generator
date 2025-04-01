import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; 
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="result" options={{ headerShown: false }} />
        <Stack.Screen name="form" options={{ headerShown: false }} />
        <Stack.Screen name="styles" options={{ headerShown: false }} />
        <Stack.Screen name="WorkoutPlan" options={{ headerShown: false, lazy: true }} />
        <Stack.Screen name="saved" options={{ headerShown: false, lazy: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}
