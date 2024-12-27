import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useAppChatContext } from "contexts/app-context";
import { Channel, Thread } from "stream-chat-expo";
import { useHeaderHeight } from "@react-navigation/elements";

const ThreadScreen = () => {
  const { channel, thread, setThread } = useAppChatContext();
  const headerHeight = useHeaderHeight();

  if (channel === undefined) {
    return (
      <SafeAreaView>
        <Text>Loading chat</Text>
      </SafeAreaView>
    );
  }

  const handleThreadDismount = () => {
    setThread(undefined);
  };

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Thread Screen" }} />
      <Channel
        channel={channel}
        keyboardVerticalOffset={headerHeight}
        thread={thread}
        threadList
      >
        <View style={styles.container}>
          <Thread onThreadDismount={handleThreadDismount} />
        </View>
      </Channel>
    </SafeAreaView>
  );
};

export default ThreadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
