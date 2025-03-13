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

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await querySync(`DELETE FROM users WHERE id_user = ${id}`);
    res.json({
      status: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: `Delete user failed: ${error} ${id}`,
    });
  }
});

export default router;
