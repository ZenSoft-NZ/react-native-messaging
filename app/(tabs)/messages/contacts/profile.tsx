import { StyleSheet, Text, View, SectionList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen({ contact }) {
  const sections = [
    {
      title: "Contact Info",
      data: [
        { label: "Name", value: contact.name },
        { label: "Email", value: contact.email },
      ],
    },
    {
      title: "Actions",
      data: [{ label: "Start Chat", value: "start chat" }],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.label + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#c6c6c8",
  },
  header: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6e6e73",
    backgroundColor: "#f2f2f7",
    padding: 8,
    paddingHorizontal: 16,
    textTransform: "uppercase",
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  value: {
    fontSize: 16,
    color: "#8e8e93",
  },
});
