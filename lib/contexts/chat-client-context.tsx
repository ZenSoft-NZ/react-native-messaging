import { createContext, useContext, useMemo } from "react";
import { useAuth } from "./auth-context";
import { useChatContext } from "./chat-context";
import { useCreateChatClient } from "stream-chat-expo";
import { chatApiKey } from "lib/environment/chat-config";
import { StreamChat } from "stream-chat";

type IClientContext = {
  chatClient: StreamChat;
};

export const ChatClientContext = createContext<IClientContext>({
  chatClient: null,
});

export function ChatClientContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const { streamToken } = useChatContext();

  const chatClient: StreamChat = useCreateChatClient({
    apiKey: chatApiKey,
    userData: auth.user,
    tokenOrProvider: streamToken,
  });

  const value = useMemo(() => ({ chatClient }), [chatClient]);

  return (
    <ChatClientContext.Provider value={value}>
      {children}
    </ChatClientContext.Provider>
  );
}

export const useChatClientContext = () => useContext(ChatClientContext);
