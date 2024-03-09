import PostServices from "../services/post.service.js";

class PostController {
    async create(req, res) {
        try {
            const newPost = await PostServices.add(req.body);

            res.json(newPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostServices.getAll();

            res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getById(req, res) {
        try {
            const post = await PostServices.getById(req.params.id);

            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostServices.update(req.body);

            res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const deletedPost = await PostServices.delete(req.params.id);

            res.json(deletedPost);

        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();