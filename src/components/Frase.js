import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase=styled.div`
padding:3rem;
border-radius:.5rem;
background-color:#fff;
max-width:800px;
@media (min-width:992px){
    margin-top:14rem;
}
h1{
    font-family:Arial, Helvetica, sans-serif;
    text-align:center;
    position:relative;
    padding-left:2rem;

    &::before{
        content:open-quote;
        font-size:5rem;
        color: black;
        position:absolute;
        left:-1rem;
        top:-2rem;
    }
}
p{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:1.6rem;
    font-weight:bold;
    text-align:right;
    color:#666;
    margin-top:1rem;
}
`;

const Frase = ({ frases }) => {
    if(Object.keys(frases).length===0)return null;
    return (
        <ContenedorFrase>
            <h1>{frases.quote}</h1>
            <p>{frases.author}</p>

        </ContenedorFrase>

    );
}

export default Frase;