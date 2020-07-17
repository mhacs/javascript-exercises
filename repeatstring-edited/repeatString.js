const repeatString = function(letter, repitition) {
    if (repitition < 0){
        return ''
        let str = ''
        for(i=0; i<repitition; i++){
            str += letter
        }
        return str
    }
}

module.exports = repeatString