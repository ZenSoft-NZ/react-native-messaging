import axios from "axios";

export async function getAzureADUsers(accessToken: string) {
  try {
    const response = await axios.get("https://graph.microsoft.com/v1.0/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const contacts = response.data.value.map(({ id, displayName, mail }) => ({
      id,
      mail,
      name: displayName,
    }));
    return contacts;
  } catch (error) {
    console.error(error);
  }
}
