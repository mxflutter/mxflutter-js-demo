/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  BoxDecoration,
  SizedBox,
  Scaffold,
  AppBar,
  Text,
  Container,
  Center,
  Border,
  Size,
  ListTile,
  Colors,
  ListView,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSizedBox();
  }
}

class PageExampleSizedBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SizedBox') }),
      body: new ListView({
        children: [
          new SizedBox({ height: 20.0 }),
          new Center({
            child: new SizedBox({
              width: 160.0,
              height: 160.0,
              child: new Container({
                decoration: new BoxDecoration({
                  border: Border.all({
                    color: Colors.black,
                    width: 2.0,
                  }),
                }),
                child: new Container({
                  color: Colors.green,
                  height: 80.0,
                  width: 240.0,
                }),
              }),
            }),
          }),
          new SizedBox({ height: 10.0 }),
          new ListTile({ title: new Text('SizedBox: 160x160, Container: 80x240') }),
        ],
      }),
    });
    return widget;
  }
}
export { ExampleWidget };
