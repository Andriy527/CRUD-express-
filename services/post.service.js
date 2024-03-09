import postModel from '../models/post.model.js';

class PostService {

    async add(post) {
        const newPost = await postModel.create(post);

        return newPost;
    }

    async getAll() {
       const posts =  await postModel.find();

       return posts;
    }

    async getById(id) {
        const post = await postModel.findById(id);

        return post;
    }

    async update(post) {
        const updatedPost = await postModel.findByIdAndUpdate(post._id, post, {new: true});

        return updatedPost;
    }

    async delete(id) {
        const removedPost = await postModel.findOneAndDelete(id);

        return removedPost;
    }
}

export default new PostService();