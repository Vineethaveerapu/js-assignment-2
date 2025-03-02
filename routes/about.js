import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/common", { title: "About", content: "About" });
});

export default router;