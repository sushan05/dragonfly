# ngx-dragonfly

This librabry is for Angular (2+) projects to build a tabular list from the data fetched through the provided api url

## Installing

```
npm install ngx-dragonfly
```

## Implementation

Simply first import the module and service file in your app.module.ts as shown below

```
import { DragonflyModule } from 'ngx-dragonfly/dragonfly.module';

imports : [DragonflyModule]

```

Once importing is done, you can either print the list view of data fetched from api url or get the fetched data in you component.ts file

### Displaying the tabular list view

app.component.html
```
    <app-unit-list
                [apiUrl]        = "myApiUrl"
                [dataNode]      = "myDataNode"
                [tableHeader]   = "myTableHeaders"
                tableClass      = "table-hover table"
                methodCall      = "post"
                [dataTotalNode] = "myDataTotalNode"
                [postBodyStr]   = "myPostBodyStr"
                [showPagination] = true
                [postBodyNodeDetails] = "myPostBodyNodeDetails"
        >
    </app-unit-list>
```

app.component.ts
```
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {
    myData;
    myApiUrl;
    myTableHeaders;
    myDataNode;

    constructor(private _dragSer : DragonService){
        this.myApiUrl = "http://demo.appcarvers.com/junite/index.php?option=com_api&app=content&resource=articles&format=raw&lang=en";
        this.myDataNode = ['data', 'data', 'results'];
        this.myTableHeaders =[
                                {label : "Image", identifier : ['images', 'intro_image'], displayType : 'image'},
                                {label : "Title", identifier : ['title']},
                                {label : "Categroy", identifier : ['catid', 'title']}
                            ];
    }

    }

```

### Fetching data in your component.ts file 

```
    import { Component } from '@angular/core';
    import { DragonService } from 'ngx-dragonfly/dragon.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers : [DragonService]
    })
    export class AppComponent {
        title = 'app works!';
        myData;
        myApiUrl;
        myDataNode;
        myServiceData;

        constructor(private _dragSer : DragonService){
            this.myApiUrl = "http://demo.appcarvers.com/junite/index.php?option=com_api&app=content&resource=articles&format=raw&lang=en";
            this.myDataNode = ['data', 'data', 'results'];

            this._dragSer
                        .getData(this.myApiUrl, 'get', this.myDataNode)
                        .subscribe(data => {
                                    this.myServiceData = data;
                                    console.log(this.myServiceData);
                                });
        }

    }
```
### Docs in progress