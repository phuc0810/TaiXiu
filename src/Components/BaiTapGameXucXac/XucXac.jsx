import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderKetQua = () => {
    let tongDiem = this.props.mangXucXac.reduce((diem, xx, i) => {
      return (diem += xx.diem);
    }, 0);
    let taixiu = tongDiem > 11 ? "Tai" : "Xiu";
    return (
      <span>
        {taixiu}-{tongDiem}
      </span>
    );
  };

  render() {
    let { mangXucXac } = this.props;
    console.log(this.props);
    return (
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-4">
            <button
              className="btn btn-danger p-5"
              style={{ fontSize: "50px" }}
              onClick={() => {
                this.props.taiXiu(true);
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-4">
            {mangXucXac.map((xx, i) => {
              return <img src={xx.img} alt="..." width={60} key={i} />;
            })}
            <p style={{ fontSize: "50px", color: "yellow" }}>
              {this.renderKetQua()}
            </p>
          </div>
          <div className="col-4">
            <button
              className="btn btn-info p-5"
              style={{ fontSize: "50px" }}
              onClick={() => {
                this.props.taiXiu(false);
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.gameXucXacReducer.mangXucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taiXiu: (boolean) => {
      const action = {
        type: "TAI_XIU",
        boolean,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
