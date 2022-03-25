import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    let { banChon, soLanThang, tongSoLanChoi } = this.props;
    return (
      <div className="container mt-5">
        <div className="text-center" style={{ fontSize: "50px" }}>
          <p>
            Bạn chọn:{" "}
            <span className="text-success">{banChon ? "Tài" : "Xỉu"}</span>
          </p>
          <p>
            Số lần Thắng: <span className="text-success">{soLanThang}</span>
          </p>
          <p>
            Tổng số lần chơi:{" "}
            <span className="text-success">{tongSoLanChoi}</span>
          </p>
          <button
            className="btn btn-success"
            style={{ fontSize: "30px" }}
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { banChon, soLanThang, tongSoLanChoi } = state.gameXucXacReducer;
  return {
    banChon: banChon,
    soLanThang: soLanThang,
    tongSoLanChoi: tongSoLanChoi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      const action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
