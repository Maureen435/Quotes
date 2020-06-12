import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1, 'Watch like you have never watched', 'Author:Whitney',  new Date(2021,1,10),0,0),
    new Quote (2, 'Flirt be like this is too much', 'Author:Rodgers', new Date(2021,1,10),0,0),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote) {
    let quoteLenght = this.quotes.length;
    quote.id = quoteLenght + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote); 
  }

  clickCounter = 0;
  dislikeCounter = 0;

  highestCounter= 0;
  bestQuote: string;

  findHighestVotes(){
    this.highestCounter = 0;
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].clickCounter>this.highestCounter){
        this.highestCounter = this.quotes[i].clickCounter;
        this.dislikeCounter = this.quotes[i].dislikeCounter;
        this.bestQuote = this.quotes[i].name;
      }
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        Are you sure you want to delete ${this.quotes[index].name}?
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }

    }
  }
  countClick(quote) {
    quote.clickCounter = quote.clickCounter + 1;
  }
  countDislike(quote) {
    quote.dislikeCounter = quote.dislikeCounter + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
