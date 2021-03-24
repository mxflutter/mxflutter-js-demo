/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  BottomNavigationBarItem,
  Text,
  Icon,
  Icons,
  Scaffold,
  Colors,
  Center,
} from '@mxflutter/mxflutter-widgets/material';
import {
  CupertinoTabScaffold,
  CupertinoTabBar,
  CupertinoPageScaffold,
  CupertinoNavigationBar,
} from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoTabScaffold();
  }
}

class PageExampleCupertinoTabScaffold extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new CupertinoTabScaffold({
      tabBar: new CupertinoTabBar({
        items: [
          new BottomNavigationBarItem({
            icon: new Icon(Icons.home),
            title: new Text('主页'),
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.favorite),
            title: new Text('关注'),
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.book),
            title: new Text('我的'),
          }),
        ],
      }),
      tabBuilder: function (context, index) {
        return [
          new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({ middle: new Text('主页') }),
            child: new Scaffold({
              backgroundColor: Colors.blue /*[200]*/,
              body: new Center({ child: new Text('主页') }),
            }),
          }),
          new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({ middle: new Text('关注') }),
            child: new Scaffold({
              backgroundColor: Colors.red /*[200]*/,
              body: new Center({ child: new Text('关注') }),
            }),
          }),
          new CupertinoPageScaffold({
            navigationBar: new CupertinoNavigationBar({ middle: new Text('我的') }),
            child: new Scaffold({
              backgroundColor: Colors.green /*[200]*/,
              body: new Center({ child: new Text('我的') }),
            }),
          }),
        ];
      }.bind(this),
    });
    return widget;
  }
}

export { ExampleWidget };
