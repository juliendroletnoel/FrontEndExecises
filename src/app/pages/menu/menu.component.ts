import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _router: Router;

  constructor(private _injectedRouter : Router) {

    this._router = _injectedRouter;
   }

  ngOnInit(): void {
  }

  public navigate(){
    this._router.navigate(['pregame/'])
  }

}
