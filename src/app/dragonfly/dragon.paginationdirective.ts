import { Directive, ElementRef, Input } from '@angular/core';
import { DragonService } from './dragon.service';
import { Observable } from 'rxjs/Observable';

@Directive({
    selector: 'paginate-unite-list,[paginate-unite-list]',
    exportAs : 'paginateUniteList'
})
export class DragonDirective {
    @Input() apiUrl: string;
    @Input() dataNode;
    @Input() methodCall = 'get';

    directiveData : Observable<any>;

    constructor( private _dragService : DragonService ) {
       this.directiveData = new Observable(observer => {
            this._dragService.getData(this.apiUrl, this.methodCall, this.dataNode).subscribe(gotData => {
                observer.next(gotData);
            });
        });
    }


}