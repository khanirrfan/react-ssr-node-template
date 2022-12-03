const React = require("react");
const { View } = require("@react-pdf/renderer");
const { InvoiceTableHeader } = require("./tableHeader");
const { InvoiceTableRow } = require("./tableRow");

function AssetTable({ data }) {
  return (
    <View>
      <InvoiceTableHeader />
      <InvoiceTableRow rowData={data} />
    </View>
  );
}
module.exports = { AssetTable };
