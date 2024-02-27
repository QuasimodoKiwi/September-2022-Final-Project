function randomizer(){
    let result = document.getElementById("output");
    let child = document.createElement("p");
    var limit = Number(document.getElementById("passLength").value);
    var checkBox = document.getElementsByTagName("INPUT");
    console.log(checkBox);

    let output="";

    if(checkBox[1].checked){            
        let up="ABCDEFGHIJKLMNOP";
        output+=up
     }
     if(checkBox[2].checked){
         let low="abcdefghijklmnop";
         output+=low
     }
     if(checkBox[3].checked){
         let num="123456789";
         output+=num
     }
     if(checkBox[4].checked){
         let symbols = "`~!@#$%^&*()-_+=\\|?<>,.[]{}:;\"/";
        output+=symbols;
     }

     //shuffle output
     var arr = output.split("");
     let n = arr.length;
     for(var i = 0; i < n-1; i++){
        let randomNum = Math.floor(Math.random() * n);
        let j = randomNum;
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        output = arr.join("");
     }

     //shorten output to length
     let shortened = output.substring(0, limit);     

     //display output
     result.innerHTML = shortened;
}