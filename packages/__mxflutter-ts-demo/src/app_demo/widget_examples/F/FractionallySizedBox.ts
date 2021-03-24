/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Expanded,
  Container,
  EdgeInsets,
  Colors,
  Column,
  FractionallySizedBox,
  Alignment,
  ListTile,
  Slider,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleFlutterLogo();
  }
}

class PageExampleFlutterLogo extends MXJSWidgetState {
  private _widthFactor: number;
  private _heightFactor: number;
  constructor() {
    super();
    this._widthFactor = 0.5;
    this._heightFactor = 0.2;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FlutterLogo'),
      }),
      body: new Column({
        children: [
          new Expanded({
            child: new FractionallySizedBox({
              alignment: Alignment.center,
              widthFactor: this._widthFactor,
              heightFactor: this._heightFactor,
              child: new Container({ color: Colors.blue }),
            }),
          }),
          new ListTile({
            title: new Text('水平方向占比: ' + (this._widthFactor * 100).toFixed(1) + '%'),
          }),
          new Slider({
            min: 0.0,
            max: 1.0,
            value: this._widthFactor,
            onChanged: function (value) {
              this.setState(
                function () {
                  this._widthFactor = value;
                }.bind(this),
              );
            }.bind(this),
          }),
          new ListTile({
            title: new Text('垂直方向占比: ' + (this._heightFactor * 100).toFixed(1) + '%'),
          }),
          new Slider({
            min: 0.0,
            max: 1.0,
            value: this._heightFactor,
            onChanged: function (value) {
              this.setState(
                function () {
                  this._heightFactor = value;
                }.bind(this),
              );
            }.bind(this),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
