/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Container,
  Stack,
  Positioned,
  Color,
  Alignment,
  BoxShadow,
  BoxDecoration,
  Offset,
  Colors,
  Scaffold,
  AppBar,
  Text,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTabbar();
  }
}

class PageExampleTabbar extends MXJSWidgetState {
  constructor() {
    super();
  }

  _randomColor() {
    do {
      var r = Math.ceil(Math.random() * 128) + 128;
      var g = Math.ceil(Math.random() * 128) + 128;
      var b = Math.ceil(Math.random() * 128) + 128;
    } while (r + g + b > 640);
    return Color.fromRGBO(r, g, b, 1.0);
  }

  _positionedBlock({ left = null, top = null, right = null, bottom = null, height = null, width = null, br = false }) {
    var text = '';
    if (left != null) text += 'left: ' + left + '\n';
    if (top != null) text += 'top: ' + top + '\n';
    if (right != null) text += 'right: ' + right + '\n';
    if (bottom != null) text += 'bottom: ' + bottom + '\n';
    if (height != null) text += 'height: ' + height + '\n';
    if (width != null) text += 'width: ' + width + '\n';
    return new Positioned({
      left: left,
      top: top,
      right: right,
      bottom: bottom,
      child: new Container({
        height: height,
        width: width,
        child: new Text(text),
        alignment: br ? Alignment.bottomRight : null,
        decoration: new BoxDecoration({
          color: this._randomColor(),
          boxShadow: [
            new BoxShadow({
              color: Colors.black54,
              offset: new Offset(5.0, 5.0),
              blurRadius: 5.0,
            }),
          ],
        }),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Stepper'),
      }),
      body: new Stack({
        children: [
          this._positionedBlock({ left: 30, top: 260, right: 30, bottom: 60 }),
          this._positionedBlock({ left: 30, top: 20, height: 150, width: 150 }),
          this._positionedBlock({ left: 90, top: 100, height: 150, width: 150 }),
          this._positionedBlock({ left: 120, top: 300, height: 150, width: 150, br: true }),
          this._positionedBlock({ left: 150, top: 180, height: 150, width: 150 }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
