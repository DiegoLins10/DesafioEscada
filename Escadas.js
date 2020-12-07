// @Author Diego Lins


function escada(num){
    var array = [];
     for(i = 1; i<=num; i++){
       let espaco = num - i;
       array.push(" ".repeat(espaco) + "#".repeat(i));
         
     }
 return array;
 }