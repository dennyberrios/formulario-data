import express from "express";
import { querySync } from "../mysql.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const query =
    "SELECT id_user, name, email, cpf, date_account_created, dateOfBirth FROM users WHERE email = ? AND password = md5(?)";
  try {
    const data = await querySync(query, [email, password]);
    if (data.length > 0) {
      res.json({
        result: data,
        status: true,
        message: "Success",
      });
    } else {
      res.json({
        status: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.json({
      status: false,
      message: `Login failed: ${error}`,
    });
  }
});

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

router.get("/search/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await querySync("SELECT * FROM users WHERE id_user = ?", [id]);
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

router.post("/add", async (req, res) => {
  const { name, email, cpf, password, dateOfBirth } = req.body;
  const query =
    "INSERT INTO users (name, email, cpf, password, date_account_created, dateOfBirth) VALUES (?, ?, ?, md5(?), CURRENT_TIMESTAMP, ?)";
  try {
    await querySync(query, [name, email, cpf, password, dateOfBirth]);
    res.json({
      status: true,
      message: "User added successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: `Add user failed: ${error}`,
    });
  }
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, cpf, password, dateOfBirth } = req.body;
  const query =
    "UPDATE users SET name = ?, email = ?, cpf = ?, password = ?, dateOfBirth = ? WHERE id_user = ?";
  try {
    await querySync(query, [name, email, cpf, password, dateOfBirth, id]);
    res.json({
      status: true,
      message: "User updated successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: `Update user failed: ${error}`,
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
