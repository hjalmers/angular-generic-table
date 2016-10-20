import {Component, Output, EventEmitter} from '@angular/core';
import {Response, Http, URLSearchParams, RequestOptions} from '@angular/http';
import {GtConfig} from '../../generic-table/interfaces/gt-config';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent {

  public configObject:GtConfig;

  @Output() data = new EventEmitter();
  public url = 'https://private-730c61-generictable.apiary-mock.com/data'; // apiary end point
  //public url = '/mock-response.json'; // apiary end point




  // concat :: [a] -> [a] -> [a]
  private concat = x => y => x.concat(y);

  // concatMap :: (a -> [b]) -> [a] -> [b]
  private concatMap = f => xs => xs.map(f).reduce((x,y) => this.concat(x)(y), []);

  // id :: a -> a
  private id = x => x;

  // flatten :: [[a]] -> [a]
  private flatten = this.concatMap(this.id);

  public trigger = function($event){
    console.log($event);
    switch($event.name){
      case 'gt-page-changed':
        this.getData($event.value.page,$event.value.pageLength);
            break;
      case 'gt-sorting-applied':
            console.log($event.value);
            break;
    }
  };


  constructor(private http: Http) {

    //let url = './app/generic-table/data.json'; // json mock file
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', '1');
    params.set('per_page', '25');
    //this.createStore(1499,25);

    this.configObject = {
      settings:[{
        objectKey:'fullName',
        visible:true,
        columnOrder:1
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
    this.getData(1,25);
    /*http.get(this.url, {
      search:params
    })
      .map((res: Response) => res.json())
      .subscribe(res => {
        this.configObject.data = res.data;
        let paging = res.paging;
        //this.configObject.data = this.createStore(paging.filtered_records,paging.per_page);
        //this.configObject.data[paging.current_page-1] = res.data;
        this.configObject.paging = paging;
        console.log('paging',res.paging,this.configObject.data);
      });*/
  }
  public addData = function(){
    this.configObject.data.push({"fullName":"Robert Hjalmers","favoriteColor":"#00BBD5","birthday":"871179502"});
    console.log(this.configObject.data.length);
  };
  public getData = function(page, pageLength){
    console.log(page,pageLength);
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);
    params.set('per_page', pageLength);
    this.http.get(this.url, {
      search:params
    })
      .map((res: Response) => res.json())
      .subscribe(res => {
        //this.configObject.data = res.data;
        let paging = res.paging;
        this.configObject.data = res.data;
        //this.configObject.data[paging.current_page-1] = res.data;
        //let data = [this.configObject.data,res.data];
        //this.configObject.data = this.flatten(data);
        this.configObject.paging = res.paging;
        console.log(res['paging']);
      });
  };



}
