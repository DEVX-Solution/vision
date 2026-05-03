const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, project: "Vision", status: "online" });
});

app.post("/api/lead", (req, res) => {
  const { plan, source } = req.body;
  console.log("Novo lead Vision:", { plan, source });
  res.json({ ok: true, message: "Lead recebido com sucesso!" });
});

const distPath = path.join(__dirname, "../client/dist");
app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Vision server rodando em http://localhost:${PORT}`);
});
