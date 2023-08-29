const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "trandoquanghuy123@gmail.com",
//     pass: "stbhgsclskiapsfn",
//   },
// });

// var mailOptions = {
//   from: "trandoquanghuy123@gmail.com",
//   to: "gabistore555@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

const port = 8000;
const salt = 10;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "./views");

// database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cloth_shopping",
});

// app.get("/", (req, res) => {
//   res.render("home");
// });

// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ Error: "You are not authen" });
//   } else {
//     jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
//       if (err) {
//         return res.json({ Error: "Authen Error" });
//       } else {
//         req.name = decoded.name;
//         next();
//       }
//     });
//   }
// };

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authen" });
  } else {
    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Authen Error" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};
app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "SUCCESS", name: req.name });
});

app.get("/cate", (req, res) => {
  const sql = `SELECT * FROM danhmuc `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/products", (req, res) => {
  const sql = `SELECT * FROM products `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/users", (req, res) => {
  const sql = `SELECT * FROM account_users `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/blog", (req, res) => {
  const sql = `SELECT * FROM blog `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/shirts", (req, res) => {
  const sql = `SELECT * FROM products WHERE id_danhmuc = 1 `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/polos", (req, res) => {
  const sql = `SELECT * FROM products WHERE id_danhmuc = 2 `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/pants", (req, res) => {
  const sql = `SELECT * FROM products WHERE id_danhmuc = 3 `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/best_seller", (req, res) => {
  const sql = `SELECT * FROM products WHERE buy >= 500  order by id desc `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.get("/new", (req, res) => {
  const sql = `SELECT * FROM products WHERE new = 1  order by id desc `;
  db.query(sql, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
});

app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO account_users (`full_name` , `phone` , `email` , `user_name` , `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ ERROR: "Error for hassing password" });
    const values = [
      req.body.full_name,
      req.body.phone,
      req.body.email,
      req.body.user_account,
      hash,
    ];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ ERROR: "Inserting data FAIL" });
      return res.json({ Status: "SUCCESS" });
    });
  });
});

// Login
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM account_users WHERE user_name = ? ";
  db.query(sql, [req.body.user_account], (err, data) => {
    if (err) return res.json({ Error: "Login error in server" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Mật khẩu không đúng" });
          // Trạng thái thành công
          if (response) {
            const name = data[0].user_name;
            const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
              expiresIn: "1d",
            });
            // Tạo cokkie
            res.cookie("token ", token);
            return res.json({ Status: "SUCCESS" });
          } else {
            return res.json({ Error: "Mật khẩu không đúng" });
          }
        }
      );
    } else {
      return res.json({ Error: "Tài khoản không tồn tại" });
    }
  });
});

// Logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "SUCCESS" });
});

app.post("/forget_password", (req, res) => {
  const { email } = req.body;
});

app.listen(port, () => {
  console.log(`Project is running at ${port}`);
});
