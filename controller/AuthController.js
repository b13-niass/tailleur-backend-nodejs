import db from "../db/other.js";
import jwt from "jsonwebtoken";
import {userInToken} from "../utils/utils.js";

import {verifyPassword, hashPassword} from "../utils/utils.js";
import {UtilisateurModel} from "../model/UtilisateurModel.js";

// import JsonDatabase from '../core/database/JsonDatabase.js'; // or './JsonDatabase.js' if using .js with "type": "module"
//
// const jsonDatabase = new JsonDatabase('../../db/db.json');
//
// // Read all data from the JSON file
// const db = jsonDatabase.readAll();

class AuthController {

    async login(req, res) {
        // return res.json(db);
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({error: 'Please provide email and password'});
        }

        const user = db.utilisateurs.find(u => u.email === email);

        if (!user) {
            return res.status(401).json({error: 'Invalid Credentials'});
        }
        // return res.json({password,user})
        if (!await verifyPassword(password, user.password)) {
            return res.status(401).json({error: 'Invalid Credentials'});
        }

        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '2h'});
        return res.status(200).json({message: 'OK', token: token});
    }

    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({status: false});
            }
            res.json({status: true});
        });
    }

    async register(req, res) {
        const {nom, prenom, image, email, password, role} = req.body;

        if (!nom || !prenom || !image || !email || !password || !role) {
            return res.status(400).json({message: 'Field must be a valid'});
        }
        if (db.utilisateurs.some(u => u.email === email)) {
            return res.status(400).json({message: 'Email already exists'});
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new UtilisateurModel({
            nom,
            prenom,
            image,
            email,
            password: hashedPassword,
            role
        });

        return res.json(newUser.save());
    }

    userProfile(req, res) {
        return res.json(userInToken(req, res));
    }

}

export default new AuthController();

// jwtwebtoken
// bcryptjs