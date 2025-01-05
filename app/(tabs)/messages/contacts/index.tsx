import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAzureADUsers } from "lib/api/contacts";
import { useAuth } from "lib/contexts/auth-context";
import { useChatContext } from "lib/contexts/chat-context";
import { useRouter } from "expo-router";
import Loading from "components/loading";
import ContactList from "components/contact-list";

const ContactsScreen = () => {
  const { auth } = useAuth();
  const router = useRouter();
  const [contacts, setContacts] = useState();
  const [isLoading, setLoading] = useState(false);
  const { setChannel, chatClient } = useChatContext();

  useEffect(() => {
    setLoading(true);
    const getContacts = async () => {
      if (auth.isAuthenticated) {
        const contacts = await getAzureADUsers(auth.accessToken);
        const others = contacts.filter(
          (contact) => contact.id !== auth.user.id
        );
        setContacts(others);
      }
      setLoading(false);
    };
    getContacts();
  }, [auth.isAuthenticated]);

  const handlePressContact = async (contact) => {
    if (!auth.isAuthenticated) return;

    const members = [auth.user.id, contact.id];
    const channel = chatClient.channel("messaging", {
      members,
    });

    await channel.create();

    setChannel(channel);
    router.push(`/messages/channels/${channel.cid}`);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading && <Loading />}
      {!isLoading && (
        <ContactList contacts={contacts} onPressItem={handlePressContact} />
      )}
    </View>
  );
};

export default ContactsScreen;
