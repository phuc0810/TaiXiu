import React, { Component } from "react";
import { connect } from "react-redux";

export class SanPham extends Component {
  render() {
    let { sanpham } = this.props;
    return (
      <div className="card bg-dark text-white">
        <img src={sanpham.hinhAnh} alt="..." className="100vh 100wh" />
        <div className="card-body">
          <p>ten SP: {sanpham.tenSP}</p>
          <p>gia SP: {sanpham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(sanpham);
            }}
          >
            Them San Pham
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      const action = {
        type: "THEM_GIO_HANG",
        sanPhamClick,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
