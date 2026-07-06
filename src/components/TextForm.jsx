import propTypes from 'prop-types';
import {useState} from 'react';
<link rel="stylesheet" href="index.css" />


function TextForm(props)
{
    const [text , setText] = useState("Enter text here");
    const onhandleClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text has been converted to uppercase!", "success");
    }
    const onHandlechange = () =>
    {
        setText(text.toLowerCase());
        props.showAlert("Text has been converted to lowercase!", "success");
    }
    const onHandleConvert = () => {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
        props.showAlert("Text has been inverted!", "success");
    }

    setText(reversed);
};
let styles =
{
    color : props.mode === "dark" ? "white" : "black",
    backgroundColor : props.mode === "dark" ? "#212529" : "white",
    fontStyle : "italic",
}
const handleExtraSpaces = () =>
{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}
const [words, setWords] = useState(0);
const [characters, setCharacters] = useState(0);
const    onHandleClear= () => {
                                    setText("");
                                    setWords(0);
                                    setCharacters(0);
                                    document.getElementById("mybox").value = "";
                                }
                            
    return(
        <>
             
            <div className={`mb-3 my-3 bg-${props.mode === "dark" ? "dark" : "light"}`} style={styles}>
                <label htmlFor="mybox" className="form-label"><h3>{props.heading}</h3></label>
                <textarea className="form-control mainArea" id="mybox" rows="8" 
                    style={{
                                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                                color: props.mode === "dark" ? "white" : "black"
                            }}
                         onChange={(e) => {
    const value = e.target.value;

    setText(value);
    setWords(
        value.trim() === "" ? 0 : value.trim().split(/\s+/).length
    );
    setCharacters(value.length);
}}
                        
                />
            </div>
              <button className="btn btn-primary mx-3 my-2 "  onClick={onhandleClick}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-3 my-2"  onClick={onHandlechange}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-3 my-2"  onClick={onHandleConvert}>Invert</button>
              <button className="btn btn-primary mx-3 my-2"  onClick={onHandleClear}>Clear</button>
              <button className="btn btn-primary mx-3 my-2"  onClick={() => {
                  navigator.clipboard.writeText(text);
                    props.showAlert("Text copied!", "success");
                    setText("");
                    setWords(0);
                    setCharacters(0);
              }}>Copy the text</button>
              <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{words} Words  {characters} Characters</p>
                <p>{0.08 * words} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length===0 ? "Enter text to preview" : text}</p>
              </div>
        </>
    );
}

TextForm.propTypes = {
    heading : propTypes.string.isRequired
}

export default TextForm;