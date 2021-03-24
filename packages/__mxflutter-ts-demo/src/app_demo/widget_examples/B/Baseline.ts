/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Column,
  Row,
  Baseline,
  TextBaseline,
  TextStyle,
  Center,
  Container,
  Colors,
  MainAxisAlignment,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleBaseLine();
  }
}

class PageExampleBaseLine extends MXJSWidgetState {
  constructor() {
    super();
  }

  _text(text, size) {
    return new Center({
      child: new Text(text, {
        style: new TextStyle({ fontSize: size }),
      }),
    });
  }

  _baselineWithText(text, size) {
    return new Baseline({
      baseline: 50.0,
      baselineType: TextBaseline.alphabetic,
      child: this._text(text, size),
    });
  }

  _divider() {
    return new Container({ height: 1.0, color: Colors.grey });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Baseline') }),
      body: new Column({
        children: [
          this._baselineWithText('AaBbCcDdEeFfGgHhIiJjKkLlMmNn', 20.0),
          this._divider(),
          this._baselineWithText('OoPpQqRrSsTtUuVvWwXxYyZz', 24.0),
          this._divider(),
          this._baselineWithText('1234567890!@#$%^&*()', 28.0),
          this._divider(),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              this._baselineWithText('15,0', 15.0),
              this._baselineWithText('20,0', 20.0),
              this._baselineWithText('25,0', 25.0),
              this._baselineWithText('30,0', 30.0),
              this._baselineWithText('35,0', 35.0),
            ],
          }),
          this._divider(),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
