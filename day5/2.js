let counter = 1
let cmtcounter = 1 

function like()
{
    counter++;
    let likelement = document.querySelector("#like");

    likelement.innerHTML = "Like "  + counter;
    
}



function commenthere()
{
    let cmtelement = document.createElement("div");
    cmtelement.textContent = "Comment " + cmtcounter;

    cmtelement.style.background = "yellow";
    cmtelement.style.color = "blue";
    cmtelement.style.margin = "3px";

    let commentbox = document.querySelector("#comment");
    comment.appendChild(cmtelement);

    cmtcounter++;

}