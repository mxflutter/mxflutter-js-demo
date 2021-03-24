/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  AppBar,
  Text,
  Colors,
  Row,
  IntrinsicHeight,
  ListView,
  ListTile,
  MainAxisAlignment,
  TabBar,
  Tab,
  TabBarView,
  DefaultTabController,
  IntrinsicWidth,
  Column,
  Center,
} from '@mxflutter/mxflutter-widgets/material';

// 相比IntrinsicHeight多了两参数stepHeight、stepWidth
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleIntrinsicWidth();
  }
}

class PageExampleIntrinsicWidth extends MXJSWidgetState {
  constructor() {
    super();
  }

  _withWidthHeight(_stepHeight, _stepWidth) {
    return new Column({
      children: [
        new Center({ child: new Text('stepWidth:' + _stepWidth + '\nstepHeight:' + _stepHeight) }),
        new IntrinsicWidth({
          stepHeight: _stepHeight,
          stepWidth: _stepWidth,
          child: new Column({
            children: [
              new Container({ color: Colors.blue, height: 100 }),
              new Container({ color: Colors.red, height: 100, width: 150 }),
              new Container({ color: Colors.yellow, height: 250 }),
            ],
          }),
        }),
      ],
    });
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 2,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Container'),
          bottom: new TabBar({
            isScrollable: true,
            tabs: [new Tab({ text: 'NotNull' }), new Tab({ text: 'Null' })],
          }),
        }),
        body: new TabBarView({
          children: [this._withWidthHeight(450, 300), this._withWidthHeight(null, null)],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
