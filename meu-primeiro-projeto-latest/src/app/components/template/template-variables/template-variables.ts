import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component';

@Component({
  selector: 'app-template-variables',
  imports: [NewComponent],
  templateUrl: './template-variables.html',
  styleUrl: './template-variables.scss',
})
export class TemplateVariables implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;

  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.childComponent.name);
  }
}
