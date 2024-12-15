import { Stack } from "expo-router";

export default function Page({ children }) {
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
