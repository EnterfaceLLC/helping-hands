import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#82C1D2'
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="wechat" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
