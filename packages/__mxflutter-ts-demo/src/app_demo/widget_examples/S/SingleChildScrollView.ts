/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Color,
  EdgeInsets,
  BoxDecoration,
  BorderRadius,
  Radius,
  SizedBox,
  ClampingScrollPhysics,
  Scaffold,
  AppBar,
  Text,
  ListBody,
  Container,
  Center,
  Axis,
  SingleChildScrollView,
  DefaultTabController,
  TabBar,
  Tab,
  TabBarView,
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
    this._tileSize = 60;
    this._tileSize1of3 = this._tileSize / 3;
    this._tileSize2of3 = (this._tileSize * 2) / 3;
    this._colorMin = 85;
    this._colorRange = 255 - this._colorMin;
  }

  _getColor(value) {
    var r = Math.min(Math.min(value, this._tileSize - value) / this._tileSize1of3, 1.0);
    r = Math.floor((1.0 - r) * this._colorRange) + this._colorMin;
    var g = Math.min(Math.abs((value - this._tileSize1of3) / this._tileSize1of3), 1.0);
    g = Math.floor((1.0 - g) * this._colorRange) + this._colorMin;
    var b = Math.min(Math.abs((value - this._tileSize2of3) / this._tileSize1of3), 1.0);
    b = Math.floor((1.0 - b) * this._colorRange) + this._colorMin;
    var result = (0xb0 << 24) | (r << 16) | (g << 8) | (b << 0);
    return new Color(result);
  }

  _containerList(rd = false) {
    let list = [];
    for (let i = 0; i < this._tileSize; i++) {
      let c = new Container({
        height: 64.0,
        width: 64.0,
        child: new Center({
          child: new Text((i + 1).toString()),
        }),
        decoration: new BoxDecoration({
          color: this._getColor(i),
          borderRadius: rd ? BorderRadius.all(Radius.circular(8.0)) : null,
        }),
      });
      list.push(c);
      if (rd == true) {
        list.push(new SizedBox({ height: 8.0 }));
      }
    }
    return list;
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 4,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('SingleChildScrollView'),
          bottom: new TabBar({
            tabs: [
              new Tab({ text: '垂直方向' }),
              new Tab({ text: '物理效果' }),
              new Tab({ text: '项目间隔' }),
              new Tab({ text: '水平方向' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            new SingleChildScrollView({
              child: new ListBody({
                children: this._containerList(),
              }),
            }),
            new SingleChildScrollView({
              physics: new ClampingScrollPhysics(),
              child: new ListBody({
                children: this._containerList(),
              }),
            }),
            new SingleChildScrollView({
              padding: EdgeInsets.all(8.0),
              child: new ListBody({
                children: this._containerList(true),
              }),
            }),
            new SingleChildScrollView({
              scrollDirection: Axis.horizontal,
              child: new ListBody({
                mainAxis: Axis.horizontal,
                children: this._containerList(),
              }),
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
