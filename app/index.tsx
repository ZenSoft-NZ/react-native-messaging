import { chatUserId } from "environment/chat-config";
import { Stack } from "expo-router";
import { useMemo } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ChannelList } from "stream-chat-expo";

const filters = {
  members: { $in: [chatUserId] },
  type: "messaging",
};
const sort = { last_updated: };
const options = {
  state: true,
  watch: true,
};

export default function ChannelListScreen() {
  const memoizedFilters = useMemo(() => filters, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Channel List Screen" }} />
      <ChannelList filters={memoizedFilters} options={options} sort={sort} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
