import express from "express";
import { splitBill } from "./split.js";

const app = express();
app.use(express.json());

app.post("/split", (req, res) => {
  const { total, people, tipPercent } = req.body;
  const amounts = splitBill({ total, people, tipPercent });
  res.status(200).json({ amounts });
});

export default app;