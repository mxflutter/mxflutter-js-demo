/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  Radio,
  Row,
  MainAxisAlignment,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleRadio();
  }
}

class PageExampleRadio extends MXJSWidgetState {
  private _basicRadioValue: number;
  private _radioTileValue: number;
  constructor() {
    super();
    this._basicRadioValue = 0;
    this._radioTileValue = 0;
  }

  _basicRadio(number) {
    return new Radio({
      value: number,
      groupValue: this._basicRadioValue,
      onChanged: function (value) {
        this.setState(
          function () {
            this._basicRadioValue = value;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  _radioTile(number) {
    return new ListTile({
      title: new Text(number == this._radioTileValue ? '我被选中啦^_^' : '我没被选中T^T'),
      leading: new Radio({
        value: number,
        groupValue: this._radioTileValue,
        onChanged: function (value) {
          this.setState(
            function () {
              this._radioTileValue = value;
            }.bind(this),
          );
        }.bind(this),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Radio'),
      }),
      body: new ListView({
        children: [
          new SectionTitle('Radio的基本使用'),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [this._basicRadio(0), this._basicRadio(1), this._basicRadio(2), this._basicRadio(3)],
          }),
          new SectionTitle('Radio的颜色'),
          new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              new Radio({
                activeColor: Colors.red,
                onChanged: function () {},
              }),
              new Radio({
                activeColor: Colors.yellow,
                onChanged: function () {},
              }),
              new Radio({
                activeColor: Colors.blue,
                onChanged: function () {},
              }),
              new Radio({
                activeColor: Colors.green,
                onChanged: function () {},
              }),
            ],
          }),
          new SectionTitle('Radio的值'),
          this._radioTile(0),
          this._radioTile(1),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
