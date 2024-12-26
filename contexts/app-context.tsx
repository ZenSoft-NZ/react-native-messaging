import { createContext, useContext, useState } from "react";

export const AppChatContext = createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
});

export function AppChatProvider({ children }: { children: React.ReactNode }) {
  const [channel, setChannel] = useState<any>();
  const [thread, setThread] = useState<any>();

  return (
    <AppChatContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </AppChatContext.Provider>
  );
}

export const useAppChatContext = () => useContext(AppChatContext);
