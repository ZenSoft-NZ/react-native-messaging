import { createContext, useContext, useState } from "react";

export const ChatContext = createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
});

export function ChatContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [channel, setChannel] = useState<any>();
  const [thread, setThread] = useState<any>();

  return (
    <ChatContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
