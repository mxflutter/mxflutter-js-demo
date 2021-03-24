/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, AppBar, Text, Center } from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoAlertDialog();
  }
}

class PageExampleCupertinoAlertDialog extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('CupertinoAlertDialog') }),
      body: new Center({
        child: new Text('制作本页面时似乎没有showDialog的方法'),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
