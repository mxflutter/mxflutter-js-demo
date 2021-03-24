/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Chip,
  CircleAvatar,
  Card,
  Wrap,
  ListView,
  ListTile,
  EdgeInsets,
  Container,
  Axis,
  WrapAlignment,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleWrap();
  }
}

class PageExampleWrap extends MXJSWidgetState {
  constructor() {
    super();
  }

  _chipList() {
    let colorList = [
      Colors.orange /*[400]*/,
      Colors.blue /*[400]*/,
      Colors.green /*[400]*/,
      Colors.pink /*[400]*/,
      Colors.purple /*[400]*/,
    ];
    let firstAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let chipText = ['Alpha', 'Beta', 'Chip', 'Default', 'Element', 'Format', 'Great', 'Hero', 'Index', 'Javascript'];
    let list = [];
    for (var i = 0; i < 10; i++) {
      let w = new Chip({
        avatar: new CircleAvatar({
          backgroundColor: colorList[i % 5],
          foregroundColor: Colors.white,
          child: new Text(firstAlpha[i]),
        }),
        label: new Text(chipText[i]),
      });
      list.push(w);
    }
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Wrap') }),
      body: new ListView({
        padding: EdgeInsets.all(12.0),
        children: [
          new ListTile({ title: new Text('普通的Wrap') }),
          new Card({
            child: new Wrap({
              children: this._chipList(),
            }),
          }),
          new ListTile({ title: new Text('增加了项边距的Wrap') }),
          new Card({
            child: new Wrap({
              spacing: 4.0,
              children: this._chipList(),
            }),
          }),
          new ListTile({ title: new Text('垂直方向排列的Wrap') }),
          new Container({
            height: 220.0,
            child: new Card({
              child: new Wrap({
                direction: Axis.vertical,
                children: this._chipList(),
              }),
            }),
          }),
          new ListTile({ title: new Text('每行都居中显示的Wrap') }),
          new Card({
            child: new Wrap({
              alignment: WrapAlignment.spaceAround,
              spacing: 4.0,
              children: this._chipList(),
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
