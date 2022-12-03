const express = require('express');
const { createPdfWithChart } = require("./createPdf");

const app = express();

app.get("/", async (req, res) => {
  try {
    const pdf = await createPdfWithChart();
    res.contentType("application/pdf");
    res.send(pdf);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
