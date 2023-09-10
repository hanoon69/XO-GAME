let clicksound=new Audio("click.mp3");
let winsound=new Audio("win.mp3")

function val(e) {

    if ((e.target.innerHTML != "X") && (e.target.innerHTML != "O"))
        if (flag) {
            flag = 0;
            return "O";
        }
        else {
            flag = 1;
            return "X";
        }

    else if (e.target.innerHTML == "X") {
        flag = 0;
        return "";
    }

    else if (e.target.innerHTML) {
        flag = 1;
        return "";
    }


}




function handler(e) {
    clicksound.play()
    e.target.innerHTML = `${val(e)}`;
    checkwin();
}

let flag = 0;
let i = 0;
while (i < 9) {
    if (!checkwin()) {
        let element = document.getElementsByClassName("griditems")[i];
        element.addEventListener("click", handler);
    }
    i++;

}

var win = 0;
function checkwin() {
    if (!win) {
        let wintable = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]


        let box = Array.from(document.getElementsByClassName("griditems"));
        wintable.forEach(e => {
            if ((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[0]].innerText === "X")) {
                win = 1;
        
                box[e[0]].style.color="red"
                box[e[1]].style.color="red"
                box[e[2]].style.color="red"
                
                let message = document.createElement("div")
                message.id = "message"
                message.innerHTML = "X WON!!"
                document.getElementsByClassName("info")[0].prepend(message)
            }
        })

        wintable.forEach(e => {
            if ((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[0]].innerText === "O")) {
                win = 1;

                box[e[0]].style.color="red"
                box[e[1]].style.color="red"
                box[e[2]].style.color="red"

                let message = document.createElement("div")
                message.id = "message"
                message.innerHTML = "O WON!!"
                document.getElementsByClassName("info")[0].prepend(message)
            }
        })

        if (!win) {
            let i = 0
            box.forEach(a => {
                if (a.innerText != "") { i++ }
            })

            if (i == 9) {
                let message = document.createElement("div")
                message.id = "message"
                message.innerHTML = "DRAW!"
                document.getElementsByClassName("info")[0].prepend(message)
                win = 1
            }

        }

        if (win) {
            winsound.play()
            box.forEach(a => {
                a.removeEventListener("click", handler)
            })
        }
    }
}



function reset() {
    //  box=Array.from(document.getElementsByClassName("griditems"));
    //  box.forEach(e=>{ 
    //          e.innerText=""
    //  })
    //  flag=0;

    //  document.getElementById("message").remove()

    location.reload()


}

let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", reset);



