import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarService} from '../../service/ui/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  boxClass = {
    'full-height': true,
    'destroy': false
  };

  constructor(
    private router: Router,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.toolbarService.setMode('dark');
    const box = document.getElementById('box');
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = this.getRandomHeight(window.innerHeight) + 'px';
      star.style.right = this.getRandomWidth(window.innerWidth) + 'px';
      if (i % 5) {
        star.style.animationDelay = (Math.random() * 4).toString() + 's';
      } else {
        star.style.animationDelay = i * 0.8 + 's';
      }
      box.appendChild(star);
    }
  }

  ngOnDestroy () {
  }

  toPlayground () {
    this.boxClass.destroy = true;
    setTimeout(() => {
      // 等待背景过渡
      this.toolbarService.setMode('light');
      this.router.navigateByUrl('/playground');
    }, 500);
  }

  private getRandomHeight (range) {
    return (((Math.random() * range) - range) * 1.5).toString();
  }
  private getRandomWidth (range) {
    return (Math.random() * range - 800).toString();
  }

}
