import {Form} from "react-bootstrap";
import AuthorForm from "./AuthorForm";
import React, {useState} from 'react';

const Author = (props) => {

    const addAuthor= () =>{
        const submit =(author) =>{
            console.log(author);
        }
    }

    const author ={
        firstname : "Suds",
        lastname : "",
        dob : ""
    }
    return (
        <React.Fragment>
            <AuthorForm author={author}></AuthorForm>
        </React.Fragment>
    )
}
export default Author;