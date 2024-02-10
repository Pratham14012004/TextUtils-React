import React ,{useState}from 'react'
// import PropTypes from 'prop-types'
export default function TextForm(props) {
    const handleupclick=()=>{
        console.log("Clicked!!")
        let newText=text.toUpperCase()
        setText(newText)
        props.showalert("Converted to UpperCase ","success")
    }
    const handleloclick=()=>{
        console.log("Clicked!!")
        let newText=text.toLowerCase()
        setText(newText)
        props.showalert("Converted to UpperCase","success")
    }
    const handleClearclick=()=>{
        let newText=''
        setText(newText)
        props.showalert("Text Cleared ","success")
    }
    const handleonChange=(event)=>{
        console.log("OnChange!!")
        setText(event.target.value)
    } 
    const handleTitleclick=()=>{
        const word=text.split(" ")
        for(let i=0;i<word.length;i++){
            word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
        }
        const titleCaseText = word.join(' ')
        setText(titleCaseText)
        props.showalert("Converted to Title Case ","success")

    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select()
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showalert("Copied Text ","success")

    }
    const[text,setText]=useState("Enter text here");
    // setText=("new text");
    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleTitleclick}>Title Case</button>
                <button className="btn btn-primary mx-1" onClick={handleClearclick}>CLear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>

            </div>
            <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to preview here"}</p>
            </div>
        </>
    )
}
