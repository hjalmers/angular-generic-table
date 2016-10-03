import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {Response, Http } from '@angular/http';
import {GenericTableComponent} from '../../generic-table/generic-table.component';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent {

  public configObject:any;
  public asyncConfigObject:any;


  //public data: [Object];
  @Output() data = new EventEmitter();
  @ViewChild(GenericTableComponent)
  private myTable: GenericTableComponent;
  //queries: FirebaseListObservable<any[]>;

  public customNext = function(comp){
    console.log('test',comp);
    comp.nextPage();
  };

  ngAfterViewInit() {

  }


  constructor(private http: Http) {
    /*this.queries = af.database.list('/queries');

     this.af.auth.subscribe(response => {
     //Here you get the user information
     console.log('auth',response);
     });
     this.asyncConfigObject = {
     settings:[{
     objectKey:'name'
     },{
     objectKey:'description'
     },{
     objectKey:'created'
     },{
     objectKey:'query'
     }],
     fields:[{
     name:'Name',
     objectKey:'name'
     },{
     name:'Description',
     objectKey:'description',
     },{
     name:'Created',
     objectKey:'created'
     },{
     name:'Query',
     objectKey:'query'
     }],
     data:this.queries
     };
     */
    let url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
    //let url = './app/generic-table/data.json'; // json mock file
    this.configObject = {
      settings:[{
        objectKey:'fullName',
        visible:true,
        sort:'asc',
        columnOrder:3
      },{
        objectKey:'favoriteColor'
      },{
        objectKey:'birthday',
        visible:true
      },{
        objectKey:'age',
        visible:true,
        enabled:true,
        sort:'enable',
        sortOrder:0,
        columnOrder:2
      }],
      fields:[{
        name:'Name',
        objectKey:'fullName'
      },{
        name:'Favorite color',
        objectKey:'favoriteColor',
        classNames:'text-right',
        render:function(row){return '<div style="float:right;width:15px;height:15px;border-radius:50%;background: '+row.favoriteColor+'"></div>'}
      },{
        name:'Birthday',
        objectKey:'birthday'
      },{
        name:'Age',
        objectKey:'age',
        classNames:"text-right",
        render: function(row){return row.birthday },
        value: function(row){return row.birthday }
      }],
      data:[]
    };
    http.get(url)
      .map((res: Response) => res.json())
      .subscribe(res => {
        console.log(res,this.data);
        this.configObject.data = res.data;
        //this.myTable.nextPage();
        //this.data.emit(res);
        /*.filter(function(obj){
         //if(true){
         console.log('use filters');

         for (let property in filter) {
         if (filter.hasOwnProperty(property)) {
         //console.log(property);
         //console.log(filter[property].indexOf(obj[property]));
         return filter[property].indexOf(obj[property]) !== -1

         // do stuff
         }
         }*/
        //return obj.fullName === 'Aaron Lynch'
        //} else {
        //console.log('don´t use filters');
        //return obj
        //}

        //});
        //this.getTotalPages();
        //console.log(`Prices higher than $30:`,res)
      });
  }
  public addData = function(){
    this.configObject.data.push({"fullName":"Robert Hjalmers","favoriteColor":"#00BBD5","birthday":"871179502"});
    console.log(this.configObject.data.length);
  };
  public addFireData = function(){
    this.queries.push({"name":"test","created":1471784814971,"description":"Hello","query":{}});
  };

}
