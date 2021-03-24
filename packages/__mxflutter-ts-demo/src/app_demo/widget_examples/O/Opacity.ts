/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MainAxisAlignment,
  Container,
  ListTile,
  Alignment,
  Opacity,
} from '@mxflutter/mxflutter-widgets/material';

// 透明度0~1
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleOpacity();
  }
}

class PageExampleOpacity extends MXJSWidgetState {
  private _colorTable: any;
  constructor() {
    super();
    this._colorTable = {
      red: Colors.red,
      green: Colors.green,
      blue: Colors.blue,
    };
  }

  _buildContainer(colorName, index) {
    return new Container({
      height: 80,
      width: 80,
      color: this._colorTable[colorName],
      alignment: Alignment.center,
      child: new Text(index),
    });
  }

  _buildOpacityContainer(colorName, index, opacity) {
    return new Opacity({
      opacity: opacity,
      child: this._buildContainer(colorName, index),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Offstage') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('没有使用Opacity') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              this._buildContainer('red', '1'),
              this._buildContainer('green', '2'),
              this._buildContainer('blue', '3'),
            ],
          }),
          new ListTile({ title: new Text('使用Opacity[0.5 0.0 0.8]') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              this._buildOpacityContainer('red', '1', 0.5),
              this._buildOpacityContainer('green', '2', 0.0),
              this._buildOpacityContainer('blue', '3', 0.8),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
