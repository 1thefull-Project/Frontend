import React from "react";
import  Item  from "./Item";
import Link from 'next/link';



export default function ItemList2({list}){
    return(
        <div>
            {list.map((item) => {
                <Link href = {`/view/${item.itemid}`}>
                <a>
                <Item itemid = {item.itemid} 
                title = {item.title} 
                progress = {item.progress} 
                tag = {item.tag}/>
                </a>
            </Link>
            })}
        </div>
    );
}