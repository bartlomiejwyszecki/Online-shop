import { Component, Directive, ElementRef, Renderer2 } from "@angular/core";

@Component({
    selector: 'test-module',
    templateUrl: './main.html'
})
export class TestComponent {
    name: string;
    age: number;

    constructor() {
        this.name = "Barłomiej";
        this.age = 24;
    }
}

@Directive({
    selector: '[blue]'
})
export class BlueDirective {
    constructor(renderer: Renderer2, el: ElementRef) {
        renderer.setStyle(el.nativeElement, 'backgroundColor', 'blue');
    }
}

@Directive({
    selector: '[red]'
})
export class RedText {
    constructor(renderer: Renderer2, el: ElementRef) {
        renderer.setStyle(el.nativeElement, 'color', 'red');
    }
}