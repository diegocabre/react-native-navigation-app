import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaProvider>
      <View className="px-10 mt-5">
        <CustomButton
          color="primary"
          onPress={() => router.push("./products")}
          className="mb-5"
        >
          Productos
        </CustomButton>
        <CustomButton
          color="secondary"
          onPress={() => router.push("./profile")}
          className="mb-5"
        >
          Perfil
        </CustomButton>
        <CustomButton
          color="tertiary"
          onPress={() => router.push("./settings")}
          className="mb-5"
        >
          Ajustes
        </CustomButton>
        <CustomButton onPress={onToggleDrawer} variant="text-only">
          Abrir Menú
        </CustomButton>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
