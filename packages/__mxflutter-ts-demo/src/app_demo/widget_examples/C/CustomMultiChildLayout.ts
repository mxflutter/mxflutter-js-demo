/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, AppBar, Text, Center } from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleCustomMultiChildLayout();
  }
}
class PageExampleCustomMultiChildLayout extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('CustomMultiChildLayout'),
      }),
      body: new Center({
        child: new Text('MXFlutter中delegate未实现！'),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
