import * as React from "react";
import { StyleSheet, View } from "react-native";
import MyAppText from "../../CustomComponents/MyAppText";

const ItemCard = (props) => {
  return (
    <View style={styles.itemCardContainer}>
      <View>
        <MyAppText style={{ fontSize: 20 }}>{props.name}</MyAppText>
        <MyAppText style={{ fontSize: 12, color: "#BCBCBC", letterSpacing: 0.6 }}>
          {props.dateTime[1]} | {props.dateTime[0]}
        </MyAppText>
      </View>
      <View>
        <MyAppText style={{ fontSize: 20, color: "#DD5050" }}>Rs {props.amount}</MyAppText>
        <MyAppText style={{ fontSize: 12, color: "#BCBCBC" }}>{props.from}</MyAppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#858585",
    borderBottomWidth: 2,
    padding: 2,
    marginTop: 18
  },
});

export default ItemCard;
