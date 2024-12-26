import { chatUserId } from "environment/chat-config";
import { Stack, useRouter } from "expo-router";
import { useMemo, useContext } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ChannelList } from "stream-chat-expo";
import { useAppChatContext } from "contexts/app-context";

const filters = {
  members: { $in: [chatUserId] },
  type: "messaging",
};
const sort: any = { last_updated: -1 };
const options = {
  state: true,
  watch: true,
};

export default function ChannelListScreen() {
  const memoizedFilters = useMemo(() => filters, []);

  const router = useRouter();
  const { setChannel } = useAppChatContext();

  const handleChannelSelected = (channel) => {
    setChannel(channel);
    router.push(`/channel/${channel.cid}`);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Channel List Screen" }} />
      <ChannelList
        filters={memoizedFilters}
        options={options}
        sort={sort}
        onSelect={handleChannelSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
