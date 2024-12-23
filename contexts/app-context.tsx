import { createContext, useContext, useState } from "react";

export const AppContext = createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [channel, setChannel] = useState<null>();
  const [thread, useThread] = useState();

  return (
    <AppContext.Provider value={{ channel, setChannel, thread, setThread }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
