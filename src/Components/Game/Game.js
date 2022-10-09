import * as React from "react";

export function Game({gameId, name, stageApp}){

    return (
        <div style={{visibility: stageApp === 'game' ? 'visible' : 'hidden'}}>
            <p>Игра для {name}: {gameId}</p>
        </div>
    );
}