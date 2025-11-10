import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "text-only" | "contained";
}

const CustomButton = ({
  children,
  color = "primary",
  variant = "contained",
  onPress,
  onLongPress,
  ...props
}: CustomButtonProps) => {
  const btnColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-accent",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable className="p-3 " onPress={onPress} onLongPress={onLongPress}>
        <Text className="text-center text-primary">{children}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      {...props}
      className={`p-3 rounded-mg ${btnColors} active:opacity-90`}
    >
      <Text className="text-center text-white">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
