/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { AppBar, Center, Text, Scaffold } from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSizeTransition();
  }
}

class PageExampleSizeTransition extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('SizeTransition') }),
      body: new Center({
        child: new Text(
          'Tween()会默认生成Tween的类型,\n' +
            '而动画中需要Tween的指定类型\n' +
            '例如slideTransition中需要Tween<offset>,\n' +
            'scaleTransition中需要Tween<double>,\n' +
            '将生成的Tween直接传入\n' +
            '将会导致Tween并非Tween子类的错误',
        ),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
