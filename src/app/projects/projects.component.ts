import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // showDetail = {};
  @Input() project: any;
  @Input() showDetail: any;
  @Output() onShowDetailChange = new EventEmitter<boolean>();

  constructor() { }

  showDetailChange(show: boolean) {
    this.onShowDetailChange.emit(show);
  }
}
