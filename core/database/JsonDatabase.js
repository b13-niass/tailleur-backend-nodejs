import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class JsonDatabase {
    constructor(filePath) {
        this.filePath = path.resolve(__dirname, filePath);
    }

    // Read all data from the JSON file
    readAll() {
        // return this.filePath;
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(fileContent);
        } catch (error) {
            if (error.code === 'ENOENT') {
                // File does not exist; return empty array
                return [];
            } else {
                throw error;
            }
        }
    }

    // Write (erase all and write) data to the JSON file
    writeAll(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf8');
    }
}

export default JsonDatabase;
