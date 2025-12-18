import { Component, TemplateRef } from '@angular/core';
import {
  AsyncPipe,
  NgFor,
  NgIf,
  NgForOf,
  NgIfContext,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  imports: [NgIf, AsyncPipe, NgForOf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './template-control-flow.html',
  styleUrl: './template-control-flow.scss',
})
export class TemplateControlFlow {
  public isTrue = true;
  public switchCondition = 'A';

  public loadingData$: Observable<string[]> = of(['item 1', 'item 2', 'item 3']).pipe(delay(3000));
  public itens: Array<{ name: string }> = [{ name: 'Patrick Has' }];

  // forma antiga
  loading: TemplateRef<NgIfContext<string[] | null>> | null | undefined;

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}
