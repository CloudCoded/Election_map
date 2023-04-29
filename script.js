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

    let header = stateInfoTable.children[0];
    let body = stateInfoTable.children[1];

    let stateName = header.children[0].children[0];
    let abbrev = header.children[0].children[1];

    let candidate1Name = body.children[0].children[0];
    let candidate2Name = body.children[1].children[0];

    let candidate1Results = body.children[0].children[1];
    let candidate2Results = body.children[1].children[1];

    let winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].namefull;
    abbrev.innerText = '(' +theStates[state].nameAbbrev + ')';

    candidate1Name.innerText = betsy.name;
    candidate2Name.innerText = akindolapo.name;

    candidate1Results.innerText = betsy.electionResults[state];
    candidate2Results.innerText = akindolapo.electionResults[state];

    if(theStates[state].winner === null){
        winnersName.innerText = 'DRAW';
    }
    else{
        winnersName.innerText = theStates[state].winner.name;
    }
};

betsy.tallyUpTotalVotes();
akindolapo.tallyUpTotalVotes();

console.log(betsy.totalVotes);
console.log(akindolapo.totalVotes);

console.log("Betsy's color is: " + betsy.partyColor);
console.log("Akindolapo's color is: " + akindolapo.partyColor);

let winner = "???";

if(akindolapo.totalVotes > betsy.totalVotes){
    winner = akindolapo.name;
}
else if(akindolapo.totalVotes < betsy.totalVotes){
    winner = betsy.name;
}
else{
    winner = "DRAW";
}

console.log("AND THE WINNER IS..." + winner + "!!!");