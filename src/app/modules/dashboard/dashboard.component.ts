import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  blogs: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Sample Name A', blogs: 1, address: 'XYZ'},
  {position: 2, name: 'Sample Name B', blogs: 4, address: 'XYZ'},
  {position: 3, name: 'Sample Name C', blogs: 6, address: 'XYZ'},
  {position: 4, name: 'Sample Name D', blogs: 9, address: 'XYZ'},
  {position: 5, name: 'Sample Name E', blogs: 10, address: 'XYZ'},
  {position: 6, name: 'Sample Name F', blogs: 12, address: 'XYZ'},
  {position: 7, name: 'Sample Name G', blogs: 14, address: 'XYZ'},
  {position: 8, name: 'Sample Name H', blogs: 15, address: 'XYZ'},
  {position: 9, name: 'Sample Name I', blogs: 18, address: 'XYZ'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'blogs', 'address', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      const temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
