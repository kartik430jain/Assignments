//pattern 1

// const n=5
// let str=''
// var row=1
// while(row<=n){
//     var col=1
//     while(col<=n){
//         if(row===1 || row===n || col===1 || col===n){
//             str += '*'
//         }
//         else{
//             str += ' '
//         }
//         col++
//     }
//     str +='\n'
//     row++
// }
// console.log(str);


//pattern 2

// const n=5
// let str=''
// var row = 1
// while(row<=n){
//     var col=1
//     while(col<=row){
//         str += col
//         col++
//     }
//     str += '\n'
//     row++
// }
// console.log(str)

//pattern 3

// const n=5
// let str=''
// var row=1
// while(row<=n){
//     var space=n-row
//     while(space){
//         str += ' '
//         space--
//     }

//     var col=1
//     while(col<=row){
//         str += col
//         col++
//     }
//     str +=  '\n'
//     row++

// }
// console.log(str)

//pattern 4

// const n=4
// let str=''
// for(var row=1 ; row<=n ; row++){
//     for( var space=1 ; space<=row-1 ; space++){

//         str+=' '
//     }

//     for(var col=1 ; col<=n-row+1 ; col++){
//         str+=col
//     }
//     str+='\n'
// }
// console.log(str)

//pattern 5

// const n=4
// let str=''
// var row=1
// while(row<=n){
//     for(var space=1 ; space <= n-row ; space++){
//         str+=' '
//     }

//     var col=1
//     while(col<=row){
//         str+='*'
//         col++
//     }

    

//     for(var strt=1 ; strt<=row-1 ;strt++){
//         str+='*'
//     }


//     str+='\n'
//     row++
// }
// console.log(str);


//pattern 6

// const n=4
// let str=''
// for(var row=1 ;row<=n ; row++){
//     // let row = '';
//     for(var space=1 ; space <= n-row ; space++){
//         str+=' '
//     }

//     for(var col=1 ; col<=2*row-1 ; col++){
//         str+='*'
//     }
//     str+='\n'
// }

// for (let i = n - 1; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += '*';
//     }
//     row += '\n';
//     str += row
// }
// console.log(str);


//pattern 7

// const n=4
// let str=''
// for(var row=1 ; row<=n ; row++){
//     for( var space=1 ; space<=row-1 ; space++){

//         str+=' '
//     }

//     for(var col=1 ; col<=n-row+1 ; col++){
//         str+='*'
//     }
//     str+='\n'
// }
// console.log(str)


   




