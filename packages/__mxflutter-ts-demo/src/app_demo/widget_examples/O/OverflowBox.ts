/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Colors,
  Container,
  ListTile,
  Column,
  Alignment,
  EdgeInsets,
  OverflowBox,
} from '@mxflutter/mxflutter-widgets/material';

// 溢出父容器显示
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleOverflowBox();
  }
}

class PageExampleOverflowBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('OverflowBox') }),
      body: new Column({
        children: [
          new ListTile({ title: new Text('maxHeight:500') }),
          new ListTile({ title: new Text('Height:400') }),
          new Container({
            color: Colors.green,
            width: 200,
            height: 200,
            padding: EdgeInsets.all(5.0),
            child: new OverflowBox({
              alignment: Alignment.topLeft,
              maxHeight: 500,
              maxWidth: 300,
              child: new Container({
                color: Colors.pink,
                width: 400,
                height: 400,
              }),
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
