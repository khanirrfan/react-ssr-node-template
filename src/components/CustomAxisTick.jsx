const React = require('react');

function CustomAxisTick({ x, y, stroke, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={-6}
        textAnchor="end"
        fontSize={10}
        fill="#666"
        // transform="rotate(-45)"
      >
        {payload.value}
      </text>
    </g>
  );
}

module.exports = { CustomAxisTick };
