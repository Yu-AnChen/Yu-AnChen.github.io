import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-links',
  template: `
  <div class="contact-icons text-right pr-3 pt-2">
    <div>
        <a href="https://github.com/yu-anchen" class="pl-5">
          <svg class="icon px-1 contact-icon">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
      </div>
      <div>
        <a href="mailto:atwood12@gmail.com" class="pl-5">
          <svg class="icon px-1 contact-icon">
            <use xlink:href="#icon-mail_outline"></use>
          </svg>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yuanchenbio" class="pl-5">
          <svg class="icon px-1 contact-icon">
            <use xlink:href="#icon-linkedin-square"></use>
          </svg>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./contact-links.component.css']
})
export class ContactLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
