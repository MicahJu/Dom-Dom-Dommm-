//listen for button function when content loads
document.addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let btnText =  document.createTextNode("Add square!");
    button.className = "button";
    button.appendChild(btnText);
    document.body.appendChild(button);
    let id = 0;

    //listen for button click
    button.addEventListener("click", buttonClick);
    function buttonClick() {
        id++;
        let square = document.createElement("div");
        square.id = id;
        square.className = "orange-square";
        let p = document.createElement("p");
        let squareText = document.createTextNode(id);
        p.appendChild(squareText);
        square.appendChild(p);
        document.body.appendChild(square);
        p.style.opacity = "0";
        
        //listen for mouse to hover over div
        square.addEventListener("mouseenter", hover);
        function hover() {
            p.style.opacity="1";
        }

        //listen for mouse to stop hovering over div
        square.addEventListener("mouseleave", noHover);
        function noHover() {
            p.style.opacity="0";
        }

        //listen for click on div
        square.addEventListener("click", squareClick);
        function squareClick() {
            //int 1 through 5
            let num = Math.floor(Math.random() * 6);
            //set color based on int value
            if (num === 0) {
                square.style.backgroundColor = "red";
            } else if (num === 1) {
                square.style.backgroundColor = "blue";
            } else if (num === 2) {
                square.style.backgroundColor = "yellow";
            } else if (num === 3) {
                square.style.backgroundColor = "green";
            } else if (num === 4) {
                square.style.backgroundColor = "purple";
            } else if (num === 5) {
                square.style.backgroundColor = "orange";
            }
        }

        //listen for doubleclick on div
        square.addEventListener("dblclick", squareDoubleClick);
        function squareDoubleClick() {
            //check for odd or even
            if (square.id % 2 === 0) {
                //set variable to current ID + 1
                let elementID = parseInt(square.id) + 1;
                //set variable to element with that ID
                let element = document.getElementById(elementID);
                //delete element or display an alert depending on if element exists
                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }      
            } else {
                //set variable to current ID - 1
                let elementID = parseInt(square.id) - 1;
                //set variable to element with that ID
                let element = document.getElementById(elementID);
                //delete element or display an alert depending on elements existence
                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }
            }
        }
    }
}