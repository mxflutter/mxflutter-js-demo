/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Text,
  CustomScrollView,
  Container,
  SliverList,
  Alignment,
  SliverChildBuilderDelegate,
  Color,
  Image,
  SliverAppBar,
  FlexibleSpaceBar,
  IconButton,
  Icon,
  Icons,
  BoxFit,
} from '@mxflutter/mxflutter-widgets/material';

// 通用的滑动结构
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSliverAppBar();
  }
}

class PageExampleSliverAppBar extends MXJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      body: new CustomScrollView({
        slivers: [
          new SliverAppBar({
            title: new Text('SliverAppBar'),
            expandedHeight: 200.0,
            flexibleSpace: new FlexibleSpaceBar({
              background: Image.asset('products/teaset.png', {
                __mx_package: 'flutter_gallery_assets',
                fit: BoxFit.cover,
              }),
            }),
            floating: false,
            pinned: true,
            snap: false,
            actions: [
              new IconButton({
                icon: new Icon(Icons.add_circle),
                onPressed: function () {},
              }),
            ],
          }),
          new SliverList({
            delegate: new SliverChildBuilderDelegate(
              function (context, index) {
                return new Container({
                  height: 80,
                  color: Color.fromRGBO(index * 16, index * 16, 255 - index * 16, 1.0),
                  alignment: Alignment.center,
                  child: new Text(index.toString()),
                });
              },
              { childCount: 15 },
            ),
          }),
        ],
      }),
    });
    return widget;
  }
}
export { ExampleWidget };
