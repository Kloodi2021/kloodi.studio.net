function GetParameter(parameterName) {
    let params = new URLSearchParams(window.location.search);
    return params.get(parameterName);
}

function ChangeText(id, text) {
    document.getElementById(id).innerHTML = text;
}