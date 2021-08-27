class Poll {
    constructor(question, time, embed){
        this.question = question;
        this.time = time;
        this.emned = embed;
    }

    get question(){
        return this.question;
    }

    get time(){
        return this.time;
    }

    get embed(){
        return this.embed;
    }

}

