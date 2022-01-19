import styled from "styled-components";


const Div= styled.div`
margin: 5px auto;
padding: 20px; 
width: 50%;
color: ${({theme})=> theme.text};
transition: 0.5s;
`
const H2= styled.h2`
font-size: 32px;
color: ${({theme})=> theme.title};
transition: 0.5s;
`

const Article= (props)=>{

    return(
        <Div>
            <H2>{props.title}</H2>
            <p>{props.text}</p>
        </Div>
    )

}

export default Article