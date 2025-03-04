import express from "express";
import { services, pageData } from "../data/data.js";

const router = express.Router();

// GET route for services listing page
router.get("/", (req, res) => {
  res.render("pages/services", {
    services,
    pageData,
  });
});

// GET route for individual service page
router.get("/:slug", (req, res) => {
  const service = services.find((s) => s.slug === req.params.slug);

  if (!service) {
    return res.status(404).render("pages/service-detail", {
      service: null,
      pageData: {
        title: "Service Not Found",
        tagline: "The service you're looking for doesn't exist",
      },
    });
  }

  res.render("pages/service-detail", {
    service,
    pageData: {
      title: service.title,
      tagline: service.description,
    },
  });
});

export default router;
