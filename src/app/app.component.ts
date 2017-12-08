import { Component } from '@angular/core';
import { IParticle } from './logo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public title = 'step2';
    public buttonText = 'Start Changes';
    public particles: IParticle [] = [];

    private _timer: any;

    constructor () {
        for (let i = 0 ; i < 50000 ; i++) {
            this.particles.push({ x: Math.random() * 500, y: Math.random() * 500});
        }
    }

    public onChanges () {
        if (this._timer) {
            clearInterval(this._timer);
            this._timer = undefined;
            this.buttonText = 'Start Changes';
        } else {
            this._timer = <any>setInterval(() => this.change(), 100);
            this.buttonText = 'Stop Changes';
        }
    }

    private change () {
        const p: IParticle [] = [];
        for (let i = 0 ; i < 50000 ; i++) {
            p.push({ x: Math.random() * 500, y: Math.random() * 500});
        }
        this.particles = p;
    }

}
