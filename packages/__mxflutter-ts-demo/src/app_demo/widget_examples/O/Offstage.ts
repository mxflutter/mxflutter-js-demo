/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  MainAxisAlignment,
  Center,
  RaisedButton,
  Column,
  Offstage,
} from '@mxflutter/mxflutter-widgets/material';

// 控制是否显示组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleOffstage();
  }
}

class PageExampleOffstage extends MXJSWidgetState {
  private _isOff: boolean;
  constructor() {
    super();
    this._isOff = true;
  }

  _changeState() {
    this.setState(
      function () {
        this._isOff = !this._isOff;
      }.bind(this),
    );
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Offstage') }),
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            new Offstage({
              offstage: this._isOff,
              child: new Text('Offset组件'),
            }),
            new RaisedButton({
              child: this._isOff ? new Text('隐藏') : new Text('显示'),
              onPressed: this._changeState.bind(this),
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
