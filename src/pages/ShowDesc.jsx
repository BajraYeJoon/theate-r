/* eslint-disable no-unused-expressions */
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { apiGet } from "../config/config";

const initialState = {
  show: null,
  isLoading: true,
  isError: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return { show: action.show, isLoading: false, isError: null };

    case "Error":
      return { ...state, isError: action.isError, isLoading: false };
    default:
      return state;
  }
};

export const ShowDesc = () => {
  const [{ isLoading, isError, show }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log(isLoading, isError, show)

  //   const [showDesc, setShowDesc] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [isError, setIsError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let isMount = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((res) => {
        if (isMount) {
          dispatch({
            type: "Success",
            show: res,
          });
        }
      })
      .catch((err) => {
        if (isMount) {
          dispatch({
            type: "Error",
            isError: err.message,
          });
        }
      });

    return () => {
      isMount = false;
    };
  }, [id]);

  //   console.log(showDesc);

  //   if (isLoading) {
  //     return <div>Data is being loaded</div>;
  //   }

  //   if (isError) {
  //     return <div> error : {isError}</div>;
  //   }

  return <div>this is show page</div>;
};
