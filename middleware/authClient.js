import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        // res.json({ message: 'Access granted', user });
        if(user && user.role === 'client'){
            next();
        }else {
            res.status(403).json({message: 'KO'});
        }
    })
}