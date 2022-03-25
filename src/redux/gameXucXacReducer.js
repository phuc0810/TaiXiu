let stateDefault = {
  banChon: true,
  soLanThang: 0,
  tongSoLanChoi: 0,
  mangXucXac: [
    { diem: 1, img: "./img/gameXucXac/1.png" },
    { diem: 1, img: "./img/gameXucXac/1.png" },
    { diem: 1, img: "./img/gameXucXac/1.png" },
  ],
};

export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TAI_XIU": {
      state.banChon = action.boolean;
      return { ...state };
    }
    case "PLAY_GAME": {
      let newArr = [];
      for (let i = 1; i <= 3; i++) {
        let random = Math.floor(Math.random() * 6) + 1;
        let xxnn = { diem: random, img: `./img/gameXucXac/${random}.png` };
        newArr.push(xxnn);
      }
      state.mangXucXac = newArr;

      let tinhTongDiem = state.mangXucXac.reduce((diem, xx, i) => {
        return (diem += xx.diem);
      }, 0);

      if (
        (tinhTongDiem > 11 && state.banChon) ||
        (tinhTongDiem < 11 && !state.banChon)
      ) {
        state.soLanThang += 1;
      }

      state.tongSoLanChoi += 1;
      return { ...state };
    }
    default:
      return state;
  }
};
