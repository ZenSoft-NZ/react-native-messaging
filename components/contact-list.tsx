import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";

function ContactItem({ contact, onPress }) {
  return (
    <Pressable onPress={() => onPress(contact)}>
      <View style={styles.container}>
        <Text style={styles.title}>{contact.name}</Text>
        <Text style={styles.email}>{contact.email}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
    gap: 2,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  title: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  email: {
    fontSize: 12,
    color: "gray",
  },
});

export default function ContactList({ contacts, onPressItem }) {
  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => (
        <ContactItem contact={item} onPress={onPressItem} />
      )}
    />
  );
}
