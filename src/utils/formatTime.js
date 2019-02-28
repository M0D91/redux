const formatTime = (secs) => {
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);

    // console.log(beautify(seconds.toString()));
    return `${minutes}:${beautify(seconds.toString())}` 
}

const beautify = (string) => {
    // Arregla que los el timer se vea con 1 sola cifra cuando 
    // sea una cantidad menor que 10. Ej: 1:5 -> 0:05
    const base = '00';
    return base.substring(0, base.length - string.length) + string;
}

export default formatTime;