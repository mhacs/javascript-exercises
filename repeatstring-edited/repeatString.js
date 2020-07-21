const greeting = function(sayhello, repitition){
    let word = "";
    if(repitition<0){
        return "";
    }
    for (let i=0;i<repitition;i++){
        word += sayhello;
    }
    //greeting("hello guys ", )    
}
console.log("hello guys\n".repeat(3.5))