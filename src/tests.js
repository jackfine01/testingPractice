// function capitalize(string){
//     let firstChar = string.charAt(0).toUpperCase();
//     let oldChars = string.slice(1);
//     return firstChar+oldChars;
// }
// module.exports = capitalize;

// function reverseString(string){
//     let splitString = string.split("");
//     splitString = splitString.reverse();
//     splitString = splitString.join("");
//     return splitString;
// };
// module.exports = reverseString;

// const calculator = {
//     add:    (a, b)=>(a+b),
//     subtract: (a,b)=>(a-b),
//     multiply: (a,b)=>(a*b),
//     divide: (a,b)=>(a/b)

// };
// module.exports = calculator;

// function caesarCipher(string, shift){
//     const alphabetL = [
//         'a',
//         'b',
//         'c',
//         'd',
//         'e',
//         'f',
//         'g',
//         'h',
//         'i',
//         'j',
//         'k',
//         'l',
//         'm',
//         'n',
//         'o',
//         'p',
//         'q',
//         'r',
//         's',
//         't',
//         'u',
//         'v',
//         'w',
//         'x',
//         'y',
//         'z',
// ];
//     const alphabetU = [
//         'A',
//         'B',
//         'C',
//         'D',
//         'E',
//         'F',
//         'G',
//         'H',
//         'I',
//         'J',
//         'K',
//         'L',
//         'M',
//         'N',
//         'O',
//         'P',
//         'Q',
//         'R',
//         'S',
//         'T',
//         'U',
//         'V',
//         'W',
//         'X',
//         'Y',
//         'Z',
//     ];

//     function findIndex(array, value){
//     let index;
//         for(let i = 0; i < array.length; i++){
//             if(array[i]===value)
//                 index = i;
//         }
//     return index;
//     };

//     let splitString = string.split('');
//     let arrString = [];
//     while(splitString.length>0){
//         queue = [splitString.shift()]
//         while(queue.length>0){
//             let val = queue.shift();
//             let code = val.charCodeAt(0);
//             if(code>=65 && code <=90){
//                 let push = alphabetL[findIndex(alphabetU, val) + shift].toUpperCase();
//                 arrString.push(push);
//             } else if(code>=97 && code <=122){
//                 let push = alphabetU[findIndex(alphabetL, val) + shift].toLowerCase();
//                 arrString.push(push);
//             } else {
//                 let push = val;
//                 arrString.push(push);
//             };
//         }
//     }
//     final = arrString.join('');
//     return final;
// };
// module.exports = caesarCipher;

function analyzeArray(array){

    return {
        average: averageCalc(),
        min: minCalc(),
        max: maxCalc(),
        length: lengthCalc()
    }


    function mergeSort(arr){
        if(arr.length == 1){
            const baseArray = [arr[0]];
            return baseArray;
        }
        else{
            const mid = Math.ceil(arr.length / 2);
            const arrLeft = arr.slice(0, mid);
            const arrRight = arr.slice(mid);
                const subArrLeft = mergeSort(arrLeft);
                const subArrRight = mergeSort(arrRight);
    
            const subArr = [];
            while(subArrLeft.length > 0 && subArrRight.length > 0){
                if(subArrLeft[0]<subArrRight[0]){
                    subArr.push(subArrLeft.shift())
                }
                else
                    subArr.push(subArrRight.shift())
            }
            if(subArrLeft.length==0 && subArrRight.length>0){
                for(let i = 0; i<subArrRight.length; i++){
                    subArr.push(subArrRight[i])
                }
            }
            else{
                for(let i = 0; i<subArrLeft.length; i++){
                    subArr.push(subArrLeft[i])
                }
            }
            return subArr;
        };
    }
    function averageCalc(){
        let sum = 0;
        for(let i = 0; i < array.length; i++){
            sum += array[i];
        }
        return sum/array.length;
    };
    function minCalc(){
        let newArr = mergeSort(array);
        return newArr[0];
    };
    function maxCalc(){
        let newArr = mergeSort(array);
        return newArr[array.length-1];
    };
    function lengthCalc(){
        return array.length;
    };
};
module.exports = analyzeArray;