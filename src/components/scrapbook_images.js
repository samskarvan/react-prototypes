import React from 'react';

export default props =>{
    console.log(props);
    const {src, style} = props.about;
    console.log(src);
    return(
    <img src={src} style={style} className="scrapbook-img"/>
)
}