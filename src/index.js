import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber(){
    return Math.floor(Math.random()*1000)+1;
}

function greeting(user){
    return <div className="container">
        <h1>Hey there, {user.name}</h1>
        <h2 className ="text-muted">Lucky Number: {user.luckyNumber}</h2>
    </div>
}

const user = {
    name: 'Herald',
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
