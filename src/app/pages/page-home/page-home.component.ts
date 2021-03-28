import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
//import { NewsletterService } from '../services/newsletter-service/newsletter.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface email {
  email: string;
}

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})

export class PageHomeComponent implements OnInit {

  subscribeEmail: email = {
    email: ''
  }

  constructor(private router: Router){
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

    // config.interval = 5000;  
    // config.wrap = true;  
    // config.keyboard = false;  
    // config.pauseOnHover = true;  
    // config.showNavigationArrows = true;
  }
    
  ngOnInit() {
    // console.log(this.subscribeEmail);
    // lax.setup();
    // document.addEventListener('scroll', function(x) {
    //   lax.update(window.scrollY)
    // }, false)
    
  }

  onSubscribe(){
    // if( this.subscribeEmail && this.subscribeEmail.email ){
    //   console.log(this.subscribeEmail.email + "Sucesso");
    //   // Fazer a verificação
    //   this.newsletterService.sendNewsletter(this.subscribeEmail).subscribe((reponse)=>{
    //     // Fazer a verificação
    //     console.log(reponse + "OLA");
    //    }); 
    // }else{
    //   console.log(this.subscribeEmail.email + "Error");
    // }
  }
}
