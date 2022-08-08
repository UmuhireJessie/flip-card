import { SIGN_UP_USER, LOGIN_USER } from "../index";
import creator from "./creator";
import { toast } from "react-toastify";
import { backendUrl } from "../../utils/db";

export const registerUser = (data) => async (dispatch) => {
  const REGISTER_QUERY = `
  mutation {
    signup(name: "${data.name}", email: "${data.email}", password: "${data.password}") {
      token
      user {
        id
        name
        email
      }
    }
  }
  `;
  try {
    const dt = await fetch("https://flip-card-api.herokuapp.com/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ query: REGISTER_QUERY }),
    });
    const datas = await dt.json();
    console.log(datas.data, dt, backendUrl);
    if (dt.ok === false) {
      toast.error("Error occured while registering. Please try again!");
    } else {
      dispatch(creator(SIGN_UP_USER, datas.data));
      toast.success("Registered Successfully!");
      console.log(datas.data);
    }
  } catch (e: any) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};

export const loginUser = (data) => async (dispatch) => {
  const LOGIN_QUERY = `
  mutation {
    login(email: "${data.email}", password: "${data.password}") {
      token
      user {
        id
        name
        email
      }
    }
  }
  `;
  try {
    const dt = await fetch("https://flip-card-api.herokuapp.com/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ query: LOGIN_QUERY }),
    });
    const datas = await dt.json();
    console.log(datas.data, dt, backendUrl);
    if (dt.ok === false) {
      toast.error("Error occured while signing in. Please try again!");
    } else {
      dispatch(creator(SIGN_UP_USER, datas.data));
      toast.success("Login Successfully!");
      console.log(datas.data);
      localStorage.setItem("token", datas.data.signup.token);
      localStorage.setItem("name", datas.data.signup.user.name);
      localStorage.setItem("userEmail", datas.data.signup.user.email);
      localStorage.setItem("userId", datas.data.signup.user.id);
    }
  } catch (e: any) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};