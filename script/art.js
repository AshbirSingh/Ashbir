// SKY (background)
document.body.style.backgroundColor = "lightblue";

// SUN
let sun = document.createElement("div");
document.body.appendChild(sun);

sun.style.width = "80px";
sun.style.height = "80px";
sun.style.backgroundColor = "yellow";
sun.style.borderRadius = "50%";
sun.style.position = "absolute";
sun.style.top = "50px";
sun.style.left = "120px";

// GROUND
let ground = document.createElement("div");
document.body.appendChild(ground);

ground.style.width = "100%";
ground.style.height = "100px";
ground.style.backgroundColor = "green";
ground.style.position = "absolute";
ground.style.bottom = "0";
ground.style.left = "0";
