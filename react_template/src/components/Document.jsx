const React = require('react');
const { Document, Page, Text, View, StyleSheet, Line } = require('@react-pdf/renderer');

const { SampleLineChart, SampleScatterChart, SampleBarChart } = require('./SampleChart');
const { ChartSvg } = require('./Chart');

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
  },
  welcome: {
    fontSize: 14,
    fontWeight: "bold",
    textDecoration: "none",
    paddingBottom: 15,
  },

  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
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

function TestDocument() {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.welcome}>Hello, Welcome</Text>
          <Text style={styles.chartTitle}>Bar Chart</Text>
          <ChartSvg width={800} height={600}>
            <SampleBarChart />
          </ChartSvg>
        </View>
      </Page>
    </Document>
  );
}

module.exports = { TestDocument };
