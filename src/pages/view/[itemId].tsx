
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import Iteminfo from '../../components/iteminfo';
import { GetServerSideProps } from 'next';


export async function getServerSideProps(context) {
  const itemId = context.params.itemId;
  const apiUrl = `https://gonggoo-bee.herokuapp.com/item/${itemId}`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}

const Post = ({item}) => {

  const [userObject , setUserObject] = useState<any>();
  useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_GET_USER as string, { withCredentials: true }).then((res: AxiosResponse) => {
          if (res.data) {
              console.log(res.data);
              setUserObject(res.data);
          }
      })
  }, [])

  return (
    <div>
      <Iteminfo item={item} userObject = {userObject}  />
    </div>
  
  );
};

export default Post;
