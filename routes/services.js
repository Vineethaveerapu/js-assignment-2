import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/services");
});

export default router;
