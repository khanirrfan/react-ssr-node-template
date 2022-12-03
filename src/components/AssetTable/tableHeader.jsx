const React = require("react");
const { Text, View, StyleSheet } = require("@react-pdf/renderer");

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#E4E6EF",
    borderBottomWidth: 1,
    borderBottomStyle: "dashed",
    height: 24,
    flexGrow: 1,
    textTransform: "uppercase",
  },
  planName: {
    width: "14%",

    fontSize: 8,
  },
  grantInfo: {
    width: "12%",

    fontSize: 8,
  },
  optionGranted: {
    width: "14%",
    fontSize: 8,
  },
  netvested: {
    width: "12%",

    fontSize: 8,
  },
  unvested: {
    width: "12%",

    fontSize: 8,
  },
  cashedout: {
    width: "12%",

    fontSize: 8,
  },
  exercised: {
    width: "12%",

    fontSize: 8,
  },
  forfeited: {
    width: "12%",

    fontSize: 8,
  },
});

function InvoiceTableHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.planName}>Plan Name</Text>
      <Text style={styles.grantInfo}>Grant Info</Text>
      <Text style={styles.optionGranted}>No Of Options Granted</Text>
      <Text style={styles.netvested}>Net Vested</Text>
      <Text style={styles.unvested}>Un Vested</Text>
      <Text style={styles.cashedout}>Cashed Out</Text>
      <Text style={styles.exercised}>Exercised</Text>
      <Text style={styles.forfeited}>Forfeited</Text>
    </View>
  );
}
module.exports = { InvoiceTableHeader };
