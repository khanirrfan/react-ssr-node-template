const React = require("react");
const { View } = require("@react-pdf/renderer");
const { InvoiceTableHeader } = require("./tableHeader");
const { InvoiceTableRow } = require("./tableRow");

function AssetTable(props) {
  return (
    <View>
      <InvoiceTableHeader />
      <InvoiceTableRow rowData={props.data} />
    </View>
  );
}
module.exports = { AssetTable };
