import React, {useEffect, useState} from "react"
import MemeList from "./MemeList"
//banana
// Brock
export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" ,
        memeHere: true
    })

    const [allMemes, setAllMemes] = useState([{
        topText:meme.topText,
        bottomText:meme.bottomText,
        randomImage:meme.randomImage,
        memeHere: false,
    }])

    const [memeList, setMemeList] = useState([])

    useEffect(() => {
        getData()
    }, [])
    
    async function getData(){
        await fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            memeHere: true
        }))}

//Andrew
    function addText(event) {
        const {name, value} = event.target
        setMeme(prevText => ({
            ...prevText,
            [name]: value
        }))
    }

    function handleSave(event) {
        event.preventDefault()
        console.log("item to save:", meme)
        setMemeList(prevMemesList => {
            return [ ...prevMemesList,
                    meme]
        })  
    }

    const delMeme = (index) => setMemeList(memeList.filter((_, i) => i !== index))

    const memesListElements = memeList.map((meme,index) => {
    return <MemeList key = {index} {...meme} onDelete={() => delMeme(index)}/>})
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={addText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={addText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image ????
                </button>
            </div>

                <div className="meme">
                    <img src={meme.randomImage} alt="" className="meme--image" />
                    <h2 className="memeTextTop">{meme.topText}</h2>
                    <h2 className="memeTextBottom">{meme.bottomText}</h2>
                </div>   
                <div className ="save">
                <button className="btn"  onClick={handleSave}> Add Meme To Your List </button>
                {memesListElements}
            </div>
        </main>
    )
}