// posts için gerekli routerları buraya yazın
const router = require('express').Router();
const Posts = require('./posts-model');

// GET ALL POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      message: 'Gönderiler alınamadı',
    });
  }
});

// GET POST BY ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Belirtilen ID'li gönderi bulunamadı",
      });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: 'Gönderi bilgisi alınamadı',
    });
  }
});

// CREATE POST
router.post('/', async (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res.status(400).json({
      message: 'Lütfen gönderi için bir title ve contents sağlayın',
    });
  }

  try {
    const created = await Posts.insert({ title, contents });
    const newPost = await Posts.findById(created.id);

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({
      message: 'Veritabanına kaydedilirken bir hata oluştu',
    });
  }
});

// UPDATE POST
router.put('/:id', async (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res.status(400).json({
      message: 'Lütfen gönderi için title ve contents sağlayın',
    });
  }

  try {
    const existing = await Posts.findById(req.params.id);

    if (!existing) {
      return res.status(404).json({
        message: "Belirtilen ID'li gönderi bulunamadı",
      });
    }

    await Posts.update(req.params.id, { title, contents });

    const updated = await Posts.findById(req.params.id);

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({
      message: 'Gönderi bilgileri güncellenemedi',
    });
  }
});

// DELETE POST
router.delete('/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Belirtilen ID li gönderi bulunamadı",
      });
    }

    await Posts.remove(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: 'Gönderi silinemedi',
    });
  }
});

// GET COMMENTS
router.get('/:id/comments', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Girilen ID'li gönderi bulunamadı.",
      });
    }

    const comments = await Posts.findPostComments(req.params.id);

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({
      message: 'Yorumlar bilgisi getirilemedi',
    });
  }
});

module.exports = router;