/* eslint-disable */
import mxflutter, { StatefulWidget, StatelessWidget,State } from '@mxflutter/mxflutter';
import {
  MaterialApp,
  Container,
  Column,
  Expanded,
  Colors,
  Text,
  ListView,
  FontWeight,
  FlatButton,
  EdgeInsets,
  InputDecoration,
  TextField,
  TextEditingController,
  TextAlign,
  TextStyle,
  Row,
  Padding,
  Theme,
  Key,
  Scaffold,
  AppBar
} from '@mxflutter/mxflutter-widgets/material';

import { TodoItem } from './item';


class TodoListPage extends StatefulWidget {
  public data: any;
  public constructor() {
    super('TodoListPage');

    this.data = 'test';
  }

  public createState() {
    return new TodoListPageState();
  }
}

class TodoListPageState extends State {
  public textCtr: any;
  public addTextValue: any;
  public newIdx: any;
  public dataList: any;
  public index: any;

  public constructor() {
    super();
    this.textCtr = new TextEditingController({
      text: '',
    });
    this.addTextValue = '';
    this.newIdx = 0;
    this.dataList = [];
  }

  public build(context) {
    const wList = this.buildList(context);

    return new Scaffold({
      appBar: new AppBar({
        title: new Text("ToDoApp TS Demo"),
      }),
      body: new Container({
        padding: EdgeInsets.all(10.0),
        child: new Column({
          children: [
            new Padding({
              padding: EdgeInsets.only({ top: 5 }),
            }),
            new Row({
              children: [
                new Padding({
                  padding: EdgeInsets.only({ left: 20 }),
                }),
                new Expanded({
                  child: new TextField({
                    controller: this.textCtr,
                    decoration: new InputDecoration({
                      hintText: '请填写 TODO 事项',
                    }),
                    onChanged: (value) => {
                      this.addTextValue = value;
                    },
                  }),
                }),
                new Padding({
                  padding: EdgeInsets.only({ left: 20 }),
                }),
                new FlatButton({
                  color: Theme.of(context).primaryColor,
                  textColor: Colors.white,
                  child: new Text('添加'),
                  onPressed: () => {
                    this.setState(() => {
                      this.addNewItem(this.addTextValue);
                    });

                    console.log('add:' + this.addTextValue);
                  },
                }),
              ],
            }),
            new Expanded({
              child: new ListView({
                children: wList,
              }),
            }),
          ],
        }),
      }),
    });
  }

  public buildList(context) {
    let wList: any = [];
    let wDoingList = this.buildDataList(true);
    let wDoneList = this.buildDataList(false);

    wList.push(new Padding({ padding: EdgeInsets.only({ top: 20 }) }));
    wList.push(
      new Row({
        children: [
          new Padding({
            padding: EdgeInsets.only({ left: 20 }),
          }),
          new Text('正在进行', {
            textAlign: TextAlign.left,
            style: new TextStyle({
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Theme.of(context).primaryColorDark,
            }),
          }),
          new Expanded({
            child: new Text(wDoingList.length.toString(), {
              textAlign: TextAlign.right,
              style: new TextStyle({
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Colors.red,
              }),
            }),
          }),
          new Padding({
            padding: EdgeInsets.only({ right: 20 }),
          }),
        ],
      }),
    );
    wList = wList.concat(wDoingList);

    wList.push(new Padding({ padding: EdgeInsets.only({ top: 20 }) }));
    wList.push(
      new Row({
        children: [
          new Padding({
            padding: EdgeInsets.only({ left: 20 }),
          }),
          new Text('已完成', {
            textAlign: TextAlign.left,
            style: new TextStyle({
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Theme.of(context).primaryColorDark,
            }),
          }),
          new Expanded({
            child: new Text(wDoneList.length.toString(), {
              textAlign: TextAlign.right,
              style: new TextStyle({
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Colors.grey,
              }),
            }),
          }),
          new Padding({
            padding: EdgeInsets.only({ right: 20 }),
          }),
        ],
      }),
    );
    wList = wList.concat(wDoneList);

    return wList;
  }

  public buildDataList(isDoing) {
    const dataList = isDoing
      ? this.dataList.filter((v) => {
          return !v.isDone;
        })
      : this.dataList.filter((v) => {
          return v.isDone;
        });

    return dataList.map((item, index) => {
      return new TodoItem({
        item: item,
        callback: (val) => {
          console.log('cb1', this.dataList, item, val);
          this.setState(() => {
            item.isDone = val;
          });
        },
        deleteCallback: (wItem) => {
          console.log('cb2', this.dataList, item, wItem);
          this.setState(() => {
            this.dataList.splice(
              this.dataList.findIndex((item) => item.index === wItem.index),
              1,
            );
          });
        },
        editCallback: (newName) => {
          console.log('cb3', this.dataList, item, newName);
          this.setState(() => {
            item.name = newName;
          });
        },
      });
    });
  }

  public addNewItem(value) {
    this.newIdx += 1;
    this.dataList.push({
      index: this.index,
      name: value,
      isDone: false,
    });
  }
}

mxflutter.regist({
  name: 'example2',
  RootWidget: TodoListPage,
});
