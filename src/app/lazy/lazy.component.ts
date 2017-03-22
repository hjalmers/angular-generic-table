import {Component, Output, EventEmitter, ViewChild} from '@angular/core';
import {Response, Http, URLSearchParams, RequestOptions} from '@angular/http';
import {GtConfig} from '../../generic-table/interfaces/gt-config';
import {CustomRowComponent} from '../custom-row/custom-row.component';
import {GenericTableComponent} from '../../generic-table/components/generic-table.component';
import {GtInformation} from '../../generic-table/interfaces/gt-information';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent {

  public configObject: GtConfig<any>;
  public expandedRow = CustomRowComponent; // this is the component that will be displayed when expanding a row

  // only used by example
  escape = ['[gtClasses]','[gtSettings]','[gtFields]','[(gtData)]','[gtRowComponent]','[gtOptions]','[genericTable]','[gtInfo]', 'gtEvent', 'gtData','#myTable','ngModel'];

  @ViewChild(GenericTableComponent)
  private myTable: GenericTableComponent<any, CustomRowComponent>;

  @Output() data = new EventEmitter();
  public url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point

  private req; // used for canceling previous requests

  public trigger = function($event){
    switch($event.name){
      case 'gt-page-changed-lazy':
        this.getData($event.value.pageCurrent,$event.value.recordLength);
        break;
      case 'gt-sorting-applied':
        console.log($event.value);
        break;
      default:
        console.log($event);
        break;
    }
  };


  constructor(private http: Http) {

    //let url = './app/generic-table/data.json'; // json mock file
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', '1');
    params.set('per_page', '10');

    this.configObject = {
      settings:[{
        objectKey:'id',
        visible:true,
        sort:'desc',
        columnOrder:0
      },{
        objectKey:'name',
        visible:true,
        sort:'enable',
        columnOrder:1
      },{
        objectKey:'email',
        visible:true,
        enabled:true,
        sort:'enable',
        sortOrder:0,
        columnOrder:2
      },{
        objectKey:'gender',
        visible:true,
        enabled:true,
        sort:'enable',
        sortOrder:0,
        columnOrder:3
      },{
        objectKey:'favorite_color',
        visible:true,
        enabled:true,
        sort:'disable',
        sortOrder:0,
        columnOrder:4
      }],
      fields:[{
        name:'Id',
        objectKey:'id',
        expand:true,
        classNames:'clickable'
      },{
        name:'Name',
        objectKey:'name',
        value:function(row){return row.first_name + ' ' + row.last_name},
        render:function(row){//if(row.first_name && row.last_name){
          return '<div>'+row.first_name + ' ' + row.last_name +'</div>';
          //} else {
          //return '';
          //}
        },
        sort:function(row){return row.first_name + ' ' + row.last_name}
      },{
        name:'Favorite color',
        objectKey:'favorite_color',
        classNames:'text-xs-right',
        render:function(row){return '<div style="float:right;width:15px;height:15px;border-radius:50%;background: '+row.favorite_color+'"></div>'},
        click:(row)=>{return console.log(row.first_name + '\'s favorite color is: ' + row.favorite_color );}
      },{
        name:'Gender',
        objectKey:'gender'
      },{
        name:'Email',
        objectKey:'email',
        render: function(row){return '<a href="mailto:'+row.email+'">'+row.email+'</a>' },
      }],
      data:[]
    };
    this.getData(1,10);
  }

  public getData = function(pageCurrent, recordLength){
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', pageCurrent);
    params.set('per_page', recordLength);

    // if we have an ongoing request cancel it
    if(typeof this.req !== 'undefined'){
      this.req.unsubscribe();
    }

    // create a new request
    this.req = this.http.get(this.url, {
      search:params
    })
      .map((res: Response) => res.json())
      .subscribe(res => {
        this.configObject.data = res.data;
        this.configObject.info = <GtInformation>res['paging'];
        this.configObject.info.searchTerms = 'al';
      });
  };
}
