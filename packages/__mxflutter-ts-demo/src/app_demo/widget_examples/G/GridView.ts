/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, AppBar, Text, Center } from '@mxflutter/mxflutter-widgets/material';

// 可滚动的2D数组组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleGridView();
  }
}

class PageExampleGridView extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('GridView'),
      }),
      body: new Center({
        child: new Text('写到半路发现MXFlutter中暂未实现该组件～'),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
