import { Text, View } from "react-native";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Centrally aligned text</Text>
    </View>
  );
}
