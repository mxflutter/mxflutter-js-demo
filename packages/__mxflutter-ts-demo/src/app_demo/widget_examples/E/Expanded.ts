/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Container,
  Alignment,
  Color,
  Column,
  Row,
  Expanded,
  ListTile,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleExpanded();
  }
}

class PageExampleExpanded extends MXJSWidgetState {
  private _flex: number;
  constructor() {
    super();
    this._flex = 0;
  }

  _randomValue() {
    return Math.ceil(Math.random() * 128) + 128;
  }

  _buildFlexContainer(flexNum) {
    return new Expanded({
      flex: flexNum,
      child: new Container({
        alignment: Alignment.center,
        width: 50,
        height: 50,
        color: Color.fromRGBO(this._randomValue(), this._randomValue(), this._randomValue(), 1.0),
        child: new Text('flex=' + flexNum),
      }),
    });
  }

  _buildContent(num1, num2, num3) {
    return new Row({
      children: [this._buildFlexContainer(num1), this._buildFlexContainer(num2), this._buildFlexContainer(num3)],
    });
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Expanded'),
      }),
      body: new Column({
        children: [
          new ListTile({ title: new Text('Expanded.flex[0,0,0]') }),
          this._buildContent(0, 0, 0),
          new ListTile({ title: new Text('Expanded.flex[0,0,1]') }),
          this._buildContent(0, 0, 1),
          new ListTile({ title: new Text('Expanded.flex[1,1,1]') }),
          this._buildContent(1, 1, 1),
          new ListTile({ title: new Text('Expanded.flex[2,3,3]') }),
          this._buildContent(2, 3, 3),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
