import "react-native-gesture-handler";

import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ChatWrapper } from "components/chat-wrapper";
import { AppChatProvider } from "contexts/app-context";

export default function Page() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <ChatWrapper>
          <AppChatProvider>
            <Stack />
          </AppChatProvider>
        </ChatWrapper>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
