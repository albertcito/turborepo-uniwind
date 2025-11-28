'use client';

import { Pressable, Text } from "react-native";

export const Button = () => {
  return (
    <Pressable
      className="bg-blue-500 p-4 rounded-md active:bg-blue-600 hover:bg-blue-700"
      onPress={() => console.log('Button pressed')}
    >
      <Text className="text-white">
        Uniwind Button
      </Text>
    </Pressable>
  );
};
