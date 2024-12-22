import { SafeAreaView, Text } from "react-native";
import {
  chatApiKey,
  chatUserId,
  chatUserName,
  chatUserToken,
} from "../environment/chat-config";
import { useCreateChatClient } from "stream-chat-expo";

const user = {
  id: chatUserId,
  name: chatUserName,
};

export function ChatWrapper({ children }) {
  const chatClient = useCreateChatClient({
    apiKey: chatApiKey,
    userData: user,
    tokenOrProvider: chatUserToken,
  });

  if (!chatClient) {
    return (
      <SafeAreaView>
        <Text>Loading chat ...</Text>
      </SafeAreaView>
    );
  }

  return children;
}
