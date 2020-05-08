import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../data/models';

@Component({
  selector : 'app-filter',
  templateUrl : './filter.component.html',
  styleUrls : [ './filter.component.css' ]
})
export class FilterComponent implements OnInit {

  constructor() {
  }
  @Input() maxSliderPrice = 0;
  @Input() minSliderPrice = 0;
  @Input() CategoryList: string[];
  @Output() productsSearchEmitter = new EventEmitter<string>();
  @Output() CategoryEmitter = new EventEmitter<string>();

  IsSelected = false;
  // tslint:disable-next-line:variable-name
  _searchTerm: string;

  searchByTerm() {
    this.productsSearchEmitter.emit(this._searchTerm);
  }

  searchByCategory(selectedCategory: any, selected: boolean) {
    if (this.IsSelected === false) {
      this.IsSelected = true;
    } else if (this.IsSelected === true) {
      this.IsSelected = false;
      selectedCategory = undefined;
    }
    this.CategoryEmitter.emit(selectedCategory);
  }

  ngOnInit(): void {
  }

}
