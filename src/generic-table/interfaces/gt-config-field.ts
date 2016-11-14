export interface GtConfigField {
    name:string // name or label of the field, will be displayed as heading for column,
    objectKey:string, // key for mapping column with settings and totals,
    classNames?:string, // custom class names appended to the column,
    render?: any,//function(row,column){ return '<span>'+row[column]+'</span>';} // custom function for column presentation (OPTIONAL),
    compile?: boolean, // should field be compiled, true or false, false by default (OPTIONAL),
    value?: any,//function(row,column){ return row[column]/2;} // custom function for column value if no data exists for column in data array (OPTIONAL),
    click?: any, //function(){ return console.log('column clicked);} // click function for column (OPTIONAL),
    expand?: boolean,//"<my-directive></my-directive>" // expand (open/close) row when clicked and add this as content (could be a directive or plain html) (OPTIONAL),
    export?: any,//function(row,column){ return parseFloat(row[column]);} // custom function for export presentation (OPTIONAL),
    sort?: any,
    search?: any // custom function for searching field, if field shouldn't be searchable change function to false, true (search using data value) by default (OPTIONAL)
}
