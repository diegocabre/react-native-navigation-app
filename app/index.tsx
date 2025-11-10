import { Redirect } from "expo-router";
import React from "react";
export default function App() {
  return <Redirect href="/(drawer)/user" />;

  /*  return (
    <SafeAreaProvider>
      <View className="items-center justify-center flex-1 bg-primary">
        <Text className="text-5xl text-blue-500 font-chelsea-market">
          Chelsea Market Font!
        </Text>
        <Text className="text-5xl text-red-950 font-montserrat-black">
          Esta es Montserrat-black
        </Text>
        <Text className="text-5xl text-green-950 font-montserrat-light">
          Esta es Montserrat-light
        </Text>
        <Text className="text-5xl text-yellow-950 font-montserrat-regular">
          Esta es Montserrat-regular
        </Text>
        <Link href="./products">Go to Products</Link>
      </View>
    </SafeAreaProvider>
  ); */
}
