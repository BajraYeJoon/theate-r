import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGet } from "../config/config";

export const ShowDesc = () => {
  const [showDesc, setShowDesc] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((res) => {
      setShowDesc(res);
    });
  }, [id]);

  console.log(showDesc);

  return <div></div>;
};
