import { Component,  } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <ol>
    <li>Add a Input field which updates a property ('username') via Two-Way-Binding</li>
    <li>Output the username property via String Interpolation (in a paragraph below the input)</li>
    <li>Add a button which may only be clicked if the username is NOT an empty string</li>
    <li>Upon clicking the button, the username should be reset to an empty string</li>
  </ol>
  <form>
    <input type="text" [(ngModel)]="username" name="first">
    <p>{{username}}</p>
    <button [disabled]="username === ''" (click)="resetString()"> yurr</button>
  </form>
  `
})
export class AppComponent{
  username: string = "";
  isUsernameEmpty: boolean = true;
  resetString(){
    this.username = "";
  }
  title = 'basics-assignment-2-start';
}
