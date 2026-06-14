import dotenv from "dotenv";
import express from "express"
import ejsLayout from "express-ejs-layouts"
import session from "express-session";
import nodemailer from "nodemailer"
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from "path"

import userRouter from "./src/routes/user.route.js";
import adminRouter from "./src/routes/admin.route.js";
import Product from "./src/model/product.model.js";
import Category from "./src/model/category.model.js";


dotenv.config()
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(`src`, `views`))
app.use(ejsLayout);
app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
   secret: `${process.env.SECRET_KEY}`,
   resave: false,
   saveUninitialized: true,
   cookie: {
      secure: false
   }
}))

app.use(cors());
app.use((req, res, next) => {
   res.locals.session = req.session;  //making session in all views
   next();
})

app.use((req, res, next) => {
  res.locals.req = req;
  next();
});


export const mailTransporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   requireTLS: true,
   //logger: true,
   //debug: true,
   auth: {
      user: `${process.env.OTP_SENDING_EMAIL}`,
      pass: `${process.env.OTP_SENDING_EMAIL_PWD}`
      //passorig Cimplona@99
   }
});


app.use(`/`, userRouter);
app.use(`/api/admin`, adminRouter)

// ⭐ SITEMAP ROUTE (Google SEO)
app.get("/sitemap.xml", async (req, res) => {
  try {
    const baseUrl = "https://blissshoppers.com";

    const products = await Product.find().select("_id updatedAt").lean();
    const categories = await Category.find().select("category updatedAt").lean();

    let urls = `
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    `;

    // ⭐ CATEGORY LINKS
    categories.forEach((cat) => {
      urls += `
        <url>
          <loc>${baseUrl}/allProducts?cat=${encodeURIComponent(cat.category)}&subCat=All</loc>
          <lastmod>${new Date(cat.updatedAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    });

    // ⭐ PRODUCT LINKS
    products.forEach((p) => {
      urls += `
        <url>
          <loc>${baseUrl}/productDetail/${p._id}</loc>
          <lastmod>${new Date(p.updatedAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);

  } catch (error) {
    console.error("Sitemap Error:", error);
    res.status(500).send("Error generating sitemap");
  }
});


export default app