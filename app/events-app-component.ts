import {Component} from '@angular/core'
import {ProductListComponent} from './product-list-component'
@Component({
    selector:'events-app',
    template:'<h2>Hello,{{name}}</h2>`<div><ProductListComponent></ProductListComponent></div>`'
})
export class EventsAppComponent{
    name: string ="Abhishek Kumar"
}