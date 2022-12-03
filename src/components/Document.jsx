const React = require('react');
const { Document, Page, Text, View, StyleSheet, Line } = require('@react-pdf/renderer');
const { AssetTable } = require("./AssetTable");

const {
  SampleLineChart,
  SampleScatterChart,
  SampleBarChart,
} = require("./SampleChart");
const { ChartSvg } = require("./Chart");
const { useEffect, useState } = require("react");
const { default: axios } = require("axios");

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    padding: "15 0",
    color: "#000",
  },
  content: {
    fontSize: 10,
    fontWeight: "bold",
    paddingBottom: 15,
    color: "#000",
  },
  assetWorth: {
    backgroundColor: "#F2F2F2",
    color: "#000",
    padding: "10 6",
    fontSize: 10,
    width: "60%",
  },
  section: {
    padding: 20,
    flexGrow: 1,
  },
  esopDetails: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  grantsDetail: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  vestingDetails: {
    display: "flex",
    flexDirection: "column",
    fontSize: 12,
  },
  line: {
    borderBottom: 1,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  sideBySide: {
    display: "flex",
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 10,
    maxWidth: "40%",
    marginTop: 20,
  },
});

function TestDocument(props) {
  const [data, setData] = useState();
  const fetchData = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Hello Employee</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
          <Text style={styles.title}>Worth</Text>
          <Text style={styles.assetWorth}>
            Your current asset worth is -{" "}
            <Text style={{ color: "#EB6202" }}>86,000.34</Text>
          </Text>
          <Text style={styles.title}>ESOP Details</Text>
          <View style={styles.esopDetails}>
            <Text>esop details</Text>
            <View style={styles.grantsDetail}>
              <Text style={{ fontSize: 10, padding: "5,0" }}>
                Granted Options
              </Text>
              <Text style={{ fontSize: 10, padding: "5,0" }}>
                Net Vested Options
              </Text>
              <Text style={{ fontSize: 10, padding: "5,0" }}>
                Un Vested Options
              </Text>
              <Text style={{ fontSize: 10, padding: "5,0" }}>
                Exercised Options
              </Text>
              <Text style={{ fontSize: 10, padding: "5,0" }}>
                Forfeited Options
              </Text>
            </View>
          </View>
          <View style={styles.esopDetails}>
            <View style={styles.vestingDetails}>
              <Text>Vesting Schedule</Text>
              <Text style={styles.content}>
                Grant date as 01st October 2022
              </Text>
            </View>

            <ChartSvg
              width={500}
              height={400}
              style={{ padding: "20 0", margin: "5 0" }}
            >
              <SampleBarChart />
            </ChartSvg>
          </View>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
          <Text style={styles.title}>Asset Details</Text>
          <AssetTable data={props.data} />
        </View>
      </Page>
    </Document>
  );
}

module.exports = { TestDocument };
