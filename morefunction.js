var getrole =  (name,role) => {
    switch (role){
        case "admin":
            return `${name} you are admin and you have full access`;
            break;
        case "subadmin":
            return `${name} you are sub-admin and you have create and delete `;
            break;
        case "pretest":
            return `${name} you are pretester and you are tester`;
            break;
        case "user":
            return `${name} you are user `;
            break;
            default:
            return `${name} you are trial user `;
            break;
    }
}

// console.log(getrole("hunny","admin"));
var getinfo = getrole("hunny", "gamer");
console.log(getinfo);