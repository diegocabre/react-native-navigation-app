import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { router, Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeft = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }
    // Si no hay página para volver, abre el Drawer
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FD7F0A",
        },
        contentStyle: {
          backgroundColor: "#ffffff",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "#ffffff",
        },
        headerTitleAlign: "center",
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "menu-outline"}
            size={24}
            color={tintColor}
            onPress={() => onHeaderLeft(canGoBack ?? false)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Inicio", headerShown: true }}
      />
      <Stack.Screen
        name="products/index"
        options={{ title: "Productos", headerShown: true }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: "Perfil", headerShown: true }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Ajustes", headerShown: true }}
      />
    </Stack>
  );
};

export default StackLayout;
