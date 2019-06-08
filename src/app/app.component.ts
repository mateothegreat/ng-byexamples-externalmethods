import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {

    public ngOnInit() {

        window[ 'app' ] = window[ 'app' ] || {};
        window[ 'app' ].namespace = window[ 'app' ].namespace || {};

        window[ 'app' ].namespace.myAngularMethod = this.myAngularMethod.bind(this);

    }

    public ngOnDestroy() {

        window[ 'app' ].namespace.myAngularMethod = null;

    }

    public myAngularMethod(args: any): void {

        console.log('myAngularMethod', args);

    }

}
