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