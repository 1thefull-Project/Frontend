
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import Iteminfo from '../iteminfo';

const Post = () => {
  const router = useRouter();
  const { itemId } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `https://gonggoo-bee.herokuapp.com/item/${itemId}`; 

  function getData() {
    if(itemId){
      axios.get(API_URL).then((res) => {
      
        setItem(res.data);
      
    });

    }
    
  }

  useEffect(() => {
    
      getData();
    
  }, [itemId]);

  return <Iteminfo item={item} />;
};

export default Post;