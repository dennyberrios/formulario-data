import express from "express";
import { querySync } from "../mysql.js";
const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const data = await querySync("SELECT * FROM users");
    res.json({
      result: data,
      status: true,
      message: "Success",
    });
  } catch (error) {
    res.json({
      status: false,
      message: `Get users failed: ${error}`,
    });
  }
});

export default router;
