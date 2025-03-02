import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/common", { title: "Contact", content: "Contact" });
});

export default router;