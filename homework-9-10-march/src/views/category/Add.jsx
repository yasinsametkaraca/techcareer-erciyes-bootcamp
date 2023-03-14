import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from "../../components/Form";
function Add() {

  let navigate = useNavigate();
  const addCategory = (values) => {
    axios.post('https://northwind.vercel.app/api/categories', values)
      .then(res => {
        navigate('/categories')
      })
  }
  return (<>
    <Form handleForm={addCategory} ></Form>
  </>
  )
}
export default Add