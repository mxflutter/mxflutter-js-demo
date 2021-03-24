/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Color,
  EdgeInsets,
  BoxDecoration,
  BorderRadius,
  Radius,
  Scrollbar,
  BoxShadow,
  Offset,
  Scaffold,
  AppBar,
  Text,
  ListBody,
  Container,
  Center,
  SingleChildScrollView,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleSingleChildScrollView();
  }
}

class PageExampleSingleChildScrollView extends MXJSWidgetState {
  private _tileSize: number;
  private _tileSize1of3: number;
  private _tileSize2of3: number;
  private _colorMin: number;
  private _colorRange: number;
  constructor() {
    super();
    this._tileSize = 24;
    this._tileSize1of3 = this._tileSize / 3;
    this._tileSize2of3 = (this._tileSize * 2) / 3;
    this._colorMin = 100;
    this._colorRange = 255 - this._colorMin;
  }

  _getColor(value) {
    var r = Math.min(Math.min(value, this._tileSize - value) / this._tileSize1of3, 1.0);
    r = Math.floor((1.0 - r) * this._colorRange) + this._colorMin;
    var g = Math.min(Math.abs((value - this._tileSize1of3) / this._tileSize1of3), 1.0);
    g = Math.floor((1.0 - g) * this._colorRange) + this._colorMin;
    var b = Math.min(Math.abs((value - this._tileSize2of3) / this._tileSize1of3), 1.0);
    b = Math.floor((1.0 - b) * this._colorRange) + this._colorMin;
    var result = (0xff << 24) | (r << 16) | (g << 8) | (b << 0);
    return new Color(result);
  }

  _containerList() {
    let list = [];
    list.push(
      new Center({
        child: new Container({
          margin: EdgeInsets.all(40.0),
          child: new Text('使用Scrollbar包裹滚动组件即可展示滚动条'),
        }),
      }),
    );
    for (let i = 0; i < this._tileSize; i++) {
      let c = new Container({
        margin: EdgeInsets.all(8.0),
        height: 64.0,
        width: 64.0,
        child: new Center({
          child: new Text((i + 1).toString()),
        }),
        decoration: new BoxDecoration({
          color: this._getColor(i),
          borderRadius: BorderRadius.all(Radius.circular(8.0)),
          boxShadow: [
            new BoxShadow({
              color: new Color(0x80000000),
              offset: new Offset(5.0, 5.0),
              blurRadius: 6.0,
            }),
          ],
        }),
      });
      list.push(c);
    }
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Scrollbar'),
      }),
      body: new Scrollbar({
        isAlwaysShown: true,
        child: new SingleChildScrollView({
          child: new ListBody({
            children: this._containerList(),
          }),
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
