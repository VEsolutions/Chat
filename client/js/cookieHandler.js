function getCookie(cookieName) {
                var name = cookieName + "=";
                var cookieArray = document.cookie.split(";");
                for(var i=0; i<cookieArray.length; i++) {
                    var c = cookieArray[i];
                    while (c.charAt(0)==" ") {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

function logIn(user) {
    socket.emit('chat message', user + "connected");
}

function setCookie(cookieName, cookieValue, numberOfDays) {
    if (cookieValue == "") {
        return true;
    }
    var d = new Date();
    d.setTime(d.getTime() + (numberOfDays * 24 * 60 * 60 * 1000));
    console.log("cookie expires " + d.toGMTString());
    var expires = "expires=" + d.toGMTString();
    
    document.cookie = cookieName+"="+cookieValue+"; "+expires + "; path=/";
    return false;
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        logIn(user);
    }else {
        user = prompt("Your username pls: ","");
        if (user != "" && user != null) {
           setCookie("username", user, 30);
        } else {
            user = "anonymous";
        }
        logIn(user);
    }
}