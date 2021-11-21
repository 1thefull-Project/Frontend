
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const index = router.query

  const API_URL = `https://gonggoo-bee.herokuapp.com/item/1`;
  
  function getData(){
      axios.get(API_URL).then(res =>{
        console.log(res.data)
      })
  };

  useEffect(() => {
      getData();
  },[]);

  const [item, setItem] = useState({});
  


  
  return (
      <h1>{id}</h1>
  );
}

export default Post