import * as React from "react";

import './UserCard.css'

export function UserCard({index, name, id, photoUrl}){

    return(
        <div id='userCardDiv'>
            <img alt='фото' id='userCardPhoto' src={photoUrl}/>
            <p id='userCardName'>{name} {index === 0 ? '(Админ)' : ''}</p>
        </div>
    )

}