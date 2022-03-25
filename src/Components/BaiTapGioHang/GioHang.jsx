import React, { Component } from "react";
import { connect } from "react-redux";

export class GioHang extends Component {
  render() {
    let { gioHang } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Ma SP</th>
            <th>TenSP</th>
            <th>hinh anh</th>
            <th>gia ban</th>
            <th>so luong</th>
            <th>tong tien</th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((spGH, i) => {
            return (
              <tr key={i}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>
                  <img src={spGH.hinhAnh} alt="..." width={100} />
                </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}
                  >
                    +
                  </button>
                  {spGH.soLuong}
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.xoaSanPham(spGH.maSP);
                    }}
                  >
                    Xoa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.gioHangReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaSanPham: (maSP) => {
      const action = {
        type: "XOA_SAN_PHAM",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, soLuong) => {
      const action = {
        type: "TANG_GIAM_SL",
        maSP,
        soLuong,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
