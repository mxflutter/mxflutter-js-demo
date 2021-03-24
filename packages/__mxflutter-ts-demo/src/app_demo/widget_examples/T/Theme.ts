/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  Card,
  EdgeInsets,
  ListTile,
  DefaultTabController,
  Tab,
  TabBar,
  TabBarView,
  Column,
  Icon,
  Icons,
  ButtonBar,
  FlatButton,
  FloatingActionButton,
  Theme,
  ThemeData,
  BottomNavigationBar,
  BottomNavigationBarItem,
  Colors,
  MainAxisSize,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTheme();
  }
}

class PageExampleTheme extends MXJSWidgetState {
  private _index: number;
  private _themeList: any;
  private _themeData: any;
  private _themeNameList: Array<string>;
  constructor() {
    super();
    this._index = 0;
    this._themeList = [
      ThemeData.light(),
      ThemeData.dark(),
      new ThemeData({ primarySwatch: Colors.green }),
      new ThemeData({ primarySwatch: Colors.pink }),
      new ThemeData({ primarySwatch: Colors.orange }),
      new ThemeData({ primarySwatch: Colors.deepPurple }),
      new ThemeData({ primarySwatch: Colors.cyan }),
    ];
    this._themeNameList = ['蓝色', '夜晚', '绿色', '粉色', '橙色', '紫色', '天蓝'];
    this._themeData = this._themeList[4];
  }

  _cardView() {
    return new ListView({
      padding: EdgeInsets.all(12.0),
      children: [
        new Card({
          child: new Column({
            mainAxisSize: MainAxisSize.min,
            children: [
              new ListTile({
                leading: new Icon(Icons.album),
                title: new Text('标题'),
                subtitle: new Text('描述描述描述描述'),
              }),
              new ButtonBar({
                children: [
                  new FlatButton({ child: new Text('分享') }),
                  new FlatButton({
                    child: new Text('关闭'),
                    onPressed: function () {},
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }

  _themeChangeTile(index) {
    return new ListTile({
      onTap: function () {
        this.setState(
          function () {
            this._themeData = this._themeList[index];
          }.bind(this),
        );
      }.bind(this),
      title: new Text(this._themeNameList[index]),
      leading: this._themeData == this._themeList[index] ? new Icon(Icons.check_box) : null,
    });
  }

  _themeChange() {
    let tiles = [];
    for (var i = 0; i < 7; i++) tiles.push(this._themeChangeTile(i));
    return new ListView({
      children: tiles,
    });
  }

  build(context) {
    let widget = new Theme({
      data: this._themeData,
      child: new DefaultTabController({
        length: 2,
        child: new Scaffold({
          appBar: new AppBar({
            title: new Text('Theme'),
            bottom: new TabBar({
              tabs: [new Tab({ text: '示例' }), new Tab({ text: '主题' })],
            }),
          }),
          body: new TabBarView({
            children: [this._cardView(), this._themeChange()],
          }),
          floatingActionButton: new FloatingActionButton({
            child: new Icon(Icons.add),
          }),
          bottomNavigationBar: new BottomNavigationBar({
            currentIndex: this._index,
            onTap: function (value) {
              this.setState(
                function () {
                  this._index = value;
                }.bind(this),
              );
            }.bind(this),
            items: [
              new BottomNavigationBarItem({
                title: new Text('首页'),
                icon: new Icon(Icons.home),
              }),
              new BottomNavigationBarItem({
                title: new Text('书籍'),
                icon: new Icon(Icons.book),
              }),
              new BottomNavigationBarItem({
                title: new Text('我的'),
                icon: new Icon(Icons.perm_identity),
              }),
            ],
          }),
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
