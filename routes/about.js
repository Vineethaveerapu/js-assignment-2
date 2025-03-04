import express from 'express';
import { aboutSubPages, pageData } from '../data/data.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/about', {
    isMain: true,
    aboutSubPages,
    pageData,
  });
});

// GET route for individual about page
router.get('/:slug', (req, res) => {
  const about = aboutSubPages.find((s) => s.slug === req.params.slug);

  if (!about) {
    return res.status(404).render('pages/404');
  }

  res.render('pages/about', {
    isMain: false,
    aboutSubPages,
    about,
  });
});

export default router;
