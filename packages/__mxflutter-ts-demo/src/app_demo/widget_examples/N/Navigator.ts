/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  Center,
  Container,
  Navigator,
  MaterialPageRoute,
  BoxDecoration,
  BorderRadius,
  Radius,
  FlatButton,
  Expanded,
  Icon,
  Icons,
  TextField,
  InputDecoration,
} from '@mxflutter/mxflutter-widgets/material';

// 路由管理控件: 通常使用于局部页面跳转的情况
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleNavigator();
  }
}

class PageExampleNavigator extends MXJSWidgetState {
  constructor() {
    super();
  }

  _buildSearchBar(context) {
    return new Container({
      child: new Row({
        children: [
          new Expanded({
            child: new FlatButton({
              onPressed: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new SearchPage();
                    },
                  }),
                );
              },
              child: new Text('搜索框'),
            }),
          }),
        ],
      }),
      decoration: new BoxDecoration({
        borderRadius: BorderRadius.all(Radius.circular(4.0)),
        color: Colors.blue,
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: this._buildSearchBar(context) }),
      body: new Center({
        child: new Text('点击上方搜索框\n调用Navigator.push()'),
      }),
    });
    return widget;
  }
}

class SearchPage extends MXJSStatefulWidget {
  constructor() {
    super('SearchPage');
  }
  createState() {
    return new SearchPageState();
  }
}

class SearchPageState extends MXJSWidgetState {
  _buildSearch(context) {
    return new Container({
      child: new Row({
        children: [
          new Expanded({
            child: new TextField({
              autofocus: true,
              decoration: new InputDecoration({
                hintText: '输入框',
                prefixIcon: new Icon(Icons.person),
              }),
            }),
          }),
        ],
      }),
    });
  }

  build(context) {
    return new Scaffold({
      appBar: new AppBar({ title: this._buildSearch(context) }),
      body: new Center({
        child: new Text('SearchDetails'),
      }),
    });
  }
}

export { ExampleWidget };
