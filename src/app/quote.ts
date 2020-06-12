export class Quote {
    public showDescription: boolean;
    like: number;
    quote: string;
    dislike: number;
    constructor (public id: number ,public name: string,public description: string,public completeDate: Date, public clickCounter: number,public dislikeCounter: number,){
        this,this.showDescription=false;
    } 
}
