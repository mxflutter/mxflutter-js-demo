/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  RotatedBox,
  Container,
  ListTile,
  Alignment,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleRotatedBox();
  }
}

class PageExampleRotatedBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  _content() {
    let _container = new Container({
      height: 50.0,
      width: 150.0,
      color: Colors.green,
      alignment: Alignment.center,
      child: new Text('Hello, RotatedBox!'),
    });
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        new ListTile({
          title: new Text('quarterTurns: ' + i),
        }),
      );
      list.push(
        new Container({
          height: 250.0,
          color: Colors.blue,
          alignment: Alignment.center,
          child: new RotatedBox({
            quarterTurns: i,
            child: _container,
          }),
        }),
      );
    }
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('RotatedBox'),
      }),
      body: new ListView({
        children: this._content(),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
