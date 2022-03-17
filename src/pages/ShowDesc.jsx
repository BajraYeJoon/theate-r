/* eslint-disable no-unused-expressions */
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import Cast from "../components/shows/Cast";
import Details from "../components/shows/Details";
import MainShowData from "../components/shows/MainShowData";
import Seasons from "../components/shows/Seasons";
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

  console.log(isLoading, isError, show);

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

  return (
    <div>
      <MainShowData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      
      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>
      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons}/>
      </div>
      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast}/>
      </div>
    </div>
  );
};
