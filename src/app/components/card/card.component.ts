import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  randomText = faker.lorem.lines(1);
  enteredText = '';
  isHidden = false;

  constructor() {}

  ngOnInit(): void {}

  onInput({ target }: Event) {
    const { value } = target as HTMLInputElement;
    this.enteredText = value;
    this.isHidden = this.randomText === value;
  }
  compare(letter: string, enteredText: string) {
    if (!enteredText) return 'pending';
    return letter === enteredText ? 'green' : 'red';
  }
}
