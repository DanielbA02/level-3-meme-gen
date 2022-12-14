import React, {useState} from "react"

export default function MemeList(props) {
    const [editList, setEditList] = useState([{
        editTopText:"",
        editBottomText:"",
        randomMeme:"",
        memeHere: false
    }])
    const [isEditing, setIsEditing] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

        //state for both top and bottom meme text
        function editMemeText (event){
            const {name, value} = event.target
            setEditList(prevText => {
                return {
                    ...prevText,
                    [name]: value
                }
            })
        }

        //save button to reset memesList
        function saveMemeEdits (event){
            const {name, value} = event.target
            console.log(editList.editTopText)
            console.log(editList.editBottomText)
            setIsEditing(!isEditing)
            setIsSaved(!isSaved)
            console.log(isSaved)
            setEditList(prevText => {
                return {
                    ...prevText,
                    [name]: value
                }
            })
        }

    return ( 
        <div className="list">
        
        <div className="meme">

            {props.memeHere && <img className='MemeListImg' src={props.randomImage} alt=""/>}

            {isSaved ? 
            <h2 className="memeTextTop">{editList.editTopText}</h2> : 
            <h2 className="memeTextTop" >{props.topText}</h2>
            }

            {isSaved ? 
            <h2 className="memeTextBottom">{editList.editBottomText}</h2> :
            <h2 className="memeTextBottom">{props.bottomText}</h2>
            }
        </div>

        <div className='buttons'>
        {props.memeHere && <button className='DelMemeBtn' onClick={props.onDelete}>Delete</button>}

        {props.memeHere && (isEditing === false ? <button className='EditMemeBtn' onClick={() => setIsEditing(!isEditing)} >Edit</button> : <button className='SaveMemeBtn' onClick={saveMemeEdits}>save</button>)}
        
        {isEditing && <form className='editInputBoxes'>
        {/* top text */}
        <input 
        className='inputsTop' 
        placeholder='Top Text'
        name='editTopText'
        onChange={editMemeText}
        >
        </input>
        {/* bottom text input box */}
        <input 
        className='inputsBottom' 
        placeholder='Bottom Text'
        name='editBottomText'
        onChange={editMemeText}
        >
        </input>
        </form>}
        </div>
        </div>
    ) 
}