import * as React from "react";
import { useParams } from "react-router-dom";

export function Game(){

    let { id } = useParams();

    return (
        <div>
            <p>Игра: {id}</p>
        </div>
    );
}