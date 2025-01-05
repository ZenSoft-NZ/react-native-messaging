import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useChatContext } from "lib/contexts/chat-context";
import { Channel, Thread } from "stream-chat-expo";
import { useHeaderHeight } from "@react-navigation/elements";

export default function ThreadScreen() {
  const { channel, thread, setThread } = useChatContext();
  const headerHeight = useHeaderHeight();

  if (!channel) {
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
    <SafeAreaView style={styles.container}>
      <Channel
        channel={channel}
        keyboardVerticalOffset={headerHeight}
        thread={thread}
        threadList
      >
        <SafeAreaView style={styles.container}>
          <Thread onThreadDismount={handleThreadDismount} />
        </SafeAreaView>
      </Channel>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
