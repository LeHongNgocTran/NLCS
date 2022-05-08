const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "qlyquanao",
});

connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});

app.get("/api/sanpham", (req, res) => {
  var sql = "SELECT * FROM sanpham";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ allProduct: results });
  });
});

app.get("/api/loaisanpham", (req, res) => {
  var sql = "SELECT * FROM loaisanpham";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ typeProduct: results });
  });
});

app.post("/api/nguoidung", (req, res) => {
  Username = req.body.Username;
  Email = req.body.Email;
  Name = req.body.Name;
  Phone = req.body.Phone;
  Ngaysinh = req.body.Ngaysinh;
  Gioitinh = req.body.Gioitinh;
  Password = req.body.Password;
  connection.query(
    "insert into nguoidung(hoten_nguoi_dung,sdt_nd,ngay_sinh_nd,gioi_tinh_nd,email,username) values (?,?,?,?,?,?)",
    [Name, Phone, Ngaysinh, Gioitinh, Email, Username],
    function (err, results) {
      let id = results.insertId;
      connection.query(
        "insert into taikhoan(ten_dang_nhap,matkhau,ma_nguoi_dung) values(?,?,?)",
        [Email, Password, id],
        function (err, results) {
          if (err) {
            res.send({ message: "Tài khoản đã tồn tại" });
            connection.query(
              "delete from nguoidung where ma_nguoi_dung = ? ",
              [id],
              function (err, results) {
                console.log(err);
              }
            );
          } else {
            const maGH = results.insertId;
            res.send({ message: "success" });
            connection.query(
              "insert into giohang (ma_gio_hang,ma_nguoi_dung) values(?,?)",
              [maGH, id],
              function (err, result) {
                console.log(err);
              }
            );
          }
        }
      );
    }
  );
});

app.get("/api/giohang",(res,req) => {
    maKH: req.body.maKH;
    connection.query("SELECT * FROM GIOHANG WHERE ma_nguoi_dung = ?",[maKH],
    function (err, result) {
      res.json({cart: result})
    })
})

app.post("/api/login", (req, res) => {
  Email = req.body.Email;
  Password = req.body.Password;
  connection.query(
    "select * from taikhoan t join nguoidung k on t.ma_nguoi_dung = k.ma_nguoi_dung where email  = ? and matkhau = ? ",
    [Email, Password],
    function (err, results) {
      if (err) {
        res.send({ err: err });
      }
      if (results.length > 0) {
        res.send(results);
      } else {
        res.send({ message: "Sai tài khoản hoặc mật khẩu" });
      }
    }
  );
});

app.post("/api/addgiohang", (req, res) => {
  maSP = req.body.maSP;
  maKH = req.body.maKH;
  soluong = req.body.soluong;
  connection.query(
    "select * from giohang where ma_nguoi_dung = ? ",
    [maKH],
    function (err, result) {
      connection.query(
        "select * from chitietgiohang c join giohang g on g.ma_gio_hang = c.ma_gio_hang where ma_nguoi_dung = ? and ma_sp= ? ;",
        [maKH, maSP],
        function (err, results) {
          if (err) {
            console.log(err);
          }
          if (results.length > 0) {
            soluong = soluong + results[0].soluong;
            connection.query(
              "update chitietgiohang set soluong= ? where ma_sp= ? and ma_gio_hang= ? ;",
              [soluong, maSP, results[0].ma_gio_hang],
              function (err, results) {
                if (err) {
                  console.log(err);
                }
              }
            );
          } else {
            connection.query(
              "insert into chitietgiohang(ma_gio_hang,ma_sp,soluong) value (?, ?, ?)",
              [result[0].ma_gio_hang, maSP, soluong],
              function (err, results) {
                if (err) {
                  console.log("inssert", err);
                }
              }
            );
          }
        }
      );
    }
  );
});

app.post("/api/getCart", (req, res) => {
  maKH = req.body.maKH;
  connection.query(
    "select * from chitietgiohang c join giohang g on c.ma_gio_hang = g.ma_gio_hang join sanpham s on c.ma_sp = s.ma_sp where g.ma_nguoi_dung = ? ;",
    [maKH],
    function (err, results) {
      if (err) console.log(err);
      else {
        res.send({ carts: results });
      }
    }
  );
});

app.post("/api/deleteProduct", (req, res) => {
  maSP = req.body.maSP;
  maGH = req.body.maGH;
  connection.query(
    "delete from chitietgiohang where ma_sp = ? and ma_gio_hang = ?",
    [maSP, maGH]
  );
});

app.post("/api/hoadon", (req, res) => {
  maKH = req.body.maKH;
  maGH = req.body.maGH;
  total = req.body.total;
  diachinguoidung = req.body.diachinguoidung;
  connection.query(
    "insert into hoadon(ma_gio_hang,ma_nguoi_dung,tong_tien,diachigiaohang)values(?,?,?,?)",
    [maKH, maGH, total, diachinguoidung],
    function (err, result) {
      if (err) console.log(err);
    }
  );
});
app.post("/api/deleteproductadmin", (req, res) => {
  maSP = req.body.maSP;
  connection.query(
    "delete from sanpham where ma_sp = ?",
    [maSP],
    function (err) {
      if (err) console.log(err);
    }
  );
});
app.post("/api/addProduct", (req, res) => {
  maSP = req.body.maSP;
  maLSP = req.body.maLSP;
  tenSP = req.body.tenSP;
  giaSP = req.body.giaSP;
  image = req.body.image;
  chatlieu = req.body.chatlieu;
  mausac = req.body.mausac;
  kichthuoc = req.body.kichthuoc;
  connection.query(
    "insert into sanpham(ma_sp,ten_sp,gia_sp,image,chatlieu,malsp,mausac,kichthuoc) values(?,?,?,?,?,?,?,?)",
    [maSP, tenSP, giaSP, image, chatlieu, maLSP, mausac, kichthuoc],
    function (err, results) {
      if (err) res.send({message: err})
      else res.send({message: 'success'})
    }
  );
});

app.get("/api/listUser", (req, res) => {
  var sql = "SELECT * FROM nguoidung where ma_nguoi_dung > 1";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json({ listUser: results });
  });
});

app.post("/api/searchProduct", (req,res) => {
  tenSP : req.body.tenSP;
  var sql = "SELECT * FROM SANPHAM WHERE ten_san_pham like '%?%'";
  connection.query(sql,[tenSP],
    function(err, results) {
      if (err) console.log(err);
      // else (
        
      // )
    })
})
app.listen(3001, () => console.log("App listening on port 3001"));
