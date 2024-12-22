import "react-native-gesture-handler";
import { Stack } from "expo-router";

export default function Page() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "green" },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="/" options={{}} />
    </Stack>
  );
}
