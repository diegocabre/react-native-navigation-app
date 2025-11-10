import { products } from "@/store/product.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-8">
            <Text className="text-2xl font-chelsea-market">{item.title}</Text>
            <Text className="text-base font-montserrat-light">
              {item.description}
            </Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="text-xl font-montserrat-black">
                {item.price}
              </Text>
              <Link className="text-primary" href={`./products/${item.id}`}>
                Ver Detalle
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
