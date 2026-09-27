// Quick smoke test: starts the server, uploads a generated PDF, prints the response.
const { spawn } = require("child_process");
const http = require("http");

const server = spawn("node", ["index.js"]);
server.stdout.on("data", (d) => process.stdout.write(d));
server.stderr.on("data", (d) => process.stderr.write(d));
server.on("exit", (code) => {
  if (code !== null && code !== 0) {
    console.error("server exited with code", code);
    process.exit(1);
  }
});

setTimeout(() => {
  const pdf =
    "%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n" +
    "3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj\n" +
    "4 0 obj<</Length 58>>stream\nBT /F1 12 Tf 72 720 Td (Hello Resume World) Tj ET\nendstream endobj\n" +
    "5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj\n" +
    "xref\n0 6\n0000000000 65535 f \ntrailer<</Root 1 0 R/Size 6>>\nstartxref\n410\n%%EOF";

  const boundary = "----testboundary";
  const body = Buffer.concat([
    Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="resume"; filename="resume.pdf"\r\nContent-Type: application/pdf\r\n\r\n`),
    Buffer.from(pdf),
    Buffer.from(`\r\n--${boundary}--\r\n`),
  ]);

  const req = http.request(
    {
      host: "localhost",
      port: 5000,
      path: "/upload-resume",
      method: "POST",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "Content-Length": body.length,
      },
    },
    (res) => {
      let d = "";
      res.on("data", (c) => (d += c));
      res.on("end", () => {
        console.log(res.statusCode, d);
        server.kill();
        process.exit(0);
      });
    }
  );
  req.write(body);
  req.end();
}, 1500);
