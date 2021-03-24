/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Card,
  Column,
  Icon,
  Icons,
  ButtonBar,
  FlatButton,
  MainAxisSize,
  EdgeInsets,
  Container,
  Center,
  Image,
  Colors,
  RoundedRectangleBorder,
  BorderRadius,
  Clip,
  BoxFit,
  InkWell,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCard();
  }
}

class PageExampleCard extends MXJSWidgetState {
  constructor() {
    super();
  }

  _cardContent(title, description, showButtonBar = true) {
    return new Column({
      mainAxisSize: MainAxisSize.min,
      children: [
        new ListTile({
          leading: new Icon(Icons.album),
          title: new Text(title),
          subtitle: new Text(description),
        }),
        showButtonBar
          ? new ButtonBar({
              children: [
                new FlatButton({
                  child: new Text('分享'),
                  onPressed: function () {},
                }),
                new FlatButton({
                  child: new Text('关闭'),
                  onPressed: function () {},
                }),
              ],
            })
          : new Container(),
      ],
    });
  }

  _cardTappable() {
    return new Card({
      child: new InkWell({
        onTap: function () {},
        child: new Container({
          height: 120.0,
          width: 350.0,
          child: new Center({ child: new Text('可点击的卡片') }),
        }),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Card') }),
      body: new ListView({
        padding: EdgeInsets.all(12.5),
        children: [
          new ListTile({ title: new Text('使用ListTile制作的、带有按钮的卡片') }),
          new Card({ child: this._cardContent('卡片', '这里是描述') }),
          new ListTile({ title: new Text('使用InkWell制作的、可点击的卡片') }),
          this._cardTappable(),
          new ListTile({ title: new Text('带有颜色、不同高度、不同阴影的卡片') }),
          new Card({
            child: this._cardContent('彩色卡片和彩色阴影', 'evevation设为12.0 阴影面积变大了'),
            color: Colors.blue /*[100]*/,
            shadowColor: Colors.purple /*[800]*/,
            elevation: 15.0,
          }),
          new ListTile({ title: new Text('改变margin') }),
          new Card({
            margin: EdgeInsets.all(40.0),
            child: this._cardContent('margin:40.0', '让卡片和其他元素保持距离', false),
          }),
          new ListTile({ title: new Text('个性化Card形状并剪切子元素') }),
          new Card({
            shape: new RoundedRectangleBorder({ borderRadius: BorderRadius.circular(25.0) }),
            child: Image.asset('people/ali_landscape.png', {
              __mx_package: 'flutter_gallery_assets',
              fit: BoxFit.cover,
            }),
            clipBehavior: Clip.antiAlias,
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
