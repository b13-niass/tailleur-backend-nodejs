import express from "express"
import tailleurController from "../controller/TailleurController.js";
import {isAuthenticated} from "../middleware/authTailleur.js";

const router = express.Router();

router.use(isAuthenticated);

router.route('/posts')
    .get(tailleurController.listMyAllPosts)
    .post(tailleurController.createPost);

router.route('/posts/:id').get();

router.route('/posts/:id/comments').post().get();

router.route('/posts/:id/comments/:commentId').get().delete().put();

router.route('/posts/:id/likes').get();

router.route('/posts/:id/likes/:userId').get().post().delete();

router.route('/posts/:id/dislikes').get();

router.route('/posts/:id/dislikes/:userId').get().post().delete();

router.route('/posts/:id/favorites').get();

router.route('/posts/:id/favorites/:userId').get().post().delete();

router.route('/signals').get().post();

router.route('/signals/:id').get().delete().put();

router.route('/posts/:id/note');

router.route('/notes/:userId').get().post();

router.route('/follows').get();

router.route('/follows/:userId').get().post().delete();

router.route('/notifications').get();

router.route('/notifications/:id').get().delete();

export {router};