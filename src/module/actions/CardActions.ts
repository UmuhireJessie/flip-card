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
  const POST_QUERY = `
  mutation {
    post(question: "${data.question}", answer: "${data.answer}") {
      id
    }
  }
  `
  try {
    const dt = await fetch('https://flip-card-api.herokuapp.com/', {
      method: "POST",
      body: JSON.stringify({ query: POST_QUERY }),  
      mode: "cors",
      headers,
    });
    const response = await dt.json();
    if (dt.ok === true) {
      dispatch(creator(POST_CARD, response.data.post));
      toast.success("Card added successfully!");
    } else {
      toast.error("Error occurred while creating!");
    }
  } catch (err: any) {
    if (err) return toast.error(err.message);
  }
};

export const updateCard = (data, id) => async (dispatch) => {
  const UPDATE_QUERY = `
  mutation {
    update(id: ${id}, question: "${data.question}", answer: "${data.answer}") {
      id
      question
      answer  
    }
  }
  `;
  const CHECK_UPDATES = `
  query{
    oneCard(id: ${id}) {
      id
      question
      answer
    }
  }
  `;
  try {
    const dt = await fetch('https://flip-card-api.herokuapp.com/', {
      method: "POST",
      headers,
      body: JSON.stringify({ query: UPDATE_QUERY })
    });
    console.log(dt)
    const updatedSelect = await fetch('https://flip-card-api.herokuapp.com/', {
      method: "GET",
      headers,
      body: JSON.stringify({ query: CHECK_UPDATES })
    })
    const updateData = await updatedSelect.json();
    dispatch(creator(UPDATE_CARD, updateData));
    toast.success("Card Updated successfully!")
  } catch (e: any) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

export const deleteCard = (id) => async (dispatch) => {
  const DELETE_QUERY = `
  mutation {
    delete(id: ${id}) {
      id
    }
  }
  `;

  try {
    const dt = await fetch('https://flip-card-api.herokuapp.com/', {
      method: "POST",
      headers,
      body: JSON.stringify({ query: DELETE_QUERY })
    });

    dispatch(creator(UPDATE_CARD, id));
  } catch (e: any) {
    if (e.response && e.response.data) {
      return toast.error(e.response.data.error);
    }
  }
};

