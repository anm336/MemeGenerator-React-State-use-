import './App.css';
import trollimg from './troll-image.png'

export default function Header(){
    return(
        <div className = "nav">
            <img src={trollimg} alt="troll" className = "headerimg"></img>
            <p className="memgen">MemeGenerator</p>
            <p className="proj3">React Project 3</p>
        </div>
    );
}