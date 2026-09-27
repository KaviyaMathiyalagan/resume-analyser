const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");

const app = express();

const upload = multer({
  storage: multer.memoryStorage(), // keep the file in memory, nothing written to disk
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", "Only PDF files are allowed"));
    }
  },
});

app.post("/upload-resume", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded. Send a PDF in the 'resume' field." });
    }

    const data = await pdfParse(req.file.buffer);
    const text = data.text.trim();

    if (!text) {
      return res.status(422).json({ success: false, error: "The PDF was uploaded, but no readable text could be extracted from it." });
    }

    return res.status(200).json({
      success: true,
      pages: data.numpages,
      content: text,
    });
  } catch (err) {
    console.error("PDF parsing failed:", err.message);
    return res.status(422).json({ success: false, error: "The file could not be parsed as a PDF." });
  }
});

// Multer errors (file too big, wrong type, etc.)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(413).json({ success: false, error: "File is too large. Maximum size is 5 MB." });
    }
    return res.status(400).json({ success: false, error: err.field || err.message });
  }
  return res.status(500).json({ success: false, error: "Something went wrong on the server." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
