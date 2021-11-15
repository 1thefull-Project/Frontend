import React from "react";
import { Item } from "./Item";
import Link from 'next/link';

function View({imge,title,state,tag}){
    return (
        <Item imge = {imge} title = {title} state = {state} tag = {tag}/>
    );
}

export default function ItemList({list}){
    return (
        <div>
        {list.map((items) => (
            <Link href = {`/view/${items.name}`}>
                <a>
                    <View imge = {items.image} 
                    tag = {items.tag} 
                    title = {items.name} 
                    state = {items.state}
                    />
                </a>
            </Link>
        ))}
            
        </div>
    );
}