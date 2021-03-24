/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  LimitedBox,
  Container,
  Colors,
  Center,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleFloatingActionButton();
  }
}

class PageExampleFloatingActionButton extends MXJSWidgetState {
  constructor() {
    super();
  }

  _colorfulContainers() {
    let colors = [
      Colors.blue /*[300]*/,
      Colors.pink /*[300]*/,
      Colors.orange /*[300]*/,
      Colors.green /*[300]*/,
      Colors.purple /*[300]*/,
      Colors.grey /*[300]*/,
    ];
    let list = [];
    for (var i = 0; i < 11; i++) {
      var maxHeight = 100 + i * 10;
      list.push(
        new LimitedBox({
          maxHeight: maxHeight,
          child: new Container({
            color: colors[i % 6],
            child: new Center({
              child: new Text('maxHeight: ' + maxHeight.toString()),
            }),
          }),
        }),
      );
    }
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FloatingActionButton'),
      }),
      body: new ListView({
        children: this._colorfulContainers(),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
