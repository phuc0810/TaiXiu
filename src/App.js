import logo from "./logo.svg";
import "./App.css";
import DanhSachSanPham from "./Components/BaiTapGioHang/DanhSachSanPham";
import GameXucXac from "./Components/BaiTapGameXucXac/GameXucXac";

function App() {
  return (
    <div className="App">
      {/* <DanhSachSanPham /> */}
      <GameXucXac />
    </div>
  );
}

export default App;
