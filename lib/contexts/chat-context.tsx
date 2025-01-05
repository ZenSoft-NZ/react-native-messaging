import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
import getStreamToken from "lib/api/stream-chat";
import { type StreamChat } from "stream-chat";
import { useCreateChatClient } from "stream-chat-expo";
import { chatApiKey } from "lib/environment/chat-config";

type IChat = {
  channel: any;
  setChannel: (channel: any) => void;
  thread: any;
  setThread: (thread: any) => void;
  streamToken: string;
  chatClient: StreamChat;
};

export const ChatContext = createContext<IChat>({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
  streamToken: "",
  chatClient: null,
});

export function ChatContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = useAuth();
  const [streamToken, setStreamToken] = useState<string | undefined>();
  const [channel, setChannel] = useState();
  const [thread, setThread] = useState();

  useEffect(() => {
    async function getStreamAccessToken() {
      if (auth.isAuthenticated) {
        const streamToken = await getStreamToken(auth.accessToken);
        setStreamToken(streamToken);
      }
    }
    getStreamAccessToken();
  }, [auth.isAuthenticated]);

  const chatClient = useCreateChatClient({
    apiKey: chatApiKey,
    userData: auth.isAuthenticated ? auth.user : null,
    tokenOrProvider: streamToken ? streamToken : null,
  });

  return (
    <ChatContext.Provider
      value={{
        channel,
        setChannel,
        thread,
        setThread,
        streamToken,
        chatClient,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
