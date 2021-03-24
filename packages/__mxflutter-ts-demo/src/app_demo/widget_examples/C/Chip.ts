/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Chip,
  Icon,
  Icons,
  EdgeInsets,
  Colors,
  RoundedRectangleBorder,
  BorderRadius,
  Row,
  CircleAvatar,
  TextStyle,
  MainAxisAlignment,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleChip();
  }
}

class PageExampleChip extends MXJSWidgetState {
  private selected: boolean;
  constructor() {
    super();
    this.selected = false;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Chip') }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('Chip, 带有图标的Chip和自定义label样式的Chip') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              new Chip({ label: new Text('Chip') }),
              new Chip({
                avatar: new CircleAvatar({ child: new Text('C') }),
                label: new Text('Chip'),
              }),
              new Chip({
                label: new Text('Chip'),
                labelStyle: new TextStyle({ color: Colors.blue }),
                labelPadding: EdgeInsets.symmetric({ horizontal: 30.0 }),
              }),
            ],
          }),
          new ListTile({ title: new Text('带有删除按钮的Chip, 自定义多种样式的Chip') }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              new Chip({
                label: new Text('Chip'),
                deleteIcon: new Icon(Icons.delete_forever),
                deleteIconColor: Colors.red /*[400]*/,
                onDeleted: function () {},
                deleteButtonTooltipMessage: '删除',
              }),
              new Chip({
                label: new Text('Chip'),
                shape: new RoundedRectangleBorder({
                  borderRadius: BorderRadius.circular(5.0),
                }),
                backgroundColor: Colors.blue /*[200]*/,
              }),
              new Chip({
                label: new Text('Chip'),
                elevation: 5.0,
                shadowColor: Colors.red,
              }),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
