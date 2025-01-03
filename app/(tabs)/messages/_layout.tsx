import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import Icon from "ui/icon";

export default function MessagesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Messages",
          headerRight: ({ tintColor }) => (
            <TouchableOpacity>
              <Icon name="add-circle-outline" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="channels/[cid]/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="channels/[cid]/threads/[tid]/index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
