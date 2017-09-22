import { Directive, ElementRef, Input, ViewChildren, OnChanges } from '@angular/core';
import { DragonService } from './dragon.service';
import { Observable } from 'rxjs/Observable';

@Directive({
    selector: 'custom-unite-list,[custom-unite-list]',
    exportAs : 'uniteList'
})
export class DragonDirective implements OnChanges {
    @Input() apiUrl: string;
    @Input() dataNode;
    @Input() methodCall = 'get';
    @Input() dataTotalNode;
    @Input() postBodyStr;
    @Input() set postBodyNodeDetails(val){
        console.log("setval", val);
        this.localPostBodyNodeDetials = val;
    };
    @Input() dynamicOffset;

    offset;
    localPostBodyNodeDetials

    directiveData : Observable<any>;
    directiveTotalData : Observable<any>;

    // @ViewChildren(custom-unite-list) dirs;

    ngOnChanges(changes){
        if(changes.hasOwnProperty("dynamicOffset"))
        {
            this.callService();
        }
    }

    constructor( private _dragService : DragonService ) {
        this.callService();
    }

    callService(){
        this.directiveData = new Observable(observer => {

        console.log("method call ", this.methodCall);

            var output = this.traverse(this.postBodyStr);

            this._dragService.getData(this.apiUrl, this.methodCall, this.dataNode, this.dataTotalNode, output)
                .subscribe(gotData => {
                    observer.next(gotData.data);

                    this.directiveTotalData = new Observable(totalObserver => {
                        totalObserver.next(gotData.total);
                    })
                });
        });
    }

    traverse(jsonObj, second?) {
        for (var key in jsonObj)
        {
            if (jsonObj.hasOwnProperty(key)) {

                var element = jsonObj[key];
                if( typeof element == "object" ) {
                    console.log("element chec ", element);
                    // if(!second)
                    {
                        this.traverse(element, 'secibd');
                    }
                }
                else {
                    jsonObj[key] = this.localPostBodyNodeDetials[key]['initialValue'];
                    console.log("jsonOb is a number or string = ", key);
                }
            }
        }

        //console.log("return before last ", jsonObj);
        return jsonObj;
    }


}