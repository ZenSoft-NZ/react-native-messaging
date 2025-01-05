import { useAuth } from "lib/contexts/auth-context";
import { Button } from "react-native";

export default function SignInButton({
  onError,
  onSuccess,
}: {
  onError: (error: Error) => void;
  onSuccess: () => void;
}) {
  const { auth, signIn } = useAuth();
  if (!auth)
    throw new Error("SignInButton should be wrapped in an AuthProvider");

  async function handleClick() {
    try {
      await signIn();
      onSuccess();
    } catch (error) {
      onError(error);
    }
  }
  return <Button title="Sign in" onPress={handleClick} />;
}
