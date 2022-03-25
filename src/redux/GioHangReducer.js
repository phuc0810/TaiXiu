let mangDienThoai = [];

export const gioHangReducer = (state = mangDienThoai, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangUpdate = [...state];
      let sanPhamMoi = { ...action.sanPhamClick, soLuong: 1 };

      let checkGH = gioHangUpdate.find((sp) => sp.maSP === sanPhamMoi.maSP);
      if (checkGH) {
        checkGH.soLuong += 1;
      } else {
        gioHangUpdate.push(sanPhamMoi);
      }
      return gioHangUpdate;
    }
    case "XOA_SAN_PHAM": {
      let gioHangUpdate = [...state];
      let index = gioHangUpdate.findIndex((sp) => sp.maSP === action.maSP);
      gioHangUpdate.splice(index, 1);
      return gioHangUpdate;
    }
    case "TANG_GIAM_SL": {
      let gioHangUpdate = [...state];
      let sanPham = gioHangUpdate.find((sp) => sp.maSP === action.maSP);
      if (sanPham) {
        sanPham.soLuong += action.soLuong;
        if (sanPham.soLuong < 1) {
          if (window.confirm("ban muon xoa san pham ?")) {
            gioHangUpdate.splice(sanPham, 1);
          } else {
            sanPham.soLuong -= action.soLuong;
          }
        }
      }
      return gioHangUpdate;
    }
    default:
      return state;
  }
};
