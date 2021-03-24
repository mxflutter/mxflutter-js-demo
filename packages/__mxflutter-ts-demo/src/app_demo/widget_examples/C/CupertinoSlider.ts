/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, AppBar, Text, ListView, ListTile, TextStyle, Colors } from '@mxflutter/mxflutter-widgets/material';
import { CupertinoSlider } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoSlider();
  }
}

class PageExampleCupertinoSlider extends MXJSWidgetState {
  private currentValue: number;
  private fontSize: number;
  private coloredValue: number;
  private fontSizeMap: any;
  constructor() {
    super();
    this.currentValue = 50.0;
    this.fontSize = 16.0;
    this.coloredValue = 50.0;
    this.fontSizeMap = {
      12: '小',
      16: '中',
      20: '大',
      24: '特大',
    };
  }

  build(context) {
    let currentStyle = new TextStyle({ fontSize: this.fontSize });
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('CupertinoSlider') }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text('连续滑块, 当前值为: ' + this.currentValue.toFixed(1), {
              style: currentStyle,
            }),
          }),
          new CupertinoSlider({
            min: 0.0,
            max: 100.0,
            value: this.currentValue,
            onChanged: function (value) {
              this.setState(
                function () {
                  this.currentValue = value;
                }.bind(this),
              );
            }.bind(this),
          }),
          new ListTile({
            title: new Text('离散滑块, 字体大小: ' + this.fontSizeMap[this.fontSize], {
              style: currentStyle,
            }),
          }),
          new CupertinoSlider({
            min: 12.0,
            max: 24.0,
            divisions: 3,
            value: this.fontSize,
            onChanged: function (value) {
              this.setState(
                function () {
                  this.fontSize = value;
                }.bind(this),
              );
            }.bind(this),
          }),
          new ListTile({ title: new Text('带颜色滑块', { style: currentStyle }) }),
          new CupertinoSlider({
            min: 0.0,
            max: 100.0,
            value: this.coloredValue,
            activeColor: Colors.blue /*[300]*/,
            thumbColor: Colors.blue /*[800]*/,
            onChanged: function (value) {
              this.setState(
                function () {
                  this.coloredValue = value;
                }.bind(this),
              );
            }.bind(this),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
