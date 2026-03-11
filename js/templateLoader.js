//async function loadTemplate() {

//const layout = await fetch("templates/layout.html").then(r=>r.text());
//document.body.innerHTML = layout;

//const header = await fetch("templates/header.html").then(r=>r.text());
//document.getElementById("header").innerHTML = header;

//const footer = await fetch("templates/footer.html").then(r=>r.text());
//document.getElementById("footer").innerHTML = footer;

//}

//loadTemplate();



fetch("templates/header.html")
.then(res => res.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});