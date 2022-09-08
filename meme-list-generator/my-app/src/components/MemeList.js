import React from "react"
import Meme from "./Meme"

// const [isSaved, setIsSaved] = React.useState(false)
// // const [isEditing, setIsEditing] = React.useState(false)
// // const [editList, setEditList] = React.useState([{        editTopText:"",        editBottomText:"",        randomMeme:"",        memeHere: false      }])
// //     // console.log(props.randomImage)
// //     function saveMemeEdits (event){
// //         const {name, value} = event.target
// //         console.log(editList.editTopText)
// //         console.log(editList.editBottomText)
// //         setIsEditing(!isEditing)
// //         setIsSaved(!isSaved)
// //         console.log(isSaved)
// //         setEditList(prevText => {
// //             return {
// //                 ...prevText,
// //                 [name]: value
// //             } 
// //         })
export default function (props){

    const [editList, setEditList] = React.useState([{
        editTopText:"",
        editBottomText:"",
        randomMeme:"",
        memeHere: false
      }])

      const [isEditing, setIsEditing] = React.useState(false)

    //   function toggle (){
    //     setIsEditing()
    //   }

    const [isSaved, setIsSaved] = React.useState(false)

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

        // const editListElements = editList.map(meme => [...meme])
        


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

        //Del meme filter index for deleting meme on click of delete button
        const delMeme = (index) => setEditList(editList.filter((_, i) => i !== index))



        // const editListElements = editList.map((meme,index) => {
        //     return <EditedMemeList key = {index} {...meme} onDelete={() => delMeme(index)}/>})


    return ( 
        <div className="MemeListDiv">
        {props.memeHere && <img className='MemeListImg' src={props.randomMeme}/>}


        {isSaved ? 
        <h2 className="editListTop">{editList.editTopText}</h2> : 
        <h2 className="memeListTextTop" >{props.topText}</h2>}


        {isSaved ? 
        <h2 className="editListBottom">{editList.editBottomText}</h2> :
        <h2 className="memeListTextBot">{props.bottomText}</h2>}

        <div className='buttons'>


        {props.memeHere && <button className='DelMemeBtn' onClick={props.onDelete}>Delete</button>}


        {props.memeHere && (isEditing === false  ? <button className='EditMemeBtn' onClick={() => setIsEditing(!isEditing)} >Edit</button> : <button className='SaveMemeBtn' onClick={saveMemeEdits}>save</button>)}

        {/* {isEditing && <button className='EditMemeBtn' >save</button>} */}
        
        {isEditing && <form className='editInputBoxes'>
        
        {/* top text */}
        <input 
        className='inputsTop' 
        placeholder='Top Text'
        name='editTopText'
        onChange={editMemeText}
        >
        {/* bottom text input box */}
        </input>
        <input 
        className='inputsBottom' 
        placeholder='Bottom Text'
        name='editBottomText'
        onChange={editMemeText}
        >
        </input>
        </form>}
        {/* {editListElements}
         */}
        
        </div>
        </div>
        
    ) 
    return(
        <>
            <div className='list'>
                <img src={props.randomImage} />
                <h2>{props.topText}</h2>
                <h2> {props.bottomText} </h2>
            </div>
            <div className='dtl'> 
            <button onClick={props.onDelete}>delete</button>
            <button onClick={saveMemeEdits}>edit</button>
            </div>
            
            {/* {props.memeHere && (isEditing === false  ? <button className='EditMemeBtn' onClick={() => setIsEditing(!isEditing)} >Edit</button> : <button className='EditMemeBtn' onClick={saveMemeEdits} >save</button>)} */}
        </>
    )

}
    
   
