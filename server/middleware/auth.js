import jwt, { decode } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = async (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];

        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            // sub is google's name for a specific id that differentiates google users
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;