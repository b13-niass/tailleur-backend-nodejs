import {Model} from "../core/model/Model.js";
export class NoteModel extends Model{
    constructor(init) {
        super("notes", init);
    }
}