/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Text, Center, AppBar } from '@mxflutter/mxflutter-widgets/material';

// 以冒泡的方式监听Notification的组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleNotificationListener();
  }
}

class PageExampleNotificationListener extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('NotificationListener') }),
      body: new Center({ child: new Text('NotificationListener暂未实现') }),
    });
    return widget;
  }
}

export { ExampleWidget };
