import jwt from 'jsonwebtoken';
import { findUserRepo, resetPasswordRepo } from '../repo/admin.repo.js';

//admin get routes controller.
export const getLoginView = (req, res) => {
   if (req.session.email) {
      return req.session.destroy((err) => {
         if (err) {
            return res.status(500).json({ message: 'Internal error occurred while logging out.' });
         }
         res.clearCookie('connect.sid'); // Clear session cookie (for express-session)
         res.clearCookie('authToken');
         // Adjust the redirect path if needed
         return res.redirect('/api/admin/login');
      });
   }

   return res.render(
      'admin/admin_login'
      , {
         isError: false,
         errorMessage: '',
         layout: 'layouts/admin_layout'
      });
}

export const dashboardView = (req, res) => {
   res.status(200).render("admin/admin_dashboard", { layout: 'layouts/admin_layout' })
}

export const settingView = (req, res) => {
   res.status(200).render("admin/admin_setting", {
      isError: false
      , layout: 'layouts/admin_layout'
   })
}

export const logout = (req, res) => {
   if (req.session.email && req.cookies.authToken) {
      return req.session.destroy((err) => {
         if (err) {
            return res.status(500).json({ message: "Some Internal error occur while going to login." });
         }
         res.clearCookie("connect.sid"); // Clear session cookie (for express-session)
         res.clearCookie("authToken");
         res.status(200).redirect("/api/admin/login");
      });
   }
}

//admin post routes controller
export const login = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email && !password) {
         return res.status(400).render(
            "admin/admin_login"
            , {
               isError: true
               , errorMessage: "Please enter email and password."
               , layout: 'layouts/admin_layout'
            }
         )
      }

      const isExistingUser = await findUserRepo(email);
      if (!isExistingUser.success) {
         return res.status(400).render(
            "admin/admin_login"
            , {
               isError: true
               , errorMessage: "Email does not exist. Please register."
               , layout: 'layouts/admin_layout'
            })
      }

      const isPassMatch = await isExistingUser.userData.comparePassword(password);
      if (!isPassMatch) {
         return res.status(400).render(
            "admin/admin_login"
            , {
               isError: true
               , errorMessage: "Password Incorrect."
               , layout: 'layouts/admin_layout'
            })
      }

      const token = jwt.sign(
         {
            email: isExistingUser.userData.email,
            id: isExistingUser.userData._id
         },//payload
         process.env.SECRET_KEY, //secret key
         { expiresIn: '1h' } //duration time
      )

      req.session.email = email
      req.session.role = isExistingUser.userData.role

      res.cookie("authToken", token, { httpOnly: true, maxAge: 3600000 });
      return res.status(200).redirect("/api/admin/dashboard");
   }
   catch (err) {
      console.log(err);

      return res.status(400).render(
         "admin/admin_login",
         {
            isError: true
            , errorMessage: err.message
            , layout: 'layouts/admin_layout'
         })
   }
}


export const resetPassword = async (req, res) => {
   try {
      const { oldPassword, newPassword, confirmPassword } = req.body;

      // Get from session
      const email = req.session.email;

      if (!email) {
         return res.status(200).redirect("/api/admin/login");
      }

      // New match check
      if (newPassword !== confirmPassword) {
         return res.status(400).render(
            "admin/admin_setting",
            {
               isError: true
               , errorMessage: "Passwords do not match"
               , layout: 'layouts/admin_layout'
            })
      }

      // Fetch admin
      const admin = await findUserRepo(email);
      if (!admin) {
         return res.status(200).redirect("/api/admin/login");
      }

      // Validate old password
      const isMatch = await admin.userData.comparePassword(oldPassword);
      if (!isMatch) {
         return res.status(400).render(
            "admin/admin_setting",
            {
               isError: true
               , errorMessage: "Old password incorrect"
               , layout: 'layouts/admin_layout'
            })
      }
      // Call Repo (this will hash automatically)
      await resetPasswordRepo(email, newPassword);

      return res.status(400).render(
         "admin/admin_setting",
         {
            isError: true
            , errorMessage: "Password updated successfully"
            , layout: 'layouts/admin_layout'
         })
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
   }
};