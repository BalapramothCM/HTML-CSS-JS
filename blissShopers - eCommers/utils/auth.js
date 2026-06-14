import jwt from 'jsonwebtoken';

export const jwtAuth = (req, res, next) => {
   const token = req?.cookies?.authToken;

   if (!token) {
      return res.status(401).redirect("/api/admin/login")
   }

   try {
      const payload = jwt.verify(token, process.env.SECRET_KEY)
      // req.userId = payload.id;
      req.email = payload.email;
   }
   catch (err) {
      return res.status(401).redirect("/api/admin/login")
   }

   next()
}