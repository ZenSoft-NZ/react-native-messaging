import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAzureADUsers } from "lib/api/contacts";
import { useAuth } from "lib/contexts/auth-context";

const ContactsScreen = () => {
  const auth = useAuth();
  const [friends, setFriends] = useState();

  useEffect(() => {
    const getFriends = async () => {
      const contacts = await getAzureADUsers(auth.accessToken);
      setFriends(contacts);
    };
    getFriends();
  }, []);

  return (
    <View>
      <Text>
        {!!friends ? (
          <Text>{friends[0]["displayNamer"]}</Text>
        ) : (
          <Text>Friends</Text>
        )}
      </Text>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
