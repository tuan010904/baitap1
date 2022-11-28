let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let fname = id("ho"),
    lname = id("ten"),
    name = id("tenNguoiDung"),
    successIcon= classes("success-icon");
form.addEventListener("submit", (e)=> {
        e.preventDefault();
        engine(fname, 0, "Username cannot be blank");
        engine(lname, 1, "Email cannot be blank");
       
});
let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border= "6px solid red";
       
        successIcon[serial].style.opacity="0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border= "6px solid green";
       
        successIcon[serial].style.opacity="1";

    }

 }