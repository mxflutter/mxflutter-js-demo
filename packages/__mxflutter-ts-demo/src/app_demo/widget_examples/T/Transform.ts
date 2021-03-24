/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  EdgeInsets,
  Container,
  Colors,
  Transform,
  Matrix4,
  Center,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTransform();
  }
}

class PageExampleTransform extends MXJSWidgetState {
  constructor() {
    super();
  }

  _dividerContainer(value = 120.0) {
    return new Container({ height: value });
  }

  _defaultContainer(text) {
    return new Container({
      child: new Container({
        height: 120.0,
        margin: EdgeInsets.symmetric({ horizontal: 80.0 }),
        color: Colors.blue,
        child: new Center({ child: new Text(text) }),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Transform') }),
      body: new ListView({
        padding: EdgeInsets.all(12.0),
        children: [
          new Transform({
            transform: Matrix4.rotationX(0.8),
            child: this._defaultContainer('Matrix4.rotationX(0.8)'),
          }),
          this._dividerContainer(40.0),
          new Transform({
            transform: Matrix4.rotationY(0.8),
            child: this._defaultContainer('Matrix4.rotationY(0.8)'),
          }),
          this._dividerContainer(40.0),
          new Transform({
            transform: Matrix4.rotationZ(0.2),
            child: this._defaultContainer('Matrix4.rotationZ(0.2)'),
          }),
          this._dividerContainer(80.0),
          new Transform({
            transform: Matrix4.skew(0.2, 0.1),
            child: this._defaultContainer('Matrix4.skew(0.2, 0.1)'),
          }),
          this._dividerContainer(40.0),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
