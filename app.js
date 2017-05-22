function btnhit(){
    var text = document.getElementById("todovalue").value;
    if(text == "" || text == " "){alert("enter any character")}
    else{
    var item = document.createElement("li");
    var textnode = document.createTextNode(text);
    item.appendChild(textnode)
    document.getElementById("list").appendChild(item)}
}