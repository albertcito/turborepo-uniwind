import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Button } from "@repo/ui/button";

export default function Index() {
  const [toggle, setToggle] = useState(false);
  return (
    <View
      className="flex-1 justify-center items-center bg-red-500"
    >
      <Text className="text-white">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Button />
      <View
        className={`my-10 h-10 bg-gray-500 transition-[width] delay-150 duration-300 ease-in-out  ${toggle ? 'w-20' : 'w-90'}`}
      />
      <Pressable
        onPress={() => setToggle(!toggle)}
        className="p-4 bg-green-500 mt-4"
      >
        <Text>Toggle</Text>
      </Pressable>
    </View>
  );
}
