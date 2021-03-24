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
} from '@mxflutter/mxflutter-widgets/material';

// 根据内部子控件高度调整高度
// 性能损耗较大 不推荐使用
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleIntrinsicHeight();
  }
}

class PageExampleIntrinsicHeight extends MXJSWidgetState {
  constructor() {
    super();
  }

  _withoutIntrinsicHeight() {
    return new Row({
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        new Container({ color: Colors.blue, width: 100 }),
        new Container({ color: Colors.red, width: 50, height: 100 }),
        new Container({ color: Colors.green, width: 100 }),
      ],
    });
  }

  _withIntrinsicHeight() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('只有中间的Container设置了Height属性~') }),
        new IntrinsicHeight({
          child: new Row({
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              new Container({ color: Colors.blue, width: 100 }),
              new Container({ color: Colors.red, width: 50, height: 100 }),
              new Container({ color: Colors.green, width: 100 }),
            ],
          }),
        }),
      ],
    });
  }

  build() {
    let widget = new DefaultTabController({
      length: 2,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('IntrinsicHeight'),
          bottom: new TabBar({
            isScrollable: true,
            tabs: [new Tab({ text: '未使用IntrinsicHeight' }), new Tab({ text: '使用IntrinsicHeight' })],
          }),
        }),
        body: new TabBarView({
          children: [this._withoutIntrinsicHeight(), this._withIntrinsicHeight()],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
