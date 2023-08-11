import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.prefix = "Angular says.....";
        this.name = "Welcome Michael";
        this.colors = ['red', 'blue', 'green', 'yellow', 'indigo'];
        this.Bugatti = { make: "Bugatti", model: "outback 2.5", miles: 582322 };
        this.honda = { make: "honda", model: "accord", miles: 23344 };
        this.BMW = { make: "BMW", model: "X3", miles: 23331 };
        this.cars = [this.Bugatti, this.honda, this.BMW];
    }
    speak() {
        const msg = this.prefix + this.name;
        return msg;
    }
    pack() {
        let age = 40;
        return age;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map