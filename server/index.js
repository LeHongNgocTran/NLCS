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
// Lấy API của sản phẩm
app.get("/api/sanpham", (req, res) => {
  var sql = "SELECT * FROM sanpham";
  connection.query(sql, function (err, results) {
    if (err) console.log(err);
    res.json({ allProduct: results });
  });
});
// Lấy api của loại sản phẩm
app.get("/api/loaisanpham", (req, res) => {
  var sql = "SELECT * FROM loaisanpham";
  connection.query(sql, function (err, results) {
    if (err) console.log(err);
    res.json({ typeProduct: results });
  });
});
//Chèn dữ liệu người dùng vào API
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
// Kiểm tra tài khoản và mật khẩu
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
// Thêm vào giỏ hàng
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
// Lấy api của chi tiết giở hàng
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
// Xóa sản phẩm
app.post("/api/deleteProduct", (req, res) => {
  maSP = req.body.maSP;
  maGH = req.body.maGH;
  connection.query(
    "delete from chitietgiohang where ma_sp = ? and ma_gio_hang = ?",
    [maSP, maGH]
  );
});
// Chèn dữ liệu vào bảng hóa đơn
app.post("/api/hoadon", (req, res) => {
  maKH = req.body.maKH;
  maGH = req.body.maGH;
  total = req.body.total;
  diachinguoidung = req.body.diachinguoidung;
  soluong = req.body.soluong;
  trangthai = req.body.trangthai;
  connection.query(
    "insert into hoadon(ma_gio_hang,ma_nguoi_dung,ngaydathang,tong_tien,diachigiaohang,trangthai)values(?,?,now(),?,?,?)",
    [maGH, maKH, total, diachinguoidung, trangthai],
    function (err, results) {
      if (err) console.log(err);
      else {
        let maHD = results.insertId;
        connection.query(
          "select * from chitietgiohang where ma_gio_hang = ?",
          [maGH],
          function (err, result) {
            if (err) console.log(err);
            else {
              result.forEach((event) => {
                connection.query("insert into chitiethoadon values (?,?,?)", [
                  maHD,
                  event.ma_sp,
                  event.soluong,
                ]);
                connection.query(
                  "delete from chitietgiohang where ma_sp = ? and ma_gio_hang = ?",
                  [event.ma_sp, maGH]
                );
              });
            }
          }
        );
      }
    }
  );
});

// Xóa sản phẩm trong Admin
app.post("/api/deleteProductAdmin", (req, res) => {
  maSP = req.body.maSP;
  connection.query(
    "delete from sanpham where ma_sp = ?",
    [maSP],
    function (err) {
      if (err) console.log(err);
    }
  );
});
// Thêm sản phẩm ở Admin
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
      if (err) res.send({ message: err });
      else res.send({ message: "success" });
    }
  );
});
// Danh sách người dùng
app.get("/api/listUser", (req, res) => {
  var sql = "SELECT * FROM nguoidung where ma_nguoi_dung > 1";
  connection.query(sql, function (err, results) {
    if (err) console.log(err);
    else res.json({ listUser: results });
  });
});
// Tìm sản phẩm
app.post("/api/searchProduct", (req, res) => {
  tenSP = req.body.tenSP;
  connection.query(
    "SELECT * FROM SANPHAM WHERE ten_sp like ? ",
    ["%" + tenSP + "%"],
    function (err, results) {
      if (err) console.log(err);
      else {
        res.json({ searchProduct: results });
      }
    }
  );
});
// Chỉnh sửa sản phẩm
app.post("/api/editProduct", (req, res) => {
  tenSP = req.body.tenSP;
  giaSP = parseInt(req.body.giaSP);
  image = req.body.image;
  chatlieu = req.body.chatlieu;
  maLSP = req.body.maLSP;
  mausac = req.body.mausac;
  kichthuoc = req.body.kichthuoc;
  maSP = req.body.maSP;
  connection.query(
    "UPDATE sanpham SET ten_sp=?,gia_sp=?,image=?,chatlieu=?,malsp=?,mausac=?,kichthuoc=? WHERE ma_sp=?",
    [tenSP, giaSP, image, chatlieu, maLSP, mausac, kichthuoc, maSP],
    function (err) {
      console.log(err);
    }
  );
});

app.get("/api/Bill", (req, res) => {
  // maKH = req.body.maKH;
  connection.query(
    "SELECT  h.ma_hoa_don,n.hoten_nguoi_dung,n.sdt_nd,h.ngaydathang,h.tong_tien,h.diachigiaohang,n.email,n.username,n.ma_nguoi_dung,h.trangthai FROM HOADON H JOIN NGUOIDUNG N ON H.MA_NGUOI_DUNG = N.MA_NGUOI_DUNG",
    function (err, results) {
      if (err) console.log(err);
      else res.json({ listBill: results });
    }
  );
});

app.post("/api/detailsBill", (req, res) => {
  maHD = req.body.maHD;
  connection.query(
    "SELECT * FROM HOADON H JOIN chitiethoadon c ON h.ma_hoa_don = c.ma_hoa_don join sanpham s on s.ma_sp = c.ma_sp where h.ma_hoa_don = ? ",
    [maHD],
    function (err, results) {
      if (err) console.log(err);
      else {
        res.json({ detailBill: results });
      }
    }
  );
});

app.post("/api/setStatusBill", (req, res) => {
  maHD = req.body.maHD;
  connection.query(
    "UPDATE HOADON SET trangthai='Đã xác nhận' where ma_hoa_don = ? ",
    [maHD],
    function (err) {
      console.log(err);
    }
  );
}); 

app.post("/api/Cancelbill", (req, res) => {
  maHD = req.body.maHD;
  connection.query(
    "UPDATE HOADON SET trangthai='Hủy đơn hàng' where ma_hoa_don = ? ",
    [maHD],
    function (err) {
      console.log(err);
    }
  );
}); 

app.listen(3001, () => console.log("App listening on port 3001"));
