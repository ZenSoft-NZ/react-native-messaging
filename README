# Messaging App

## Setup

```sh
cd react-native-messaging
yarn
yarn start
```

## Development

### Note

- The App under `Stream Dashboard` must under `development` rather than `production`.

  - Change `ZenSoft` Stream App to development (Solved).
  - The `chatApiKey` is Stream App `App Access Keys` - `Key` rather than `Secret`.
  - The `chatUserToken` is generate by backend server, rather than customise a JWT token.

    - This is not very clear, need to explore more.
    - To successfully add/connect a user we should disable the `Stream App Auth` under App's dashboard (solved).
    - code for generating user_id token (python) - recommend currently

    ```py
        import stream_chat

        key = "{{ your stream app api key }}"
        secret = "{{ your stream app api secret }}"
        user_id = "fake-user-1"

        server_client = stream_chat.StreamChat(
        api_key=key, api_secret=secret
        )
        token = server_client.create_token(user_id)

        print(token)
    ```

    - code for generating user_id token (node) - sames the token has some issue

    ```js
    const StreamChat = require("stream-chat").StreamChat;
    // Define values.
    const api_key = "{{ your stream app api key  }}";
    const api_secret = "{{ your stream app api secret }}";
    const user_id = "fake-user-1";

    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);

    console.log(token);
    ```

### Explore

- Need to discover `Stream App Production Mode`
  - How to create a user?
  - How to get the user token?
    - node.js
