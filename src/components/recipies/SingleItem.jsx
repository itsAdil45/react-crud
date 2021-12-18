import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
export default function SingleItem(props) {
    return (
        <div>
          <Link to={"/recipies/details/" + props.recipes._id}>
          {props.recipes.title}
        </Link>
     

        <Link className="edit" to={"/recipies/edit/" + props.recipes._id  }>Edit</Link>
        <button
        onClick={(e) => {
          axios
            .delete(
                "https://usman-recipes.herokuapp.com/api/recipes/" +
                props.recipes._id
            )
            .then((res) => {
              console.log("deleted");
              props.onDelete();
            }
            );
        }}
      >
        Delete
      </button>
      <hr />
        </div>
    )
}
