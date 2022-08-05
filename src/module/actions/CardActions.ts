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

// export const getAllUserDriver = () => async (dispatch) => {
//   try {
//     const dt = await fetch(`${backendUrl}/users`, {
//       headers,
//     });
//     const datas = await dt.json();
//     if (dt.ok === false)
//       dispatch(creator(GET_ALL_ERROR)), toast.error(datas.message);
//     else {
//       const userDrivers = datas.data.filter(({ role }) => role === "driver");
//       dispatch(creator(GET_ALL_USERS_DRIVERS, userDrivers));
//     }
//   } catch (e) {
//     if (e.message) {
//       return toast.error(e.message);
//     }
//   }
// };

// export const getOneUser = (userId) => async (dispatch) => {
//   try {
//     const dt = await fetch(`${backendUrl}/users/` + userId, {
//       headers,
//     });
//     const data = await dt.json();
//     dispatch(creator(GET_ONE_USER, data));
//   } catch (e) {
//     if (e.response && e.response.data) {
//       return toast.error(e.response.data.error);
//     }
//   }
// };

export const postUser = (data) => async (dispatch) => {
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

export const updateUser = (data, id) => async (dispatch) => {
  try {
    const dt = await fetch(`${backendUrl}/users/` + id, {
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

// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     const dt = await fetch(`${backendUrl}/users/` + id, {
//       method: "DELETE",
//       headers,
//     });
//     dispatch(creator(DELETE_USER, id));
//   } catch (error) {
//     if (error.message) return toast.error(error.message);
//   }
// };
