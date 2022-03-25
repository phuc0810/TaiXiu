import React, { Component } from "react";
import  KetQuaTroChoi  from "./KetQuaTroChoi";
import  XucXac  from "./XucXac";
import "./resource/styles/style.css";

export default class GameXucXac extends Component {
  render() {
    return (
      <div className="bgGame">
        <h1 className="text-center pt-5">Game Tài Xỉu</h1>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}
