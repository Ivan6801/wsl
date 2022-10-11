

function addWord (user, word ) {
    return new Promise((resolve, reject) => {
        if (!user || !word){
            console.error('[Message Controller] No hay usuario o mensaje');
            reject ('Los datos son incorrectos ');
            return false;
        }
        const fullWord = {
            user: user,
            word: word,
            date: new Date(),
        };
        console.log(fullWord);
        resolve(fullWord);
    });
    
}

module.exports = {
    addWord,
}


