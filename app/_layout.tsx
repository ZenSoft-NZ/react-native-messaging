import "react-native-gesture-handler";

import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ChatWrapper } from "components/chat-wrapper";
import { ChatContextProvider } from "contexts/chat-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <ChatWrapper>
          <ChatContextProvider>
            <Stack>
              {/* Below tells Expo to use /(tabs)/_layout.tsx as the content of the screen in the stack */}
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </ChatContextProvider>
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
