import AzureAuth from "react-native-azure-auth";
import { clientId } from "environment/azure-auth-config";

const azureAuth = new AzureAuth({
  clientId,
});

export async function signInWithAzureAD() {
  try {
    const tokens = await azureAuth.webAuth.authorize({});
    return tokens;
  } catch (error) {
    console.error(error);
  }
}
