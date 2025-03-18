import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-primary-200 "
    
    >
      <Text className=" text-red-600 my-10 font-rubik-light text-3xl">welcome to ReState</Text>
      <Text className=" text-red-600 my-10 text-3xl">welcome to ReState</Text>
      <Link href='/sign-in' className="">Sign In</Link>
      <Link href='/explore'>Explore</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/properties/1'>Property</Link>
    </View>
  );
}
