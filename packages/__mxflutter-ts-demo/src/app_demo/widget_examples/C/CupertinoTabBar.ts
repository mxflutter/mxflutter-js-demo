/* eslint-disable */
import { MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Colors,
  BottomNavigationBarItem,
  Icon,
  Icons,
  Center,
} from '@mxflutter/mxflutter-widgets/material';
import { CupertinoTabBar } from '@mxflutter/mxflutter-widgets/cupertino';

class HomePage extends MXJSStatelessWidget {
  constructor() {
    super('HomePage');
  }
  build(context) {
    return new Center({
      child: new Text('HomePage'),
    });
  }
}

class IdeaPage extends MXJSStatelessWidget {
  constructor() {
    super('IdeaPage');
  }
  build(context) {
    return new Center({
      child: new Text('IdeaPage'),
    });
  }
}

class MessagePage extends MXJSStatelessWidget {
  constructor() {
    super('MessagePage');
  }
  build(context) {
    return new Center({
      child: new Text('MessagePage'),
    });
  }
}

class MyPage extends MXJSStatelessWidget {
  constructor() {
    super('MyPage');
  }
  build(context) {
    return new Center({
      child: new Text('MyPage'),
    });
  }
}
// IOS风格的TabBar
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleCupertinoTabBar();
  }
}

class PageExampleCupertinoTabBar extends MXJSWidgetState {
  private _position: number;
  private _pageList: any;
  private _currentPage: any;
  constructor() {
    super();
    this._position = 1;
    this._pageList = [];
    this._currentPage = null;
  }

  _changeIndex(value) {
    this.setState(
      function () {
        this._position = value;
      }.bind(this),
    );
  }

  build() {
    this._pageList = [new HomePage(), new IdeaPage(), new MessagePage(), new MyPage()];

    this._currentPage = this._pageList[this._position];

    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('CupertinoTabBar'),
      }),
      body: new Center({
        child: this._currentPage,
      }),
      bottomNavigationBar: new CupertinoTabBar({
        items: [
          new BottomNavigationBarItem({
            icon: new Icon(Icons.assignment),
            title: new Text('首页'),
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.all_inclusive),
            title: new Text('想法'),
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.add_alert),
            title: new Text('通知'),
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.perm_identity),
            title: new Text('我的'),
          }),
        ],
        onTap: this._changeIndex.bind(this),
        currentIndex: this._position,
        backgroundColor: Colors.orange,
        activeColor: Colors.red,
        inactiveColor: Colors.white,
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
