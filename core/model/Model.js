import db from "../../db/other.js";
// import JsonDatabase from '../database/JsonDatabase.js'; // or './JsonDatabase.js' if using .js with "type": "module"
//
// const jsonDatabase = new JsonDatabase('../../db/db.json');
//
// // Read all data from the JSON file
// const db = jsonDatabase.readAll();

export class Model {
     // db = [];
    // table = ""
    constructor(table,attributes = {}) {
        this.table = table;
        this.id = attributes.id || db[this.table].length + 1;
        this.attributes = attributes;
    }

    // Fetch all records
     all() {
        return db[this.table];
    }

    // Find a record by ID
     findById(id) {
        return db[this.table].find(record => record.id === id);
    }

    // Save a new record
    save() {
        db[this.table].push(this.attributes);
        // jsonDatabase.writeAll(db);
        return this;
    }

    // Update an existing record
    update(newAttributes) {
        const index = db[this.table].findIndex(record => record.id === this.id);
        if (index !== -1) {
            db[this.table][index] = { ...db[this.table][index], ...newAttributes };
            this.attributes = { ...this.attributes, ...newAttributes };
        }
        return this;
    }

    // Delete a record
    delete() {
        db[this.table] = db[this.table].filter(record => record.id !== this.id);
    }
}
