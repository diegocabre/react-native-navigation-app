import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import "./global.css";

const RootLayout = () => {
  useFonts({
    "montserrat-black": require("../assets/fonts/MontserratAlternates-Black.ttf"),
    "montserrat-light": require("../assets/fonts/MontserratAlternates-Light.ttf"),
    "montserrat-regular": require("../assets/fonts/MontserratAlternates-Medium.ttf"),
    "chelsea-market": require("../assets/fonts/ChelseaMarket-Regular.ttf"),
  });

  return <Slot />;
};

export default RootLayout;
