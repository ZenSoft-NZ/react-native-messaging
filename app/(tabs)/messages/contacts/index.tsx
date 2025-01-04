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

const ContactsScreen = () => {
  const auth = useAuth();
  const [friends, setFriends] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getFriends = async () => {
      const contacts = await getAzureADUsers(auth.accessToken);
      setFriends(contacts);
      setLoading(false);
    };
    getFriends();
  }, []);

  const handleChatClick = (person: any) => {
    console.log(person);
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
        data={friends}
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
