
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import Iteminfo from '../iteminfo';
import { GetServerSideProps } from 'next';



const Post = ({item}) => {

  return (
    <div>
      {item && <Iteminfo item={item} />};
    </div>
  
  );
};

export default Post;

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