/*prevent right click */

document.oncontextmenu = () => {
    alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
    return false;
};

//prevent f12 key
document.onkeydown = i => {
    if (i.key == "F12") {
        alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
        return false;
    }

    if (i.ctrlKey && i.key == "u") {
        alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
        return false;
    }

    if (i.ctrlKey && i.key == "c") {
        alert("HEH YOU WILL NEVER COPY MY WORK -RAP2M0");
        return false;
    }

}


