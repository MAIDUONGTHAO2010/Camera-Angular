import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RongBay.xyz | Admin Site';

  public dropdownList: any = [];
  public selectedItems: any = [];
  public dropdownSettings!: IDropdownSettings;

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
    ];

    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
