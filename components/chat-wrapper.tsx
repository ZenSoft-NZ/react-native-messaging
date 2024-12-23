import { SafeAreaView, Text } from "react-native";
import {
  chatApiKey,
  chatUserId,
  chatUserName,
  chatUserToken,
} from "environment/chat-config";
import { Chat, OverlayProvider, useCreateChatClient } from "stream-chat-expo";

const user = {
  id: chatUserId,
  name: chatUserName,
};

type ChatWrapperProps = {
  children: React.ReactNode;
};

export function ChatWrapper({ children }: ChatWrapperProps) {
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

  return (
    <OverlayProvider>
      <Chat client={chatClient}>{children}</Chat>
    </OverlayProvider>
  );
}
