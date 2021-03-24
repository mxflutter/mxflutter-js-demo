/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  CustomScrollView,
  Container,
  SliverList,
  SliverGrid,
  SliverGridDelegateWithMaxCrossAxisExtent,
  Alignment,
  SliverChildBuilderDelegate,
  Color,
} from '@mxflutter/mxflutter-widgets/material';

// 通用的滑动结构
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleCustomScrollView();
  }
}

class PageExampleCustomScrollView extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('CustomScrollView'),
      }),
      body: new CustomScrollView({
        slivers: [
          new SliverGrid({
            gridDelegate: new SliverGridDelegateWithMaxCrossAxisExtent({
              maxCrossAxisExtent: 120.0,
              childAspectRatio: 2.0,
            }),
            delegate: new SliverChildBuilderDelegate(
              function (context, index) {
                return new Container({
                  color: Color.fromRGBO(index * 8, 63, 255 - index * 8, 1.0),
                  alignment: Alignment.center,
                  child: new Text(index.toString()),
                });
              },
              {
                childCount: 8,
              },
            ),
          }),
          new SliverList({
            delegate: new SliverChildBuilderDelegate(
              function (context, index) {
                index += 9;
                return new Container({
                  height: 80,
                  color: Color.fromRGBO(index * 8, 63, 255 - index * 8, 1.0),
                  alignment: Alignment.center,
                  child: new Text(index.toString()),
                });
              },
              { childCount: 20 },
            ),
          }),
        ],
      }),
    });
    return widget;
  }
}
export { ExampleWidget };
