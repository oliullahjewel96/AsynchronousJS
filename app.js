document.getElementById("button").addEventListener("click", loadData);

function loadData() {
    //Create xhr object

    const xhr = new XMLHttpRequest();

    //OPEN

    xhr.open("GET", "data.txt", true);

    // console.log("READYSTATE", xhr.readyState);

    xhr.onprogress = function() {
        console.log("READYSTATE", xhr.readyState);
    };
    xhr.onload = function() {
        console.log("READYSTATE", xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);

            document.getElementById(
                "output"
            ).innerHTML = `<h2>${this.responseText}</h2>`;
        }
    };

    xhr.onerror = function() {
        console.log("Request could not found");
    };

    // xhr.onreadystatechange = function() {

    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // };
    xhr.send();
}