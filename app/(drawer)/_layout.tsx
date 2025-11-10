import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer
      initialRouteName="(tabs)"
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveTintColor: "pink",
        drawerInactiveTintColor: "gray",
        overlayColor: "rgba(0,0,0,0.5)",
        drawerContentStyle: {
          backgroundColor: "white",
        },
        drawerLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: "Tabs Screen",
          title: "Tabs + Stack",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="albums-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="person-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Schedule",
          title: "Horarios",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="calendar-outline" color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
