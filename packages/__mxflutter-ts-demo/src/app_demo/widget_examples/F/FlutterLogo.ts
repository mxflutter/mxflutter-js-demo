/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  MainAxisAlignment,
  FlutterLogo,
  Row,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleFlutterLogo();
  }
}

class PageExampleFlutterLogo extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FlutterLogo'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('FlutterLogo.size') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [new FlutterLogo(), new FlutterLogo({ size: 48 }), new FlutterLogo({ size: 72 })],
          }),
          new ListTile({ title: new Text('FlutterLogo.colors') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new FlutterLogo({ size: 48,  }),
              new FlutterLogo({ size: 48,  }),
              new FlutterLogo({ size: 48,  }),

            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
