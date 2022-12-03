const React = require("react");
const { Text, View, StyleSheet } = require("@react-pdf/renderer");
const { useEffect, useState } = require("react");
const { default: axios } = require("axios");

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#E4E6EF",
    borderBottomWidth: 1,
    borderBottomStyle: "dashed",
    height: 24,
    fontStyle: "bold",
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

function InvoiceTableRow({ rowData }) {
  const tablerows =
    rowData?.length > 0 &&
    rowData?.map((item) => (
      <View style={styles.row} key={item.id}>
        <Text style={styles.planName}>{item.name}</Text>
        <Text style={styles.grantInfo}>{item.username}</Text>
        <Text style={styles.optionGranted}>{item.address.suite}</Text>
        <Text style={styles.netvested}>{item.address.street}</Text>
        <Text style={styles.unvested}>{item.address.zipcode}</Text>
        <Text style={styles.cashedout}>{item.address.city}</Text>
        <Text style={styles.exercised}>{item.phone}</Text>
        <Text style={styles.forfeited}>{item.id}</Text>
      </View>
    ));
  return <React.Fragment>{tablerows}</React.Fragment>;
}

module.exports = { InvoiceTableRow };
