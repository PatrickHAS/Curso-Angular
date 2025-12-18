import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './template-binding.html',
  styleUrl: './template-binding.scss',
})
export class TemplateBinding {
  public name = 'Patrick Has';
  public age = 38;

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public condition = this.age < 1 ? 'Teste1' : 'Teste2';
  public IsDisabled = true;
  public srcValue = 'https://i.pinimg.com/736x/86/73/20/8673208cbb86f8ec902c08cf77300759.jpg';
  public IsTextDecoration = this.age >= 38 ? 'underline' : 'none';

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  // constructor() {
  //   setTimeout(() => {
  //     this.name.set('Monkey D. Luffy');
  //   }, 1000);
  // }
}
