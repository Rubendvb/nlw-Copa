import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider, Text, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="#000">
        <Text color="#fff" fontSize={24}>
          Hello World!!
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}
