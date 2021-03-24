/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Colors,
  Column,
  Row,
  MainAxisAlignment,
  TextStyle,
  Switch,
} from '@mxflutter/mxflutter-widgets/material';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleSwitchState();
  }
}

class PageExampleSwitchState extends MXJSWidgetState {
  private _selected1: boolean;
  private _selected2: boolean;
  constructor() {
    super();
    this._selected1 = false;
    this._selected2 = false;
  }

  _changeState1() {
    this.setState(
      function () {
        this._selected1 = !this._selected1;
      }.bind(this),
    );
  }

  _changeState2() {
    this.setState(
      function () {
        this._selected2 = !this._selected2;
      }.bind(this),
    );
  }

  _getTextStyle() {
    return new TextStyle({
      color: Colors.blue,
      fontSize: 18,
      height: 1.2,
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAbsorbPointer'),
      }),
      body: new Column({
        children: [
          new SectionTitle('Switch基础用法'),
          new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              new Switch({
                value: this._selected1,
                onChanged: this._changeState1.bind(this),
              }),
              new Switch({
                value: this._selected1,
                onChanged: this._changeState1.bind(this),
              }),
              new Switch({
                value: this._selected1,
                onChanged: this._changeState1.bind(this),
              }),
              new Switch({
                value: this._selected1,
                onChanged: this._changeState1.bind(this),
              }),
              this._selected1 ? new Text('true') : new Text('false'),
            ],
          }),
          new SectionTitle('Switch图片用法'),
          new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              new Text('TODO : ImageProvider'),
              new Switch({
                value: this._selected2,
                onChanged: this._changeState2.bind(this),
                activeColor: Colors.red,
                // inactiveThumbImage: Colors.green,
                // activeThumbImage: Image.network('https://picsum.photos/200'),
              }),
              this._selected2 ? new Text('true') : new Text('false'),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
