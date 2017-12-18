import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from  './events-app-component'
import {ProductListComponent} from './product-list-component'
@NgModule({
    imports: [BrowserModule],
    declarations: [ProductListComponent],
    bootstrap: [ProductListComponent]    
})

export class AppModule{

}