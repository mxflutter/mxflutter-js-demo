/* eslint-disable */
import { MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Container,
  Alignment,
  ListTile,
  GestureDetector,
  ListView,
  Hero,
  Image,
  Navigator,
  MaterialPageRoute,
  BoxFit,
} from '@mxflutter/mxflutter-widgets/material';

// 动画页面切换组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleHero();
  }
}

class PageExampleHero extends MXJSWidgetState {
  constructor() {
    super();
  }
  build(context) {
    var hero = new Hero({
      tag: 'hero',
      child: new Container({
        child: Image.asset('people/ali_landscape.png', {
          __mx_package: 'flutter_gallery_assets',
          fit: BoxFit.cover,
          height: 250,
        }),
      }),
    });
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Hero'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('点击下方图片试试～') }),
          new GestureDetector({
            onTap: function () {
              Navigator.push(
                context,
                new MaterialPageRoute({
                  builder: function () {
                    return new _HeroDemo();
                  },
                }),
              );
            }.bind(this),
            child: hero,
          }),
        ],
      }),
    });
    return widget;
  }
}

class _HeroDemo extends MXJSStatelessWidget {
  build() {
    return new Scaffold({
      appBar: new AppBar({ title: new Text('Hero New Page') }),
      body: new Container({
        alignment: Alignment.center,
        child: new Hero({
          tag: 'hero',
          child: Image.asset('people/ali_landscape.png', {
            __mx_package: 'flutter_gallery_assets',
            fit: BoxFit.cover,
            height: 250,
          }),
        }),
      }),
    });
  }
}

export { ExampleWidget };
