function strike(element) {
    let checkb = element.previousElementSibling; // Get the checkbox associated with this text

    // Toggle text decoration and checkbox image based on the current state
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
        element.style.color = "black";
        checkb.src = "images/checkbox-unticked.png"; // Update checkbox image
    } else {
        element.style.textDecoration = "line-through";
        element.style.color = "grey";
        checkb.src = "images/checkbox-ticked.png"; // Update checkbox image
    }
}


function reclick(newdiv, holder) {
    newdiv.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            console.log("Enter hit by user");
            let text = newdiv.value;

            // Create new elements
            let addcheckbox = document.createElement("img");
            let addtext = document.createElement("p");

            addtext.className = "strikeoff";
            addcheckbox.className = "check-box";
            addcheckbox.src = "images/checkbox-unticked.png";

            // Add click event for checkbox
            addcheckbox.onclick = function () {
                let index = Array.from(document.getElementsByClassName("strikeoff")).indexOf(addtext); // Get current index
                strike(index); // Pass the index to the strike function
            };

            addtext.innerText = text;

            // Clear and append new elements to the holder
            holder.innerHTML = ''; 
            holder.appendChild(addcheckbox);
            holder.appendChild(addtext);

            // Reattach the click listener to the paragraph
            addClickListener(addtext, addcheckbox, holder);
        }
    });
}

function addClickListener(addtext, addcheckbox, holder) {
    addtext.addEventListener('click', () => {
        let newtext = addtext.innerText;
        let newdiv = document.createElement("input");
        newdiv.className = "inputfield";
        newdiv.value = newtext;

        // Replace the paragraph with the input in the same holder
        holder.innerHTML = ''; 
        holder.appendChild(newdiv);

        // Reassign the 'Enter' key event for the new input
        reclick(newdiv, holder);
    });
}

function add_item() {
    let newdiv = document.createElement("input");
    newdiv.setAttribute("type", "text");
    newdiv.className = "inputfield";

    let holder = document.createElement("div"); 
    holder.classList.add("element", "ja-center");

    document.getElementById("items").appendChild(holder); 
    holder.appendChild(newdiv); 

    // Add event listener for Enter key
    newdiv.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            console.log("Enter hit by user");
            let text = newdiv.value;

            let addcheckbox = document.createElement("img");
            let addtext = document.createElement("p");

            addtext.className = "strikeoff";
            addcheckbox.className = "check-box";
            addcheckbox.src = "images/checkbox-unticked.png";

            // Add click event for checkbox
            addcheckbox.onclick = function () {
                strike(addtext); // Pass the text element to strike
            };

            addtext.innerText = text;

            // Clear and append new elements in the holder
            holder.innerHTML = ''; 
            holder.appendChild(addcheckbox);
            holder.appendChild(addtext);
            // Reattach the click listener to the paragraph
            addClickListener(addtext, addcheckbox, holder);
        }
    });
}


// Date display
let daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthsofyear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();
let d = date.getDay();
let dd = date.getDate();
let mm = date.getMonth();
let newDate = daysofweek[d] + ', ' + dd + " " + monthsofyear[mm];
let p = document.getElementById('date');
p.innerHTML = newDate;
