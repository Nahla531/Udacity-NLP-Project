function checkForText(inputText) {
    var regex = inputText.match(/^[a-zA-Z]+$/);
    if (regex == null) {
        return 0;
    } else {
        return 1;
    }
}

export { checkForText }