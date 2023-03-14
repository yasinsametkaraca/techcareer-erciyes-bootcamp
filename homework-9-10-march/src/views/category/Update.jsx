import React from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Form from "../../components/Form";

function Update() {

    let navigate = useNavigate();

    const categoryData = JSON.parse(localStorage.getItem("categoryItem"))
    const updateCategory = (values) => {
        axios.put('https://northwind.vercel.app/api/categories/'+categoryData.id,values)
            .then(res => {
                navigate('/categories')
            })
    }
    return (
    <>
        <Form handleForm={updateCategory} item={categoryData}></Form>
    </>
  )
}

export default Update