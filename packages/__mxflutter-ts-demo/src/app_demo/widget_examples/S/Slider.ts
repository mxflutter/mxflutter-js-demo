/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  AppBar,
  ListView,
  ListTile,
  Slider,
  TextStyle,
  Color,
  Text,
  Scaffold,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleSlider();
  }
}

class PageExampleSlider extends MXJSWidgetState {
  private _fontSizeMap: any;
  private _currentValue: number;
  private _fontSize: number;
  private _colorfulValue: number;
  constructor() {
    super();
    this._fontSizeMap = {
      12: '小',
      16: '中',
      20: '大',
      24: '特大',
    };
    this._currentValue = 50.0;
    this._fontSize = 16.0;
    this._colorfulValue = 50.0;
  }

  _text(text) {
    return new Text(text.toString(), {
      style: new TextStyle({ fontSize: this._fontSize }),
    });
  }

  _getColor(value) {
    var r = Math.min(Math.min(value, 100.0 - value) / 33.3, 1.0);
    r = Math.floor((1.0 - r) * 205) + 50;
    var g = Math.min(Math.abs((value - 33.3) / 33.3), 1.0);
    g = Math.floor((1.0 - g) * 205) + 50;
    var b = Math.min(Math.abs((value - 66.7) / 33.3), 1.0);
    b = Math.floor((1.0 - b) * 205) + 50;
    var result = (r << 16) | (g << 8) | (b << 0);
    return result;
  }

  _valueChangeSlider() {
    return new Slider({
      min: 0.0,
      max: 100.0,
      value: this._currentValue,
      onChanged: function (value) {
        this.setState(
          function () {
            this._currentValue = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  _fontChangedSlider() {
    return new Slider({
      min: 12.0,
      max: 24.0,
      divisions: 3,
      value: this._fontSize,
      onChanged: function (value) {
        this.setState(
          function () {
            this._fontSize = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  _colorfulSlider() {
    return new Slider({
      min: 0.0,
      max: 100.0,
      divisions: 1000,
      activeColor: new Color(this._getColor(this._colorfulValue) | 0xb0000000),
      inactiveColor: new Color(this._getColor(this._colorfulValue) | 0x40000000),
      value: this._colorfulValue,
      label: this._colorfulValue.toFixed(1),
      onChanged: function (value) {
        this.setState(
          function () {
            this._colorfulValue = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('Slider') }),
      body: new ListView({
        children: [
          new ListTile({
            title: this._text('连续滑块, 当前值为: ' + this._currentValue.toFixed(1)),
          }),
          this._valueChangeSlider(),
          new ListTile({
            title: this._text('离散滑块, 字体大小: ' + this._fontSizeMap[this._fontSize]),
          }),
          this._fontChangedSlider(),
          new ListTile({
            title: this._text('带颜色和标签的滑块'),
          }),
          this._colorfulSlider(),
        ],
      }),
    });
    return widget;
  }
}
export { ExampleWidget };
