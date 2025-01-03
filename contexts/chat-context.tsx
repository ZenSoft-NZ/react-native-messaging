import { createContext, useContext, useState } from "react";

export const ChatContext = createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
  user: { id: "", name: "" },
  setUser: (user) => {},
  streamToken: null,
  setStreamToken: (streamToken) => {},
});

export function ChatContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [channel, setChannel] = useState();
  const [thread, setThread] = useState();
  const [user, setUser] = useState();
  const [streamToken, setStreamToken] = useState();

  return (
    <ChatContext.Provider
      value={{
        channel,
        setChannel,
        thread,
        setThread,
        user,
        setUser,
        streamToken,
        setStreamToken,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
