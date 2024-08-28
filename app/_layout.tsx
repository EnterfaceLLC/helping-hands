import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    boog: require("./../assets/fonts/Boogaloo-Regular.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Login/index" options={{ headerShown: false }} />
    </Stack>
  );
}
