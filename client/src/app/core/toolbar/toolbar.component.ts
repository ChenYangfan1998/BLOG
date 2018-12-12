import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarService} from '../../service/ui/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  mode = {
    light: true,
    dark: false
  };

  constructor(
    private router: Router,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.state.subscribe(
      (mode) => {
        if (mode === 'dark') {
          this.mode.light = false;
          this.mode.dark = true;
        } else {
          this.mode.light = true;
          this.mode.dark = false;
        }
      }
    );
  }

  toHome () {
    this.router.navigateByUrl('/');
  }

}
