import { GET_ALL_CARDS, POST_CARD, UPDATE_CARD } from "../index";
import creator from "./creator";
import { toast } from "react-toastify";
import { backendUrl, headers } from "../../utils/db";

export const getAllCards = () => async (dispatch) => {
  const CARD_QUERY = `
  query {
    allCards {
      id
      question
      answer
    }
  }
  `;
  try {
    const dt = await fetch('https://flip-card-api.herokuapp.com/', {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ query: CARD_QUERY })
    });
    const datas = await dt.json();
    // console.log(datas.data, dt, backendUrl);
    if (dt.ok === false) {
      toast.error("Error occured while retrieving all cards");
    }
    else dispatch(creator(GET_ALL_CARDS, datas.data));
  } catch (e: any) {
    if (e.message) {
      return toast.error(e.message);
    }
  }
};


export const postCard = (data) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}`, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers,
    });
    const response = await dt.json();
    const message = response.error || response.message;
    if (dt.status == 200) {
      dispatch(creator(POST_CARD, response.data));
      toast.success(message);
    } else {
      toast.error("Error occurred while creating!");
    }
  } catch (err: any) {
    if (err) return toast.error(err.message);
  }
};

export const updateCard = (data, id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers,
    });
    const updatedSelect = await fetch(`${backendUrl}/users`);
    const updateData = await updatedSelect.json();
    dispatch(creator(UPDATE_CARD, updateData));
  } catch (e: any) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

