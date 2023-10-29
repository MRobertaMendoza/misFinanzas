import { axiosMiFinanz } from "@/utils/configAxios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState:
    typeof window !== "undefined" && localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : initialState,
  reducers: {
    setUserInfoGlobal: (state, action) => {
      return action.payload;
    },
  },
});
const { setUserInfoGlobal } = userInfoSlice.actions;

export const loginUser = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // Devuelve una promesa para poder capturar el error en el componente
    axiosMiFinanz
      .post("/user/login", data)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          dispatch(setUserInfoGlobal(res.data));
          resolve(); // Resuelve la promesa si la petición fue exitosa
        } else {
          reject(new Error("Inicio de sesión incorrecto"));
        }
      })
      .catch((err) => {
        reject(new Error("Error en la solicitud")); // Rechaza la promesa con un error en la solicitud
      });
  });
};

export const userLogOut = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(setUserInfoGlobal(initialState));
};

export const signup = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axiosMiFinanz
      .post("/user/register", data)
      .then((res) => {
        //  console.log("Respuesta del servidor:", res.data);
        //localStorage.setItem("userInfo", JSON.stringify(res.data));
        dispatch(setUserInfoGlobal(res.data));
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default userInfoSlice.reducer;
