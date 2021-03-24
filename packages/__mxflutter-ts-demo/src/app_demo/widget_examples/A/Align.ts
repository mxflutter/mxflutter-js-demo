/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Container,
  EdgeInsets,
  BoxDecoration,
  Border,
  Color,
  Alignment,
  Align,
  Colors,
  ListView,
  ListTile,
  SizedBox,
  Slider,
  Column,
  Expanded,
  Center,
  Row,
  MainAxisAlignment,
  DefaultTabController,
  Scaffold,
  AppBar,
  TabBar,
  Tab,
  TabBarView,
  Text,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAlign();
  }
}

class PageExampleAlign extends MXJSWidgetState {
  private _widthFactor: number;
  private _heightFactor: number;
  private _xOffset: number;
  private _yOffset: number;
  constructor() {
    super();
    this._widthFactor = 12.0;
    this._heightFactor = 12.0;
    this._xOffset = 0.0;
    this._yOffset = 0.0;
  }

  _changeWidthFactor(value) {
    this.setState(
      function () {
        this._widthFactor = value;
      }.bind(this),
    );
  }

  _changeHeightFactor(value) {
    this.setState(
      function () {
        this._heightFactor = value;
      }.bind(this),
    );
  }

  _changeXOffset(value) {
    this.setState(
      function () {
        this._xOffset = value;
      }.bind(this),
    );
  }

  _changeYOffset(value) {
    this.setState(
      function () {
        this._yOffset = value;
      }.bind(this),
    );
  }

  _oneAlignInBoard({ costumAlign = false, alignment = null } = {}) {
    return new Container({
      height: costumAlign ? null : 135.0,
      margin: costumAlign ? null : EdgeInsets.symmetric({ horizontal: 120.0 }),
      decoration: new BoxDecoration({
        border: Border.all({ color: new Color(0xff000000) }),
      }),
      child: new Align({
        alignment: costumAlign ? new Alignment(this._xOffset, this._yOffset) : alignment,
        widthFactor: this._widthFactor,
        heightFactor: this._heightFactor,
        child: new Container({
          width: 12.0,
          height: 12.0,
          color: Colors.blue,
        }),
      }),
    });
  }

  _alignAlignment() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('Alignment: topLeft') }),
        this._oneAlignInBoard({ alignment: Alignment.topLeft }),
        new ListTile({ title: new Text('Alignment: topCenter') }),
        this._oneAlignInBoard({ alignment: Alignment.topCenter }),
        new ListTile({ title: new Text('Alignment: topRight') }),
        this._oneAlignInBoard({ alignment: Alignment.topRight }),
        new ListTile({ title: new Text('Alignment: centerLeft') }),
        this._oneAlignInBoard({ alignment: Alignment.centerLeft }),
        new ListTile({ title: new Text('Alignment: center') }),
        this._oneAlignInBoard({ alignment: Alignment.center }),
        new ListTile({ title: new Text('Alignment: centerRight') }),
        this._oneAlignInBoard({ alignment: Alignment.centerRight }),
        new ListTile({ title: new Text('Alignment: bottomLeft') }),
        this._oneAlignInBoard({ alignment: Alignment.bottomLeft }),
        new ListTile({ title: new Text('Alignment: bottomCenter') }),
        this._oneAlignInBoard({ alignment: Alignment.bottomCenter }),
        new ListTile({ title: new Text('Alignment: bottomRight') }),
        this._oneAlignInBoard({ alignment: Alignment.bottomRight }),
      ],
    });
  }

  _sizedSlider({ width, min, max, value, onChanged }) {
    return new SizedBox({
      width: width,
      child: new Slider({ min: min, max: max, value: value, onChanged: onChanged }),
    });
  }

  _alignFactor() {
    return new Column({
      children: [
        new ListTile({ title: new Text('Align') }),
        new Expanded({
          child: new Center({
            child: this._oneAlignInBoard({ costumAlign: true }),
          }),
        }),
        new Row({
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [new Text('Width Factor'), new Text('Height Factor')],
        }),
        new Row({
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            this._sizedSlider({
              width: 180.0,
              min: 4.0,
              max: 20.0,
              value: this._widthFactor,
              onChanged: this._changeWidthFactor.bind(this),
            }),
            this._sizedSlider({
              width: 180.0,
              min: 4.0,
              max: 20.0,
              value: this._heightFactor,
              onChanged: this._changeHeightFactor.bind(this),
            }),
          ],
        }),
        new Row({
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [new Text('X Offset'), new Text('Y Offset')],
        }),
        new Row({
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            this._sizedSlider({
              width: 180.0,
              min: -1.0,
              max: 1.0,
              value: this._xOffset,
              onChanged: this._changeXOffset.bind(this),
            }),
            this._sizedSlider({
              width: 180.0,
              min: -1.0,
              max: 1.0,
              value: this._yOffset,
              onChanged: this._changeYOffset.bind(this),
            }),
          ],
        }),
      ],
    });
  }

  build(context) {
    return new DefaultTabController({
      length: 2,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('PageExampleAlign'),
          bottom: new TabBar({
            tabs: [new Tab({ text: '9 Alignments' }), new Tab({ text: 'Custom Factor & offset' })],
          }),
        }),
        body: new TabBarView({
          children: [this._alignAlignment(), this._alignFactor()],
        }),
      }),
    });
  }
}

export { ExampleWidget };
