/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Colors,
  ListView,
  Container,
  ListTile,
  OutlineButton,
  BorderSide,
} from '@mxflutter/mxflutter-widgets/material';

// 带边框的按钮
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleOutlineButton();
  }
}

class PageExampleOutlineButton extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('OutlineButton') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('OutlineButton用法与RaisedButton相同') }),
          new ListTile({ title: new Text('普通的Button') }),
          new Container({
            child: new OutlineButton({
              child: new Text('Button'),
              onPressed: function () {},
            }),
          }),

          new ListTile({ title: new Text('设置边框样式的Button') }),
          new Container({
            width: 40,
            child: new OutlineButton({
              borderSide: new BorderSide({ color: Colors.blue, width: 2 }),
              disabledBorderColor: Colors.black,
              highlightedBorderColor: Colors.red,
              child: new Text('Button'),
              onPressed: function () {},
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
