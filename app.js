const { count } = require('console');
const express = require('express');
const app = express();
const port = 4000;

// ตั้งค่า EJS เป็น template engine
app.set('view engine', 'ejs');
app.set('views', './views'); // บอก Express ว่าไฟล์ EJS อยู่ในโฟลเดอร์ 'views'

// Middleware สำหรับการ parse JSON body ใน request (สำหรับ API)
app.use(express.json());
// Middleware สำหรับการ parse URL-encoded body (สำหรับ form submissions)
app.use(express.urlencoded({ extended: true }));
// Middleware สำหรับ serving static files (CSS, JS, images)
app.use(express.static('public'));

const HomePage = "./views/HomePage";

// GET / - หน้าแรก (แสดงเมนูและฟอร์มสั่งอาหาร)
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get("/index1", (req, res) => {
  res.render("HomePage");
});

// --- เริ่มต้น Server --- npm start app.js
app.listen(port, () => {
    console.log(`Web App is running on http://localhost:${port}`);
});