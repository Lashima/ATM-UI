import { BANKS } from '../../model/banksdetail';
import { Bank } from '../../model/bank';
import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']})

export class FinanceComponent {
  banks$: Observable<Bank[]>;
  filter = new FormControl('');
  

  constructor(pipe: DecimalPipe) {
    this.banks$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

}
function search(text: string, pipe: PipeTransform): Bank[] {
  return BANKS.filter(bank => {
    const term = text.toLowerCase();
    return bank.name.toLowerCase().includes(term);
  });
}