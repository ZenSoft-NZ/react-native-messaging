import { clientId, tenantId } from "environment/azure-auth-config";
import * as AuthSession from "expo-auth-session";

const discovery = {
  authorizationEndpoint: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`,
  tokenEndpoint: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
};

export async function signInWithAzureAD() {
  try {
    const authRequest = new AuthSession.AuthRequest({
      clientId,
      redirectUri: "com.zensoft.rnmsg://auth",
      scopes: ["openid", "profile", "email"],
      responseType: AuthSession.ResponseType.Token,
    });

    const result = await authRequest.promptAsync(discovery);
    if (result.type === "success") {
      return result.params;
    } else {
      throw new Error("Failed to sign in with Azure AD");
    }
  } catch (error) {
    console.error("Error in signInWithAzureAD:", error);
  }
}
