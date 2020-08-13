function send(){

    let userComment = document.querySelector("#inputmsg").value; // we are not using innerHTML wy bcz this is a form element

    //  we are not goint to use createElement
    const newElement = document
      .querySelector("#commentbox")
      .cloneNode(true);
    newElement.removeAttribute("id"); //good practice to keep unique id.
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = userComment;
    newElement.style.background= "rgba(205, 250, 132, 0.904)";
    newElement.style.margin = "7px";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "15px";
    newElement.style.fontSize = "10px";
  
    // comment box elment
    const commentBox = document.querySelector("#middle");
  
    // now we want to add the element at the top.
    // commentBox.appendChild(newElement);
    commentBox.appendChild(newElement);
  
    // clean the input box
    document.querySelector("#inputmsg").value = "";

}