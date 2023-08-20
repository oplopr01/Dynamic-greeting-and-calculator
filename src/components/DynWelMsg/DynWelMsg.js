import React from "react"

const DynWelMsg = () => {
    let welMsg
    let css = { color: "" }
    let date = new Date();
    let currentTime= date.getHours()

    if (currentTime > 1 && currentTime < 12) {
        css.color = "green"
        welMsg = "Good Morning"
    }
    else if (currentTime > 12 && currentTime < 19) {
        css.color = "orange"
        welMsg = "Good afterNoon"
    }
    else {
        css.color = "red"
        welMsg = "Good night"
    }



    return (
        <div>
            <br/>
            <u>One react Code block</u>
            <h1>Hello Sir, <span style={css}>{welMsg}</span></h1>
            {/* <p>{document.write(welMsg)}</p> */}
        </div>
    )
}

export default DynWelMsg;
