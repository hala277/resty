import React from 'react';
import './history.scss'




export default function History(props){
    // console.log('history',props.history)
   return(
    
    props.history.map((history,i) => {
        
    return(
        <div  className='history' key={i}>
        <ul  key={i}>
           
                <li key={i}>
               
                  <span className={`method ${props.history[i].method}`} >{history.method}</span>
              
                  <span className='url'> {history.url}</span>   
                </li>
           
            </ul>
            </div>
             )})
             
   )

    
}