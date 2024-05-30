// var email = true;
// var facebbook = false;
// var google = false;

// if (email) {
//     console.log("login success");
// }
// if (facebbook) {
//     console.log("login success");
// }
// if (google) {
// }

// if (email || facebbook || google) {

//     console.log("login success");
// } else {
//     console.log("error");
// }

var isloggedin = true;
var isemailverified = false;
var cardinfo = false;
// if (isloggedin) {
//     console.log("loggedIn sccussfully");
//     if (isemailverified) {
//         console.log("email is verfied");
//         if (cardinfo) {
//             console.log("you can make a purchase");
//         }
//     }
// }

if (isloggedin && isemailverified && cardinfo) {
    console.log("you can make a purchase");
}else{
    console.log("you cannot login because");
    if (isloggedin == false) {
        console.log("loggin in missing,");
    }
    if (isemailverified == false) {
        console.log("Email in missing,");       
    }
    if (cardinfo == false) {        
        console.log("cardinfo in missing,");
    }
}