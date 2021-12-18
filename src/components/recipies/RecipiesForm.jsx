import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function RecipiesForm() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [recipies, setRecipies] = useState({ title: '', body: '' });
    const submit=()=>{
        if(id){

            axios.put("https://usman-recipes.herokuapp.com/api/recipes/" +id ,recipies).then((res)=>{
                console.log(res.data);
                navigate("/");
                })
        }
        else{
            
            axios.post("https://usman-recipes.herokuapp.com/api/recipes/",recipies).then((res)=>{
                console.log(res.data);
            navigate("/");
            })
        }
    }
    const getData = () => {
        if (id)
          axios
            .get("https://usman-recipes.herokuapp.com/api/recipes/" + params.id)
            .then((res) => {
                setRecipies(res.data);
            });
      };

      React.useEffect(getData, []);
    return (
        <div>
            <h3>{id ? "Edit" : "Create"} Recipes</h3>
            Title: <input type="text" value={recipies.title} onChange={(e) => {

                setRecipies({ ...recipies, title: e.target.value });
            }} />
            <hr />

            Description: <input type="text" value={recipies.body} onChange={(e) => {

                setRecipies({ ...recipies, body: e.target.value });
            }} />
            <hr />
            <button onClick={submit}>Submit</button>
        </div>
    )
}
