const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/comments
router.get('/', async (req, res) => {
	try {
		const commentData = await Comment.findAll({
			attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at', 'updated_at'],
			include: [
				{
					model: User,
					attributes: ['username'],
				},
				{
					model: Post,
					attributes: ['post_title'],
				},
			],
		});

		res.status(200).json(commentData);
	} catch (err) {
		res.status(500).json(err);
	}
});


// GET /api/comments/:id
router.get('/:id', async (req, res) => {
	try {
		const commentData = await Comment.findByPk(req.params.id, {
			attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at', 'updated_at'],
			include: [
				{
					model: User,
					attributes: ['username'],
				},
				{
					model: Post,
					attributes: ['post_title'],
				},
			],
		});

		if (!commentData) {
			res.status(404).json({ message: 'No comment found with this id!' });
			return;
		}

		res.status(200).json(commentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST /api/comments
//router.post('/', async (req, res) => {
// router.post('/', withAuth, async (req, res) => {
// 	try {
// 		if (!req.session) {
// 			res.status(400).json({ message: 'You must be logged in to post a comment!' });
// 			return;
// 		}
// 		const commentData = await Comment.create({
// 			comment: req.body.comment,
// 			post_id: req.body.post_id,
// 			user_id: req.body.user_id,
// 		});
// 		res.status(200).json(commentData);
// 	} catch (err) {
// 		res.status(400).json(err);
// 	}
// });

router.post('/', withAuth, async (req, res) => {
	try {
		if (!req.session) {
			res.status(400).json({ message: 'You must be logged in to post a comment!' });
			return;
		}
		const commentData = await Comment.create({
			comment: req.body.comment,
			post_id: req.body.post_id,
			user_id: req.session.user_id
		});
		res.status(200).json(commentData);
		console.log(commentData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// PUT /api/comments/:id
// router.put('/:id', async (req, res) => {
router.put('/:id', withAuth, async (req, res) => {
	try {
		if (!req.session) {
			res.status(400).json({ message: 'You must be logged in to update a comment!' });
			return;
		}
		const commentData = await Comment.update(
			{
				comment: req.body.comment,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);

		if (!commentData) {
			res.status(404).json({ message: 'No comment found with this id!' });
			return;
		}

		res.status(200).json(commentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE /api/comments/:id
// router.delete('/:id', async (req, res) => {
router.delete('/:id', async (req, res) => {
	try {
		if (!req.session) {
			res.status(400).json({ message: 'You must be logged in to delete a comment!' });
			return;
		}
		const commentData = await Comment.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!commentData) {
			res.status(404).json({ message: 'No comment found with this id!' });
			return;
		}

		res.status(200).json(commentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;