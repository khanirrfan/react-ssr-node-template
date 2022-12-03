const React = require("react");
const path = require("path");
const fs = require("fs");

const { renderToFile } = require("@react-pdf/renderer");
const { TestDocument } = require("./components/Document");

async function createPdfWithChart() {
  try {
    const pdfPath = path.join(
      __dirname,
      "..",
      "tmp",
      `my-doc-with-chart-${new Date().getTime()}.pdf`
    );
    console.log(`rendering chart to pdf...`);
    await renderToFile(
      <TestDocument
        data={[
          {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
            email: "Rey.Padberg@karina.biz",
            address: {
              street: "Kattie Turnpike",
              suite: "Suite 198",
              city: "Lebsackbury",
              zipcode: "31428-2261",
              geo: [Object],
            },
            phone: "024-648-3804",
            website: "ambrose.net",
            company: {
              name: "Hoeger LLC",
              catchPhrase: "Centralized empowering task-force",
              bs: "target end-to-end models",
            },
          },
          {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
            email: "Rey.Padberg@karina.biz",
            address: {
              street: "Kattie Turnpike",
              suite: "Suite 198",
              city: "Lebsackbury",
              zipcode: "31428-2261",
              geo: [Object],
            },
            phone: "024-648-3804",
            website: "ambrose.net",
            company: {
              name: "Hoeger LLC",
              catchPhrase: "Centralized empowering task-force",
              bs: "target end-to-end models",
            },
          },
          {
            id: 10,
            name: "Clementina DuBuque",
            username: "Moriah.Stanton",
            email: "Rey.Padberg@karina.biz",
            address: {
              street: "Kattie Turnpike",
              suite: "Suite 198",
              city: "Lebsackbury",
              zipcode: "31428-2261",
              geo: [Object],
            },
            phone: "024-648-3804",
            website: "ambrose.net",
            company: {
              name: "Hoeger LLC",
              catchPhrase: "Centralized empowering task-force",
              bs: "target end-to-end models",
            },
          },
        ]}
      />,
      pdfPath
    );

    console.log(`created pdf at ${pdfPath}`);
    return fs.readFileSync(pdfPath);
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { createPdfWithChart };
