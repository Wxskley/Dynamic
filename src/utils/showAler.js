import { Alert } from "react-native";

export function showAlert(errorCode) {
  switch (errorCode) {
    case "auth/invalid-email":
      Alert.alert(
        "Email inválido",
        'O email digitado não corresponde ao formato esperado:\nexemplo: "email@email.com"'
      );
      break;
    case "auth/user-not-found":
      Alert.alert(
        "Email inexistente",
        "O email digitado não foi encontrado em nosso sistema, caso não possua uma conta, crie uma conta primeiro!"
      );
      break;
    case "auth/wrong-password":
      Alert.alert(
        "Algo deu errado",
        "O email/senha digitado está incorreto, tente novamente!"
      );
      break;
    case "auth/weak-password":
      Alert.alert(
        "Algo deu errado",
        "A senha deve conter no mínimo 6 caracteres."
      );
      break;
    default:
      break;
  }
}
