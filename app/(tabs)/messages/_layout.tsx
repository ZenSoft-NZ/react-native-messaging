import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useChatContext } from "stream-chat-expo";

export default function MessagesLayout() {
  const { channel } = useChatContext();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="channel/[cid]"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="channel/[cid]/threads/[tid]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
