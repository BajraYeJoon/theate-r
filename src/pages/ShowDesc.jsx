import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGet } from "../config/config";

export const ShowDesc = () => {
  const [showDesc, setShowDesc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let isMount = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((res) => {
        setTimeout(() => {
          if (isMount) {
            setShowDesc(res);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          if (isMount) {
            setIsError(err.message);
            setIsLoading(false);
          }
        }, 2000);
      });

    return () => {
      isMount = false;
    };
  }, [id]);

  console.log(showDesc);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (isError) {
    return <div> error : {isError}</div>;
  }

  return <div>this is show page</div>;
};
