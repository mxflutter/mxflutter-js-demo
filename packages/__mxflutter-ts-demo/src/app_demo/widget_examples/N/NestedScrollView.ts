/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Text,
  ListView,
  Center,
  Container,
  SliverAppBar,
  NestedScrollView,
  FlexibleSpaceBar,
  Image,
  BoxFit,
} from '@mxflutter/mxflutter-widgets/material';

// 内部嵌套其他滚动视图的滚动视图
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampeNestedScrollView();
  }
}

class PageExampeNestedScrollView extends MXJSWidgetState {
  constructor() {
    super();
  }

  _listContainerBuilder(context, index) {
    return new Container({
      height: 60,
      child: new Center({
        child: new Text(index.toString()),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      body: new NestedScrollView({
        headerSliverBuilder: function (context) {
          return [
            new SliverAppBar({
              expandedHeight: 230,
              pinned: true,
              flexibleSpace: new FlexibleSpaceBar({
                title: new Text('NestedScrollView'),
                background: Image.asset('products/teaset.png', {
                  __mx_package: 'flutter_gallery_assets',
                  fit: BoxFit.cover,
                }),
              }),
            }),
          ];
        },
        body: ListView.builder({
          itemCount: 20,
          itemBuilder: this._listContainerBuilder,
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
