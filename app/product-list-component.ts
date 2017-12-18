import {Component} from '@angular/core'
@Component({
    selector:'events-app',
    moduleId:module.id,//We have to add this line if the template is in same folder
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent{    
    toggle(): void {
        if(this.ima){
            this.ima = false
        }
        else{
            this.ima = true
        }
    }
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://photocascadia.files.wordpress.com/2011/09/300x200-300dpi.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://cdn.buildmatic.in/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/b/a/ba.sh.jaq.100031-jaquar_rain_shower_300_x_200_mm_without_arm_ohs-chr-49497_-1_3.jpg"
        }
    ];

    pageTitle: string="Product page"
    ima :boolean= true
}