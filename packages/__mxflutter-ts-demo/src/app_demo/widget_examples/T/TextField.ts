/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  EdgeInsets,
  TextField,
  InputDecoration,
  Icon,
  Icons,
  OutlineInputBorder,
  BorderSide,
  BorderRadius,
  Radius,
  Color,
  Colors,
  Container,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTextField();
  }
}

class PageExampleTextField extends MXJSWidgetState {
  private _textFieldValue: string;
  constructor() {
    super();
    this._textFieldValue = '';
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('TextField') }),
      body: new ListView({
        padding: EdgeInsets.symmetric({ horizontal: 25.0 }),
        children: [
          new ListTile({ title: new Text('基础的文本输入组件') }),
          new TextField(),
          new ListTile({ title: new Text('带有简单装饰的文本输入组件') }),
          new TextField({
            decoration: new InputDecoration({
              labelText: '用户名',
              icon: new Icon(Icons.person),
            }),
          }),
          new ListTile({ title: new Text('带有提示的文本输入组件') }),
          new TextField({
            decoration: new InputDecoration({
              hintText: '请输入用户名',
              helperText: '用户名长度为6-14个字母',
              icon: new Icon(Icons.person),
            }),
          }),
          new ListTile({ title: new Text('文本输入组件的错误提示') }),
          new TextField({
            decoration: new InputDecoration({
              errorText: '用户名输入错误',
              errorBorder: new OutlineInputBorder({
                borderSide: new BorderSide({ color: Colors.red }),
              }),
            }),
          }),
          new ListTile({ title: new Text('文本输入组件的字数统计') }),
          new TextField({
            maxLength: 20,
            onChanged: function (value) {
              this.setState(
                function () {
                  this._textFieldValue = value;
                }.bind(this),
              );
            }.bind(this),
            decoration: new InputDecoration({
              counterText: this._textFieldValue.length + '/20',
            }),
          }),
          new ListTile({ title: new Text('自定义形状与选中的文本输入组件') }),
          new TextField({
            decoration: new InputDecoration({
              fillColor: new Color(0x40404040),
              filled: true,
              enabledBorder: new OutlineInputBorder({
                borderSide: new BorderSide({ color: Colors.grey }),
                borderRadius: BorderRadius.all(Radius.circular(100.0)),
              }),
              focusedBorder: new OutlineInputBorder({
                borderSide: new BorderSide({ color: Colors.blue }),
                borderRadius: BorderRadius.all(Radius.circular(12.0)),
              }),
            }),
          }),
          new ListTile({ title: new Text('密码输入组件') }),
          new TextField({
            obscureText: true,
            obscuringCharacter: '*',
            decoration: new InputDecoration({
              hintText: '请输入密码',
              icon: new Icon(Icons.lock),
            }),
          }),
          new ListTile({ title: new Text('自定义光标的文本输入组件') }),
          new TextField({
            cursorColor: Colors.green,
            cursorWidth: 1.0,
            decoration: new InputDecoration({
              hintText: '自定义光标',
            }),
          }),
          new Container({ height: 240.0 }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
