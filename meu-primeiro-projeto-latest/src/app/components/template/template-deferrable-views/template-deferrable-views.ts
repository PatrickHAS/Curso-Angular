import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  imports: [NewComponent],
  templateUrl: './template-deferrable-views.html',
  styleUrl: './template-deferrable-views.scss',
})
export class TemplateDeferrableViews {
  public isTrue = false;

  public loadingData$: Observable<string[]> = of(['item 1', 'item 2', 'item 3']).pipe(delay(3000));
}
