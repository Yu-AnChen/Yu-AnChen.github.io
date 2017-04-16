import { Component } from '@angular/core';
import { dataArr } from './data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profolio',
  templateUrl: './profolio.component.html',
  styleUrls: ['./profolio.component.css']
})
export class ProfolioComponent {
  // @ViewChild('acc') acc;
  data: any = dataArr;
  showDetail = {};
  category: String;
  nav: Array<String> = [ 'code', 'research'/*, 'baking'*/];
  navText: Array<String> = ['web development', 'biomedical research']
  route: any;

  constructor(route: Router) {
    this.route = route;
  }

  ngOnInit() {
    this.category = this.route.url.split('/')[1];
  }
  getNavText(nav) {
    if (this.nav.indexOf(nav) < 0) {
      return 'not found';
    }
    return this.navText[this.nav.indexOf(nav)];

  }
  changeCategory(str) {
    if (!str) { return; }
    return this.category = str;
  }
  getImgUrl(str) {
    if (!str) { return; }
    return `assets/img/${str}`;
  }

}
