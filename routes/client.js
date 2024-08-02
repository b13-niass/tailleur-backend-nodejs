import express from "express"
import clientController from "../controller/ClientController.js";
import {isAuthenticated} from "../middleware/authClient.js";

const router = express.Router();

router.use(isAuthenticated);

router.route('/posts').get();

router.route('/posts/:id').get();

router.route('/posts/:id/comments').post().get();

router.route('/posts/:id/comments/:commentId').get().delete().put();

router.route('/posts/:id/likes').get();

router.route('/posts/:id/likes/:userId').get().post().delete();

router.route('/posts/:id/dislikes').get();

router.route('/posts/:id/dislikes/:userId').get().post().delete();

router.route('/posts/:id/favorites').get();

router.route('/posts/:id/favorites/:userId').get().post().delete();

router.route('/:id/signals').get().post();

router.route('/signals/:id').get().delete().put();

router.route('/notes/:userId').get().post();

router.route('/follows').get();

router.route('/follows/:userId').get().post().delete();

router.route('/notifications').get();

router.route('/notifications/:id').get().delete();


export {router};