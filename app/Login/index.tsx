import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { View, Text, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//* LOGIN SCREEN //
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(tabs)/home", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        // setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBFEE9" }}>
      <Text
        style={{
          fontFamily: "boog",
          fontSize: 24,
          textAlign: "center",
          marginBottom: 5,
          color: "#541909",
        }}
      >
        Helping Hands Humane Society
      </Text>
      <Image
        source={require("../../assets/images/onBoarding.jpeg")}
        style={{ width: "100%", height: 400 }}
      />
      <View
        style={{
          flex: 1,
          padding: 25,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "boog",
            fontSize: 22,
            textAlign: "center",
            color: "#541909",
          }}
        >
          Amazing New Friends Are Waiting For You
        </Text>

        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            color: "#000",
          }}
        >
          Dogs, Cats, & Pocket Pets are looking for loving homes and forever
          families
        </Text>
        <Pressable
          onPress={onPress}
          style={{
            width: "100%",
            borderRadius: 30,
            alignSelf: "center",
            backgroundColor: "#82C1D2",
            padding: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "boog",
              fontSize: 20,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
