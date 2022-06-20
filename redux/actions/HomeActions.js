import axios from "axios";

export const Getallitems = () => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://wedcell.cloudjiffy.net/item/getAll",
      {
        category: "Mehndi",
      }
    );

    dispatch({
      type: "FETCH_MEHNDI",
      payload: response.data,
    });

    console.log("working", response);
  } catch (error) {
    dispatch({
      type: "MEHNDI_REJECTED",
      payload: error.response,
    });
  }
};

export const Gethotels = () => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://wedcell.cloudjiffy.net/item/getAll",
      {
        category: "Hotel",
      }
    );

    dispatch({
      type: "FETCH_HOTEL",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "HOTEL_REJECTED",
      payload: error.response,
    });
  }
};
