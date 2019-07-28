import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'wasm-web';

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.aaa();
    }, 2000);
  }

  aaa() {
    import('wasm-rust').then(
      res => {
        console.time('rust');
        console.log(res.greet(43));
        console.timeEnd('rust');

        console.time('js');
        console.log(this.greet(43));
        console.timeEnd('js');
      }
    );
  }

  greet(i: number): number {
    if (i === 0) { return 0; }
    if (i === 1) { return 1; }
    return this.greet(i - 1) + this.greet(i - 2);
  }
}

