console.log("Hello everyone!");

let heading = document.querySelector("h1");
// console.log(heading);

let btn = document.querySelector(".btn");
let first_text = document.querySelector(".first_text");
let subheading_1 = document.querySelector(".activity")
let about_me = document.querySelector(".about_me");
let btn_2 = document.querySelector(".btn_2");
let btn_3 = document.querySelector(".btn_3");
let photo = document.querySelector("img.profile");
let hobbies = document.querySelector(".hobbies");
let sec_p = document.querySelector(".sec_p")
let newPhoto = document.createElement("img");
newPhoto.src = "https://cdn.pixabay.com/photo/2019/05/29/18/20/dog-4238167_960_720.jpg";

heading.addEventListener("click", () => {
    heading.innerText = "O mnie";
    heading.style.color = "#CD853F";
    heading.style.fontStyle = "italic";

    
})

btn.addEventListener("click", () => {
    subheading_1.innerText = "Przepis";
    subheading_1.style.color = "#921b32c5";
    subheading_1.style.textAlign = "center";
    first_text.innerText = "Ta sekcja została zmieniona po naciśnięciu tego przycisku jak zauważyłeś. Teraz dam ci przepis na kanapkę. Po pierwsze potrzebujesz kromki pieczywa, bekonu, sałaty, serka topionego, pomidora i ogórka. Kromkę posmaruj serkiem, położ na to sałatę, następnie bekon i reszte składników. Smaczengo!";
    first_text.style.fontSize = "18px";
    about_me.style.backgroundColor = "#f1d8b4";
    btn.style.backgroundColor = "#CD853F";
    
   
})
btn_2.addEventListener("click", () => {
    photo.style.borderRadius = "50%";
    photo.style.width = "100px"
})

btn_3.addEventListener("click", () => {
    hobbies.innerText = ""
    hobbies.appendChild(newPhoto);
})