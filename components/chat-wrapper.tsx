import { Chat, OverlayProvider } from "stream-chat-expo";
import { useChatContext } from "lib/contexts/chat-context";
type ChatWrapperProps = {
  children: React.ReactNode;
};

export default function ChatWrapper({ children }: ChatWrapperProps) {
  const { chatClient } = useChatContext();

  if (chatClient) {
    return (
      <OverlayProvider>
        <Chat client={chatClient}>{children}</Chat>
      </OverlayProvider>
    );
  }
}
