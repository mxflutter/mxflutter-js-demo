/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  ListTile,
  AppBar,
  Text,
  Colors,
  Column,
  Padding,
  EdgeInsets,
  BottomNavigationBar,
  Icon,
  Icons,
  BottomNavigationBarItem,
  BottomNavigationBarType,
} from '@mxflutter/mxflutter-widgets/material';
import { CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleBottomNavigationBarState();
  }
}

class PageExampleBottomNavigationBarState extends MXJSWidgetState {
  private _position: number;
  private _type: boolean;
  private _colors: any;
  constructor() {
    super();
    this._position = 1;
    this._type = false;
    this._colors = [Colors.red, Colors.green, Colors.blue];
  }

  _changeBottomBar(value) {
    this.setState(
      function () {
        this._position = value;
      }.bind(this),
    );
  }

  _changeType() {
    this.setState(
      function () {
        this._type = !this._type;
      }.bind(this),
    );
  }

  build() {
    let widgets = new Scaffold({
      appBar: new AppBar({
        title: new Text('BottomNavigationBar'),
      }),
      body: new Column({
        children: [
          new SectionTitle('底部导航栏组件'),
          new ListTile({
            title: new Text('更改显示类别'),
            trailing: new CupertinoSwitch({
              value: this._type,
              onChanged: this._changeType.bind(this),
            }),
          }),
          new Padding({
            padding: EdgeInsets.all(10),
          }),
          new BottomNavigationBar({
            backgroundColor: Colors.grey,
            onTap: this._changeBottomBar.bind(this),
            currentIndex: this._position,
            fixedColor: this._type ? Colors.white : Colors.pink,
            iconSize: 25,
            showUnselectedLabels: false,
            showSelectedLabels: true,
            type: this._type ? BottomNavigationBarType.shifting : BottomNavigationBarType.fixed,
            items: [
              new BottomNavigationBarItem({
                icon: new Icon(Icons.home),
                title: new Text('Home'),
                backgroundColor: this._colors[this._position],
              }),
              new BottomNavigationBarItem({
                icon: new Icon(Icons.business),
                title: new Text('Business'),
                backgroundColor: this._colors[this._position],
              }),
              new BottomNavigationBarItem({
                icon: new Icon(Icons.school),
                title: new Text('School'),
                backgroundColor: this._colors[this._position],
              }),
            ],
          }),
          new Padding({
            padding: EdgeInsets.all(10),
          }),
        ],
      }),
    });

    return widgets;
  }
}

export { ExampleWidget };
