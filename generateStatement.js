const generateStatement = (num) => {

    let statements = [];

    for(let i=0; i<num; i++){

        let statement = "";
        let singularGrammar = (Math.random()>0.5) ? true : false;

        if(singularGrammar){
            let statementSingular = `That shirt was looking really fine for a while. `;
            statement = statementSingular;
        } else {
            let statementPluralVerb = `Your eyes are so okay these days.`;
            statement = statementPluralVerb;
        }    

        statements.push({statement});
    }


    return statements;

};

module.exports = generateStatement;