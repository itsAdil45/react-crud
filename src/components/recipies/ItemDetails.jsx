import React from "react";
import { useParams } from "react-router";
import axios from "axios";
const ItemsDetails = (props) => {
  const [recipes, setRecipes] = React.useState([]);
  const params = useParams();
  console.log(params);
  const getData = () => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/recipes/" + params.id)
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
      <h3>{recipes.title}</h3>
      <p>{recipes.body}</p>
      <hr />
    </div>
  );
};

export default ItemsDetails;