import React, { Component } from "react";
import { connect } from "react-redux";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

class DanhSachSanPham extends Component {
  mangDienThoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "http://picsum.photos/200/300",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "http://picsum.photos/200/300",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "http://picsum.photos/200/300",
    },
  ];
  render() {
    let { gioHang } = this.props; 
    return (
      <div className="container">
        <h1 className="text-center">Danh Sach San Pham</h1>
        <div className="logo text-right" style={{ fontSize: 50, color: "red" }}>
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ fontSize: 50 }}
          ></i>
          ({gioHang.length})
        </div>
        <div className="row">
          <GioHang />
        </div>
        <div className="row">
          {this.mangDienThoai.map((sp, i) => {
            return (
              <div className="col-4" key={i}>
                <SanPham sanpham={sp} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.gioHangReducer,
  };
};


export default connect(mapStateToProps)(DanhSachSanPham);
