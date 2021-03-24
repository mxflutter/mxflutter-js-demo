/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Row,
  MainAxisAlignment,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';
import { CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';
import { DragStartBehavior } from '@mxflutter/mxflutter-widgets/gestures';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoSwitch();
  }
}

class PageExampleCupertinoSwitch extends MXJSWidgetState {
  private choose: Array<boolean>;
  constructor() {
    super();
    this.choose = [false, false, false];
  }

  _onChanged(index) {
    return function (value) {
      this.setState(
        function () {
          this.choose[index] = value;
        }.bind(this),
      );
    }.bind(this);
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('CupertinoSwitch') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('CupertionSwitch基本使用') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new CupertinoSwitch({
                activeColor: Colors.green,
                value: this.choose[0],
                onChanged: this._onChanged(0),
              }),
              new CupertinoSwitch({
                activeColor: Colors.blue,
                value: this.choose[0],
                onChanged: this._onChanged(0),
              }),
              new CupertinoSwitch({
                activeColor: Colors.red,
                value: this.choose[0],
                onChanged: this._onChanged(0),
              }),
              new CupertinoSwitch({
                activeColor: Colors.yellow,
                value: this.choose[0],
                onChanged: this._onChanged(0),
              }),
            ],
          }),
          new ListTile({ title: new Text('CupertionSwitch自定义未选中颜色') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new CupertinoSwitch({
                activeColor: Colors.green,
                trackColor: Colors.green /*[100]*/,
                value: this.choose[1],
                onChanged: this._onChanged(1),
              }),
              new CupertinoSwitch({
                activeColor: Colors.blue,
                trackColor: Colors.blue /*[100]*/,
                value: this.choose[1],
                onChanged: this._onChanged(1),
              }),
              new CupertinoSwitch({
                activeColor: Colors.red,
                trackColor: Colors.red /*[100]*/,
                value: this.choose[1],
                onChanged: this._onChanged(1),
              }),
              new CupertinoSwitch({
                activeColor: Colors.yellow,
                trackColor: Colors.yellow /*[100]*/,
                value: this.choose[1],
                onChanged: this._onChanged(1),
              }),
            ],
          }),
          new ListTile({ title: new Text('CupertionSwitch拖动方式') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new CupertinoSwitch({
                value: this.choose[2],
                onChanged: this._onChanged(2),
              }),
              new CupertinoSwitch({
                value: this.choose[2],
                onChanged: this._onChanged(2),
                dragStartBehavior: DragStartBehavior.start,
              }),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
