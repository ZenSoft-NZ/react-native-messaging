import { chatApiKey } from "environment/chat-config";
import { Chat, OverlayProvider, useCreateChatClient } from "stream-chat-expo";
import { useAuth } from "contexts/auth-context";

type ChatWrapperProps = {
  children: React.ReactNode;
};

export default function ChatWrapper({ children }: ChatWrapperProps) {
  const { user, streamToken } = useAuth();

  const chatClient = useCreateChatClient({
    apiKey: chatApiKey,
    userData: user,
    tokenOrProvider: streamToken,
  });

  if (chatClient)
    return (
      <OverlayProvider>
        <Chat client={chatClient}>{children}</Chat>
      </OverlayProvider>
    );
}
