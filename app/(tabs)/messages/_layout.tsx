import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import Icon from "components/ui/icon";
import ChatWrapper from "components/chat-wrapper";
import { ChatContextProvider } from "lib/contexts/chat-context";
export default function MessagesLayout() {
  const router = useRouter();
  return (
    <ChatContextProvider>
      <ChatWrapper>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              title: "Messages",
              headerRight: ({ tintColor }) => (
                <TouchableOpacity
                  onPress={() => router.push(`/messages/contacts`)}
                >
                  <Icon name="add-circle-outline" size={24} color={tintColor} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="contacts/index"
            options={{
              headerShown: true,
              title: "Contacts",
            }}
          />
          <Stack.Screen
            name="contacts/profile"
            options={{
              headerShown: true,
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="channels/[cid]/index"
            options={{
              headerShown: true,
              title: "Chat",
            }}
          />
          <Stack.Screen
            name="channels/[cid]/threads/[tid]/index"
            options={{
              headerShown: true,
              title: "Thread",
            }}
          />
        </Stack>
      </ChatWrapper>
    </ChatContextProvider>
  );
}
