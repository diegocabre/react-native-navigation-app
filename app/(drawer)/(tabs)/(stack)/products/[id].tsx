import { products } from "@/store/product.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product, navigation]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex items-center justify-center flex-1 px-4">
      <Text className="text-2xl font-chelsea-market">{product.title}</Text>
      <Text className="text-base font-montserrat-light">
        {product.description}
      </Text>
      <Text className="text-xl font-montserrat-black">{product.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;
