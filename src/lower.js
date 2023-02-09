import './App.css';
import memesdata from './memesdata.js'
import React from 'react';


export default function Lower(){
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            imgurl: ""
        }
    )

    function doChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function func(){
        var memearray = memesdata.data.memes;
        var randno = Math.floor(Math.random()*memearray.length);
        var url = memearray[randno].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            imgurl: url 
        }));
    }

    return(
        <div className="lower">
            <input type="text" className="inpfield firstinp" placeholder = "Top Text"
            name="topText" value={meme.topText} onChange={doChange}></input>
            <input type="text" className="inpfield secondinp" placeholder="Bottom Text"
            name="bottomText" value={meme.bottomText} onChange={doChange}></input>
            <button className="btn" onClick={func}>Get a new meme image 🖼️</button>
            <div className = "meme">
            <img className = "memimg" src={meme.imgurl} alt="img"></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}