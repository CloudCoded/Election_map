createPolitician = function(name, partyColor){
    let politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    politician.tallyUpTotalVotes = function(){
        this.totalVotes = 0;

        for(let  i = 0; i < this.electionResults.length; i++){
            this.totalVotes += this.electionResults[i];
        }
    };

    return politician;
};

let akindolapo = createPolitician('Akindolapo Abdulazeez', [245, 141, 136]);
let betsy = createPolitician('Betsy Rocks', [132, 17, 11]);


betsy.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
akindolapo.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

akindolapo.electionResults[9] = 1;
betsy.electionResults[9] = 28;

akindolapo.electionResults[4] = 17;
betsy.electionResults[4] = 38;

akindolapo.electionResults[43] = 11;
betsy.electionResults[43] = 27;

console.log(akindolapo.electionResults);
console.log(betsy.electionResults);


let setStateResults = function(state){
    theStates[state].winner = null;

    if (betsy.electionResults[state] > akindolapo.electionResults[state]){
        theStates[state].winner = betsy;
    }
    else if(betsy.electionResults[state] < akindolapo.electionResults[state]){
        theStates[state].winner = akindolapo;
    }

    let stateWinner = theStates[state].winner;

    if(stateWinner !== null){
        theStates[state].rgbColor = stateWinner.partyColor;
    }
    else{
        theStates[state].rgbColor = [11, 32, 57];
    }

    let stateInfoTable = document.getElementById('stateResults');
}