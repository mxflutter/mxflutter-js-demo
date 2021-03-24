/* eslint-disable */
import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import {
  ListView,
  BottomNavigationBar,
  Icon,
  BottomNavigationBarItem,
  Icons,
  Color,
  FlatButton,
  Center,
  ListTile,
  Container,
  Colors,
  SizedBox,
  FlutterLogo,
  FloatingActionButton,
  FloatingActionButtonLocation,
  Column,
  Text,
  Navigator,
  Scaffold,
  AppBar,
  Drawer,
} from '@mxflutter/mxflutter-widgets/material';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSingleChildScrollView();
  }
}

class PageExampleSingleChildScrollView extends MXJSWidgetState {
  private _showBottomBar: boolean;
  private _showButtonsBar: boolean;
  private _showDrawer: boolean;
  private _showEndDrawer: boolean;
  private _fablocation: any;
  private _bgColor: any;
  private _bottomBarPosition: number;
  constructor() {
    super();
    this._showBottomBar = true;
    this._showButtonsBar = true;
    this._showDrawer = true;
    this._showEndDrawer = true;
    this._fablocation = FloatingActionButtonLocation.endFloat;
    this._bgColor = new Color(0xffffffff);
    this._bottomBarPosition = 0;
  }

  _bottomBar() {
    return new BottomNavigationBar({
      backgroundColor: new Color(0xffffdbb0),
      fixedColor: new Color(0xffff9000),
      currentIndex: this._bottomBarPosition,
      items: [
        new BottomNavigationBarItem({
          icon: new Icon(Icons.home),
          title: new Text('Home'),
        }),
        new BottomNavigationBarItem({
          icon: new Icon(Icons.business),
          title: new Text('Business'),
        }),
        new BottomNavigationBarItem({
          icon: new Icon(Icons.school),
          title: new Text('School'),
        }),
      ],
      onTap: function (value) {
        this.setState(
          function () {
            this._bottomBarPosition = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  _buttonsBar() {
    return [
      new Text('这是persistentFooterButtons'),
      new FlatButton({ onPressed: function () {}, child: new Text('分享') }),
      new FlatButton({ onPressed: function () {}, child: new Text('确定') }),
    ];
  }
  _drawer(context) {
    return new Drawer({
      child: new ListView({
        children: [
          new SizedBox({
            height: 120.0,
            child: new Center({ child: new FlutterLogo({ size: 72 }) }),
          }),
          new Container({ height: 1.0, color: Colors.grey }),
          new ListTile({ title: new Text('这是一个Drawer'), onTap: function () {} }),
          new Container({ height: 1.0, color: Colors.grey }),
          new ListTile({
            title: new Text('关闭Drawer'),
            onTap: function () {
              Navigator.pop(context);
            },
          }),
          new Container({ height: 1.0, color: Colors.grey }),
          new ListTile({
            title: new Text('离开本WidgetExample'),
            onTap: function () {
              Navigator.pop(context);
              Navigator.pop(context);
            },
          }),
          new Container({ height: 1.0, color: Colors.grey }),
        ],
      }),
    });
  }
  _endDrawer(context) {
    return new Drawer({
      child: new ListView({
        children: [
          new SizedBox({
            height: 120.0,
            child: new Center({ child: new FlutterLogo({ size: 72 }) }),
          }),
          new Container({ height: 1.0, color: Colors.grey }),
          new ListTile({ title: new Text('这是一个EndDrawer'), onTap: function () {} }),
          new Container({ height: 1.0, color: Colors.grey }),
          new ListTile({
            title: new Text('关闭Drawer'),
            onTap: function () {
              Navigator.pop(context);
            },
          }),
          new Container({ height: 1.0, color: Colors.grey }),
        ],
      }),
    });
  }

  _changeFabLocation() {
    return new Column({
      children: [
        new SectionTitle('FloatingActionButton位置'),
        new ListTile({
          title: new Text('悬浮 末端'),
          onTap: function () {
            this.setState(
              function () {
                this._fablocation = FloatingActionButtonLocation.endFloat;
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('悬浮 中部'),
          onTap: function () {
            this.setState(
              function () {
                this._fablocation = FloatingActionButtonLocation.centerFloat;
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('顶部 开始'),
          onTap: function () {
            this.setState(
              function () {
                this._fablocation = FloatingActionButtonLocation.startTop;
              }.bind(this),
            );
          }.bind(this),
        }),
      ],
    });
  }

  _changeBgColor() {
    return new Column({
      children: [
        new SectionTitle('Scaffold背景颜色'),
        new ListTile({
          title: new Text('背景颜色：白'),
          onTap: function () {
            this.setState(
              function () {
                this._bgColor = new Color(0xffffffff);
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('背景颜色：粉'),
          onTap: function () {
            this.setState(
              function () {
                this._bgColor = new Color(0xfff06292);
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('背景颜色：橙'),
          onTap: function () {
            this.setState(
              function () {
                this._bgColor = new Color(0xffffb74d);
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('背景颜色：蓝'),
          onTap: function () {
            this.setState(
              function () {
                this._bgColor = new Color(0xff64b5f6);
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('背景颜色：紫'),
          onTap: function () {
            this.setState(
              function () {
                this._bgColor = new Color(0xffb388ff);
              }.bind(this),
            );
          }.bind(this),
        }),
      ],
    });
  }

  _changeSetting() {
    return new Column({
      children: [
        new SectionTitle('界面设置'),
        new ListTile({
          title: new Text('展示persistentFooterButtons'),
          onTap: function () {
            this.setState(
              function () {
                this._showButtonsBar = !this._showButtonsBar;
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('展示BottomNavigationBar'),
          onTap: function () {
            this.setState(
              function () {
                this._showBottomBar = !this._showBottomBar;
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('展示Drawer'),
          onTap: function () {
            this.setState(
              function () {
                this._showDrawer = !this._showDrawer;
              }.bind(this),
            );
          }.bind(this),
        }),
        new ListTile({
          title: new Text('展示EndDrawer'),
          onTap: function () {
            this.setState(
              function () {
                this._showEndDrawer = !this._showEndDrawer;
              }.bind(this),
            );
          }.bind(this),
        }),
      ],
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Scaffold'),
      }),
      body: new ListView({
        children: [this._changeFabLocation(), this._changeBgColor(), this._changeSetting()],
      }),
      bottomNavigationBar: this._showBottomBar ? this._bottomBar() : null,
      persistentFooterButtons: this._showButtonsBar ? this._buttonsBar() : null,
      drawer: this._showDrawer ? this._drawer(context) : null,
      endDrawer: this._showEndDrawer ? this._endDrawer(context) : null,
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {},
      }),
      floatingActionButtonLocation: this._fablocation,
      backgroundColor: this._bgColor,
    });
    return widget;
  }
}

export { ExampleWidget };
