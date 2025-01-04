import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAzureADUsers } from "lib/api/contacts";
import { useAuth } from "lib/contexts/auth-context";
import Person from "components/ui/person";
import { chatApiKey } from "lib/environment/chat-config";
import { useCreateChatClient } from "stream-chat-expo";
import { useChatContext } from "lib/contexts/chat-context";
import { useRouter } from "expo-router";

const ContactsScreen = () => {
  const auth = useAuth();
  const router = useRouter();
  const [contacts, setContacts] = useState();
  const [isLoading, setLoading] = useState(false);
  const { streamToken, setChannel } = useChatContext();

  const chatClient = useCreateChatClient({
    apiKey: chatApiKey,
    userData: auth.user,
    tokenOrProvider: streamToken,
  });

  useEffect(() => {
    setLoading(true);
    const getContacts = async () => {
      const contacts = await getAzureADUsers(auth.accessToken);
      setContacts(contacts);
      setLoading(false);
    };
    getContacts();
  }, []);

  const handleChatClick = async (person: any) => {
    // create channel members
    const members = [auth.user.id, person.id];
    const channel = chatClient.channel("messaging", {
      members,
    });

    await channel.create();

    setChannel(channel);
    router.push(`/messages/channels/${channel.cid}`);
  };

  function renderLoad() {
    if (isLoading) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#268dcd" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
  }

  function renderList() {
    return (
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Person info={item} onPress={() => handleChatClick(item)} />
        )}
      />
    );
  }

  return (
    <View style={styles.container}>
      {renderLoad()}
      {renderList()}
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#666",
    paddingLeft: 10,
  },
});
