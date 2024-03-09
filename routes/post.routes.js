import {Router} from "express";
import PostController from "../controllers/post.controller.js";

const postRouter = new Router();

postRouter.get('/posts', PostController.getAll);
postRouter.post('/posts', PostController.create);
postRouter.get('/posts/:id', PostController.getById);
postRouter.put('/posts', PostController.update);
postRouter.delete('/posts/:id', PostController.delete);

export default postRouter;