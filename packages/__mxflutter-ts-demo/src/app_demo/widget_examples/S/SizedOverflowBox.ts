/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  AppBar,
  Center,
  Container,
  Colors,
  SizedOverflowBox,
  Size,
  AlignmentDirectional,
  Text,
  Scaffold,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSizedOverflowBox();
  }
}

class PageExampleSizedOverflowBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SizedOverflowBox') }),
      body: new Center({
        child: new Container({
          color: Colors.blue,
          child: new SizedOverflowBox({
            alignment: AlignmentDirectional.bottomStart,
            size: new Size(160.0, 160.0),
            child: new Container({
              color: Colors.green,
              height: 80.0,
              width: 240.0,
            }),
          }),
        }),
      }),
    });
    return widget;
  }
}
export { ExampleWidget };
