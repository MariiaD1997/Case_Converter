document.getElementById("upper-case").addEventListener("click",
    function () {
        const upperText = document.querySelector("textarea");
        const text = upperText.value;
        upperText.value = toUpperCase(text);
    });

document.getElementById("lower-case").addEventListener("click",
    function () {
        const lowerText = document.querySelector("textarea");
       const text2 = lowerText.value;
       lowerText.value = toLowerCase(text2);
    });

document.getElementById("proper-case").addEventListener("click",
    function properCase() {
        const textArea = document.querySelector("textarea");
        const text3 = textArea.value;
        textArea.value = toProperCase(text3);
    });

document.getElementById("sentence-case").addEventListener("click",
    function sentenceCase() {
        const textArea = document.querySelector("textarea");
        const text4 = textArea.value;
        textArea.value = toSentenceCase(text4);
    });

function toUpperCase (str) {
    return str.toUpperCase();
}

function toLowerCase (str) {
    return str.toLowerCase();
}

function toProperCase (word) {
    let properCase = word.split(" ");
    return properCase.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join(" ");
}

function toSentenceCase (word) {
    let sentenceCase = word.split(". ");
    return sentenceCase.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join(". ");
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click",
    function () {
    const text =  document.querySelector("textarea").value;
    const filename = "text.txt";
        download(filename, text);
    }, false)

