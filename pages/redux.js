import { useKonfirmasisQuery } from "@/services/Konfirmasi";
import { useRecipesQuery } from "@/services/recipeAPI";
import React from "react";

function Redux() {
  const { data, error, isLoading } = useRecipesQuery;
  console.log(data);
  return <div>{data}</div>;
}

export default Redux;
