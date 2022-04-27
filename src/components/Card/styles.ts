import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.thirdLight,
    borderRadius: 10,
    margin: 10,
    width: "90%",
    alignItems: "center",
  },
  msg: {
    textAlign: "justify",
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.thirdLight,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  }
})

export default styles;