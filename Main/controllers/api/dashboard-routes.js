const express = require('express');
const router = express.Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

router.use(withAuth);

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User],
    });

    res.render('all-posts', {
      layout: 'dashboard',
      posts: posts.map((post) => post.get({ plain: true })),
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (post) {
      res.render('edit-post', {
        layout: 'dashboard',
        post: post.get({ plain: true }),
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
