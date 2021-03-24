/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListTile,
  Column,
  ListView,
  PopupMenuButton,
  PopupMenuItem,
  Icons,
  Offset,
  Icon,
  Colors,
  CheckedPopupMenuItem,
} from '@mxflutter/mxflutter-widgets/material';

// Padding提供设置内边距的组件，用法非常简单
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExamplePopupMenuButton();
  }
}

class PageExamplePopupMenuButton extends MXJSWidgetState {
  private _items: any;
  private _callbackText: string;
  private _currentIndex: number;

  constructor() {
    super();
    this._items = [];
    this._currentIndex = 1;
    for (let i = 1; i <= 4; i++) {
      this._items.push(
        new PopupMenuItem({
          value: i,
          child: new Text('选项' + i),
        }),
      );
    }
    this._callbackText = '带回调的PopupMenuButton';
  }

  _normalPopupMenuButton() {
    return new ListTile({
      title: new Text('普通的PopupMenuButton'),
      trailing: new PopupMenuButton({
        itemBuilder: function (context) {
          return this._items;
        }.bind(this),
      }),
    });
  }

  _callbackPopupMenuButton() {
    return new ListTile({
      title: new Text(this._callbackText),
      trailing: new PopupMenuButton({
        itemBuilder: function (context) {
          return this._items;
        }.bind(this),
        onSelected: function (value) {
          this.setState(
            function () {
              this._callbackText = '你选择了' + value;
            }.bind(this),
          );
        }.bind(this),
        onCanceled: function () {
          this.setState(
            function () {
              this._callbackText = '你居然一个都没选';
            }.bind(this),
          );
        }.bind(this),
      }),
    });
  }

  _customIconPopupMenuButton() {
    return new ListTile({
      title: new Text('自定义icon和tooltip的PopupMenuButton'),
      trailing: new PopupMenuButton({
        itemBuilder: function (context) {
          return this._items;
        }.bind(this),
        icon: new Icon(Icons.add),
        tooltip: '自定义tooltip',
      }),
    });
  }

  _customColorPopupMenuButton() {
    return new ListTile({
      title: new Text('自定义颜色和偏移量的PopupMenuButton'),
      trailing: new PopupMenuButton({
        itemBuilder: function (context) {
          return this._items;
        }.bind(this),
        color: Colors.blue,
        offset: new Offset(0.0, 40.0),
      }),
    });
  }

  _checkablePopupMenuButton() {
    let _itemsWithFlag = [];
    for (let i = 1; i <= 4; i++) {
      _itemsWithFlag.push(
        new CheckedPopupMenuItem({
          value: i,
          child: new Text('选项' + i),
          checked: i == this._currentIndex,
        }),
      );
    }
    return new ListTile({
      title: new Text('带有选中提示的PopupMenuButton'),
      trailing: new PopupMenuButton({
        itemBuilder: function (context) {
          return _itemsWithFlag;
        }.bind(this),
        onSelected: function (value) {
          this.setState(
            function () {
              this._currentIndex = value;
            }.bind(this),
          );
        }.bind(this),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('PopupMenuButton') }),
      body: new ListView({
        children: [
          this._normalPopupMenuButton(),
          this._callbackPopupMenuButton(),
          this._customIconPopupMenuButton(),
          this._customColorPopupMenuButton(),
          this._checkablePopupMenuButton(),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
