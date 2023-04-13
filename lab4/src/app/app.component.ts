import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  protected css: any;
  protected onCssChange(css: any){
    this.css = css;
  }
}
