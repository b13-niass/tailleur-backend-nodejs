import {Model} from "../core/model/Model.js";
export class PostModel extends Model{
    constructor(init= {}) {
        super("posts", init);
    }
}