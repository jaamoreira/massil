import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-gallery',
  templateUrl: './page-gallery.component.html',
  styleUrls: ['./page-gallery.component.css']
})

export class PageGalleryComponent {

  constructor(private fb: FormBuilder, private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }

    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
        }
    });
  }
}
