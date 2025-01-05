import SignInButton from "components/sign-in-button";
import { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);

  function handleLoginError(error: Error) {
    setLoginError(error);
    setTimeout(() => {
      setLoginError(null);
    }, 3000);
  }

  function handleLoginSuccess() {
    router.push("/(tabs)/home");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Mock React Native Client App
      </Text>
      <SignInButton onError={handleLoginError} onSuccess={handleLoginSuccess} />
      {loginError && (
        <Text style={{ color: "darkRed" }}>
          Login failed or cancelled. Please try again.
        </Text>
      )}
    </SafeAreaView>
  );
}
