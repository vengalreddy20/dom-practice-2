let root=document.getElementById("root")

let firstel=document.createElement("h1")
firstel.innerHTML=0;

let incrementbtn=document.createElement("button")
incrementbtn.setAttribute("onclick","increment()")
incrementbtn.addEventListener("mousemove",increment)
incrementbtn.innerText="increment";

let decrementbtn=document.createElement("button")
decrementbtn.setAttribute("onclick","decrement()")
decrementbtn.addEventListener("mousemove",decrement)
decrementbtn.innerText="decrement";

let resetbtn=document.createElement("button")
resetbtn.setAttribute("onclick","reset()")
resetbtn.addEventListener("mousemove",reset)
resetbtn.innerText="reset";

    root.appendChild(firstel);
    root.appendChild(incrementbtn);
    root.appendChild(decrementbtn);
    root.appendChild(resetbtn);

    function increment(){
        let currentval=firstel.innerText;
        let updatedval=parseInt(currentval)+1;
        firstel.innerHTML=updatedval;
    }
    function decrement(){
        let currentval=firstel.innerText;
        let updatedval=parseInt(currentval)-1;
        firstel.innerHTML=updatedval;
    }
    function reset(){
        firstel.innerHTML=0;
    }