const generateStatement = (num) => {

    let statements = [];

    for(let i=0; i<num; i++){

        let statement = "";
        let singularGrammar = (Math.random()>0.5) ? true : false;

        let adjectivePossible = ["really fine", "okay", "passable", "just enough", "absolutely fine", "decent", "not bad", "not too bad", "pretty okay", "awfully different", "different", "so unique", "really one-of-a-kind", "so you", "exactly how it always is", "just like we all expected", "really... good...", "INCREDIBLY DARING", "like nothing else I've ever known", "hilarious", "so woke", "completely unbelievable", "appropriate", "relevant", "like someone who people always describe as having a nice personality", "expected", "present", "better than before", "better than we thought", "better than I thought", "better than anyone knows", "better, really better", "truly underappreciated"];

        let qualifierPossible = ["for a while", "these days", "...to me", "to some people", "for some people", "in this world", "today", "in this light", "for someone like you", "for some people", "but in a good way", "but I really mean it this time", "and no one can say otherwise, even if they're thinking it", "and everyone else is wrong about it", "and we're all the better for it", "#blessed", "...bless your heart", "and I... I just... wow", "this week", "this time", "this morning", "in the light of day", "after all is said and done", "after all that needed work", "but for-real this time", "and in a way that's not so bad", "but, like, not too much", "but, like, not overly so"];        

        if(singularGrammar){
            // for singular verbs
            const subjectPossible = ["That shirt", "He", "Your hair", "Your profile", "Your shirt", "Your dress", "Your food", "Your girlfriend", "Your boyfriend", "Your kid", "Your suit", "Your nose", "Your job", "Your face", "Your mom", "Your family", "Your breath", "Your unemployment history", "Your bank account", "Your timing", "That family", "That person", "That one", "My acquaintance", "The pastor", "Your house", "Your apartment", "Your home", "Your computer", "Your garden", "Your dating history", "Your credit score", "Your credit card debt", "He", "She"];
            let subject = selectRandom(subjectPossible);
            const verbPossible = ["was looking", "is looking", "is seeming", "looks", "seems", "is", "will be", "maybe is", "appears", "100% is", "probably is", "has a chance of being", "might be", "appears to be"];
            let verb = selectRandom(verbPossible);
            let adjective = selectRandom(adjectivePossible);
            let qualifier = selectRandom(qualifierPossible);
            let statementSingular = `${subject} ${verb} ${adjective} ${qualifier}. `;
            statement = statementSingular;
        } else {
            // for plural verbs
            const subjectPossible = ["Your eyes", "Your pants", "You", "They", "We", "Your", "Your feet", "Your hands", "Your eyebrows", "Your parents", "Your children", "Your kids", "Y'all", "You all", "Those people", "You people", "Your friends", "Your grandparents", "Your outfits", "Your dreams", "Your hopes", "Your career prospects", "Your dating prospects", "Your past divorces"];
            let subject = (Math.random()>0.3) ? selectRandom(subjectPossible) : "You";
            const verbPossible = ["were looking", "are looking", "are seeming", "look", "seem", "are", "will be", "maybe are", "appear", "100% are", "probably are", "have a chance of being", "might be", "appear to be"];
            let verb = selectRandom(verbPossible);
            let adjective = selectRandom(adjectivePossible);
            let qualifier = selectRandom(qualifierPossible);
            let statementPluralVerb = `${subject} ${verb} ${adjective} ${qualifier}.`;
            statement = statementPluralVerb;
        }    

        statements.push({statement});
    }

    function selectRandom(choices){
        let index = Math.floor(choices.length*Math.random());
        return choices[index];
    };

    return statements;

};

module.exports = generateStatement;