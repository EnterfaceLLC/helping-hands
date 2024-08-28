import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
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
        padding: 10,
        justifyContent: 'space-between',
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
            fontSize: 16,
            textAlign: "center",
            color: "#000",
          }}
        >
          Dogs, Cats, & Pocket Pets are looking for loving homes and forever
          families
        </Text>
        <Pressable
          style={{
            width: "100%",
            borderRadius: 30,
            alignSelf: 'center',
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
