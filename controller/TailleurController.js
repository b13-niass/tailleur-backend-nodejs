import {userInToken} from "../utils/utils.js";
import {PostModel} from "../model/PostModel.js";

class TailleurController {
    // postModel;
    constructor() {
        // this.postModel = new PostModel();
    }

    listMyAllPosts(req, res) {
            const postModel = new PostModel()
        try {
            const user = userInToken(req,res);
            const posts = postModel.all().filter(post => post.utilisateurId === user.id);
            return res.json(posts);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }

    async createPost(req, res) {
        try {
            const user = userInToken(req,res);
            // return res.json(req.body)
            const newPost = new PostModel({...req.body, utilisateurId: user.id});
            const result = await newPost.save();
            return res.status(201).json(result.attributes);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}

export default new TailleurController();
