import React from 'react'
import SingleItem from './SingleItem';
import { Link } from "react-router-dom";
import axios from "axios";
export default function Menu() {
    const [recipes , setRecipes] = React.useState([]);
    const getData = () => {
        axios.get("https://usman-recipes.herokuapp.com/api/recipes").then((res) => {
            setRecipes(res.data)
          
           
        }).catch((err) => {
            console.log(err);
        })
    }
    getData();
    return (
        <div>
              {recipes.length==0? <p>No items</p> : <div>items</div> }
            <Link to="/recipies/create" className='create'>Create Product</Link>
         
            {
                recipes.map((recipes , index)=><SingleItem key={index} recipes={recipes} onDelete ={getData}/>)

            }
        </div>
    )
}
