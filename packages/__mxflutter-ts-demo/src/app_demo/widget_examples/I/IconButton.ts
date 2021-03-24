/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListTile,
  ListView,
  IconButton,
  Icon,
  Icons,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';

// 按钮组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleIconButton();
  }
}

class PageExampleIconButton extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('IconButton') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('普通图标按钮') }),
          new IconButton({
            icon: new Icon(Icons.person),
            iconSize: 30,
            color: Colors.red,
            onPressed: function () {},
          }),
          new ListTile({ title: new Text('长按显示提示 且有颜色变化') }),
          new IconButton({
            tooltip: '这是一个图标按钮',
            icon: new Icon(Icons.person),
            iconSize: 30,
            color: Colors.green,
            highlightColor: Colors.red,
            splashColor: Colors.orange,
            disabledColor: Colors.grey,
            onPressed: function () {},
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
