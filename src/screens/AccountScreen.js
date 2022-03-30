import React from "react";
import { Text, View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

export default function AccountScreen(props) {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
