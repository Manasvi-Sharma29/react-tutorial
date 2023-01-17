import GoogleMic from './Google_mic.svg'

const input = ()=>{
    return (
        <div>
            <input type = "text" id="SearchBar"></input>
            <a href = "seacrch by voice"><img src = {GoogleMic} class = "mic" alt=""/></a>
        </div>
    )
}


export default input