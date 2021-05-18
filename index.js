function welcomeUser(user) {
    var user = prompt("Hello there! What is your name?");

    if (user === null) {
        return 0;
    }
    
    alert(`Hello there ${user}`);
}

var userName = null;

welcomeUser(userName);
