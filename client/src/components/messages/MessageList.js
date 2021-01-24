import React, {useState,useEffect} from 'react'
import list from '../../Seed/messages'


const List = ()=>{
    const messages = list;
    return(
        <div>
            {
                messages.map((item,index)=>{
                   
                    return <div key={index}>
                                <p>{item.text}</p>
                                <p>{item.author}</p>
                                <p>{item.date}</p>
                            </div>
                    
                })
            }
        </div>
    )
}

export default List;