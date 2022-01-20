import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import Article from "../components/Article";
import Layout from "../components/Layaout"

const H1 = styled.h1`
width: 55%;
text-align: center;
margin: 20px auto;
color: ${({theme})=> theme.text};
transition: 0.5s;
`


export default function blog () {

    const [todos, setTodos] = useState ([])

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((res) => setTodos(res.data));
          console.log(todos)
      }, []);


    return(
        <Layout>
      
            <H1>BLOG</H1>
        {todos.length? todos.map((todo)=>
            <Article title = {todo.title} 
            text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor
                     incidunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrum 
                     exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. 
                     Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint obcaecat cupiditat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum." key = {todo.id}/>)
        : <Loading/>
        }
       
        </Layout>
        
    )
}