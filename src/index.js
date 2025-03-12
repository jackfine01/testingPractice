function capitalize(string){
    let firstChar = string.charAt(0).toUpperCase();
    let oldChars = string.slice(1);
    return firstChar+oldChars;
};
capitalize('example')