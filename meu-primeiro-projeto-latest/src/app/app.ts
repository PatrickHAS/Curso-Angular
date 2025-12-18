import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';
import { TemplateBinding } from './components/template/template-binding/template-binding';
import { TemplateVariables } from './components/template/template-variables/template-variables';
import { TemplateControlFlow } from './components/template/template-control-flow/template-control-flow';
import { TemplateDeferrableViews } from './components/template/template-deferrable-views/template-deferrable-views';
import { Signals } from './components/signals/signals';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [],
  // templateUrl: './app.html',
  template: `
    <!-- <app-new-component /> -->
    <!-- <router-outlet /> -->
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals /> -->
    <h1>Curso de Angular</h1>
  `,
  // styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('meu-primeiro-projeto-latest');
}
