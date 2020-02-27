function to_dozenal() {
    let el;
    let dek;
    let base10 = document.getElementById("base10").value;
    let base12 = Number(base10).toString(12);
    if (base12 === "NaN") {
        document.getElementById("base12").value = "Enter a valid number.";
        return
    }
    if (!document.getElementById("non-unicode").checked) {
        dek = "\u218A";
        el = "\u218B";
    } else {
        dek = "X";
        el = "E";
    }
    base12 = base12.replace(/a/g, dek);
    base12 = base12.replace(/b/g, el);
    base12 = base12.replace(".", ";");
    document.getElementById("base12").value = base12;
}

function to_decimal() {
    let base12 = document.getElementById("base12").value;
    base12 = base12.replace(";", ".");
    const dek = "a"; // Javascript is expecting a and b as dek and el
    const el = "b";  // I'm sticking with Dozenal Society of America (DSA) ascii inputs though
    base12 = base12.replace(/[x,X,\u218A]/g, dek);
    base12 = base12.replace(/[e,E,\u218B]/g, el);
    let base10 = parseInt(base12, 12).toString(10);
    if (base10 === "NaN") {
        document.getElementById("base10").value = "Enter a valid number.";
        return
    }
    document.getElementById("base10").value = base10;
}

function run_clock() {
    setInterval(function () {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        hours = ( hours < 10 ? "0" : "" ) + hours.toString(12).replace(/a/g, 'X');
        hours = hours.replace(/b/g, 'E');
        minutes = ( minutes < 10 ? "0" : "" ) + minutes.toString(12).replace(/a/g, 'X');
        minutes = minutes.replace(/b/g, 'E');
        seconds = ( seconds < 10 ? "0" : "" ) + seconds.toString(12).replace(/a/g, 'X');
        seconds = seconds.replace(/b/g, 'E');
        document.getElementById("clock").innerHTML=""+hours+":"+minutes+":"+seconds;
    }, 1000);
}