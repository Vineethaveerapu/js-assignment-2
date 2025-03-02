import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/common", { title: "Services", content: "Services" });
});

export default router;