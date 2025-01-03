import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
import getStreamToken from "lib/api/stream-chat";

export const ChatContext = createContext({
  channel: null,
  setChannel: (channel) => {},
  thread: null,
  setThread: (thread) => {},
  streamToken: "",
});

export function ChatContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const [streamToken, setStreamToken] = useState("");
  const [channel, setChannel] = useState();
  const [thread, setThread] = useState();

  // useEffect(() => {
  //   console.log("streamToken in ChatContextProvider", streamToken);
  //   console.log("accessToken in ChatContextProvider", auth.accessToken);
  // }, [auth.acccessToken, streamToken]);

  //FIXME: @LinkunGao this is the file to fix

  useEffect(() => {
    console.log("here");
    async function getToken() {
      if (auth.accessToken) {
        const response = await getStreamToken(auth.accessToken);
        const streamToken = response.data.streamToken;
        setStreamToken(streamToken);
      }
    }
    getToken();
  }, [auth.accessToken]);

  return (
    <ChatContext.Provider
      value={{
        channel,
        setChannel,
        thread,
        setThread,
        streamToken,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
