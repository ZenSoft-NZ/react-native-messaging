import { chatApiKey } from "lib/environment/chat-config";
import { useCreateChatClient } from "stream-chat-expo";
import { useAuth } from "lib/contexts/auth-context";
import { useChatContext } from "lib/contexts/chat-context";

const auth = useAuth();
const { streamToken } = useChatContext();

const chatClient = useCreateChatClient({
  apiKey: chatApiKey,
  userData: auth.user,
  tokenOrProvider: streamToken,
});

export default chatClient;
