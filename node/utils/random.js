export default function(randomFlag, min, max) {
    let str = '',
        rang = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (randomFlag) {
        rang = Math.round(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < rang; i++) {
        var pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}