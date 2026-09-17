// code for the title screen of the genesis revamp written by guac
// hack club rocks

console.log("reborn at last")

let mouseFollower = document.createElement("div");
document.body.appendChild(mouseFollower);
mouseFollower.id = "follower";
document.addEventListener("mousemove", (ev) => {
    mouseFollower.style.top = ev.clientY + "px";
    mouseFollower.style.left = ev.clientX + "px";
})

// messing around with a generator function:
function* ellipsis() {
    while (true) {
        yield ".";
        yield "..";
        yield "...";
    }
}
let gen = ellipsis();
setInterval(() => {
    document.querySelector("#enter p").innerText = "enter" + gen.next().value;
},1000)