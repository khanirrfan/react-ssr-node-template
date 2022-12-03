const React = require("react");
const {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianAxis,
} = require("recharts");

const { CustomAxisTick } = require("../CustomAxisTick");

function CustomBarChart({ data }) {
  return (
    <BarChart width={400} height={200} data={data} margin={20}>
      <CartesianGrid horizontal={true} vertical={false} />
      <XAxis dataKey="name" tick={<CustomAxisTick />} tickMargin={10} />
      <YAxis fontSize={12} tickMargin={10} />
      <Bar dataKey="pv" fill="#F5AA21" barSize={20} />
    </BarChart>
  );
}

module.exports = { CustomBarChart };
