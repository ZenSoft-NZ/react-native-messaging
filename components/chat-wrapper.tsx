import { chatApiKey } from "lib/environment/chat-config";
import { Chat, OverlayProvider, useCreateChatClient } from "stream-chat-expo";
import { useAuth } from "lib/contexts/auth-context";
import { useChatClientContext } from "lib/contexts/chat-client-context";

type ChatWrapperProps = {
  children: React.ReactNode;
};

export default function ChatWrapper({ children }: ChatWrapperProps) {
  const { chatClient } = useChatClientContext();

  if (chatClient) {
    return (
      <OverlayProvider>
        <Chat client={chatClient}>{children}</Chat>
      </OverlayProvider>
    );
  }
}
