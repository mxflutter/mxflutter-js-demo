/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Container,
  Colors,
  CircleAvatar,
  Icon,
  Icons,
  IconButton,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleListTile();
  }
}

class PageExampleListTile extends MXJSWidgetState {
  private _selected: boolean;
  constructor() {
    super();
    this._selected = false;
  }

  _divider() {
    return new Container({
      height: 1.0,
      color: Colors.grey /*[400]*/,
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('ListTile'),
      }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text('基本的ListTile'),
          }),
          this._divider(),
          new ListTile({
            title: new Text('带有描述的ListTile'),
            subtitle: new Text('这个一条短描述'),
          }),
          this._divider(),
          new ListTile({
            title: new Text('三行带有描述的ListTile'),
            subtitle: new Text('这个一条长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长描述'),
            isThreeLine: true,
          }),
          this._divider(),
          new ListTile({
            title: new Text('三行紧凑的的ListTile'),
            subtitle: new Text('这个一条长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长描述'),
            isThreeLine: true,
            dense: true,
          }),
          this._divider(),
          new ListTile({
            title: new Text('带有图标的ListTile'),
            subtitle: new Text('000-0000-0000'),
            leading: new CircleAvatar({
              backgroundColor: Colors.blue,
              foregroundColor: Colors.white,
              child: new Text('头'),
            }),
            trailing: new IconButton({
              icon: new Icon(Icons.call),
            }),
          }),
          this._divider(),
          new ListTile({
            title: new Text('可点击的ListTile'),
            onTap: function () {
              console.log('ListTile was Tapped.');
            },
          }),
          this._divider(),
          new ListTile({
            title: new Text(this._selected ? '点击左侧按钮取消选中' : '可长按选中的ListTile'),
            onLongPress: function () {
              if (this._selected == false)
                this.setState(
                  function () {
                    this._selected = !this._selected;
                  }.bind(this),
                );
            }.bind(this),
            selected: this._selected,
            leading: this._selected
              ? new IconButton({
                  icon: new Icon(Icons.check_box),
                  onPressed: function () {
                    this.setState(
                      function () {
                        this._selected = !this._selected;
                      }.bind(this),
                    );
                  }.bind(this),
                })
              : null,
          }),
          this._divider(),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
