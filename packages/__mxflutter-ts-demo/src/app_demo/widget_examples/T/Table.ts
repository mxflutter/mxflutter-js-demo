/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Table,
  TableRow,
  TableCell,
  TableBorder,
  BorderSide,
  Colors,
  BoxDecoration,
  ListView,
  EdgeInsets,
  Center,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTable();
  }
}

class PageExampleTable extends MXJSWidgetState {
  constructor() {
    super();
  }

  _randomName() {
    let name = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let length = Math.floor(Math.random() * 5) + 2;
    for (var i = 0; i < length; i++) name += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return name;
  }

  _randomPerson(index) {
    let numYear = (Math.floor(Math.random() * 10) + 2010).toString();
    let numRand = ('0000' + Math.floor(Math.random() * 1000)).slice(-4);
    let num = numYear + numRand;
    let name = this._randomName();
    let age = Math.floor(Math.random() * 30) + 21;
    let sex = Math.floor(Math.random() * 2) == 0 ? '男' : '女';
    let tableRow = new TableRow({
      decoration: new BoxDecoration({
        color: index % 2 == 0 ? Colors.white : Colors.grey /*[200]*/,
      }),
      children: [
        new TableCell({
          child: new Center({ child: new Text(num.toString()) }),
        }),
        new TableCell({
          child: new Center({ child: new Text(name.toString()) }),
        }),
        new TableCell({
          child: new Center({ child: new Text(sex.toString()) }),
        }),
        new TableCell({
          child: new Center({ child: new Text(age.toString()) }),
        }),
      ],
    });
    return tableRow;
  }

  _createTable() {
    let list = [];
    let tableTitle = new TableRow({
      decoration: new BoxDecoration({
        color: Colors.blue /*[600]*/,
      }),
      children: [
        new TableCell({ child: new Center({ child: new Text('工号') }) }),
        new TableCell({ child: new Center({ child: new Text('姓名') }) }),
        new TableCell({ child: new Center({ child: new Text('性别') }) }),
        new TableCell({ child: new Center({ child: new Text('年龄') }) }),
      ],
    });
    list.push(tableTitle);
    for (let i = 0; i < 70; i++) {
      list.push(this._randomPerson(i));
    }
    console.log(list);
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Table') }),
      body: new ListView({
        padding: EdgeInsets.all(12.0),
        children: [
          new Table({
            border: new TableBorder({
              top: new BorderSide({ width: 2.0, color: Colors.black }),
              bottom: new BorderSide({ width: 2.0, color: Colors.black }),
              left: new BorderSide({ width: 2.0, color: Colors.black }),
              right: new BorderSide({ width: 2.0, color: Colors.black }),
              horizontalInside: new BorderSide({
                width: 1.0,
                color: Colors.black54,
              }),
              verticalInside: new BorderSide({
                width: 1.0,
                color: Colors.black54,
              }),
            }),
            children: this._createTable(),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
