import { ModuleWithProviders }  from '@angular/core'; //provide our router to the rest of the application
import { Routes, RouterModule } from '@angular/router';//help us render specific components when specific URLs are provided to the router.
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';


const appRoutes: Routes = [   //master list of all available routes in our application.
  {
    path: '', //URL Segment
    component: WelcomeComponent //the component that should be rendered when the user navigates to this route.
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//forRoot() method is passed into routing. Routing is simply a special type of module that includes something called providers to help make information (like our routes) available to the rest of the application
