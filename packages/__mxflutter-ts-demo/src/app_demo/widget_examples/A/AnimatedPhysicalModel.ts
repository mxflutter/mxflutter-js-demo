/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  AppBar,
  Text,
  AnimatedPhysicalModel,
  Colors,
  Center,
  Row,
  Column,
  MainAxisAlignment,
  EdgeInsets,
  BorderRadius,
  BoxShape,
  SizedBox,
  Duration
} from '@mxflutter/mxflutter-widgets/material';

import { CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedPhysicalModel();
  }
}

class PageExampleAnimatedPhysicalModel extends MXJSWidgetState {
  private settingTable: any;
  constructor() {
    super();
    this.settingTable = {
      hasBorderRadius: false,
      ColorPink: false,
      Elevation: false,
      ShadowColor: false,
    };
  }

  _singleOption(selectedText, unselectedText, varName) {
    return new Container({
      padding: EdgeInsets.all(12.0),
      child: new Row({
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          new Text(this.settingTable[varName] ? selectedText : unselectedText),
          new CupertinoSwitch({
            value: this.settingTable[varName],
            activeColor: Colors.orange,
            onChanged: function (value) {
              this.setState(
                function () {
                  this.settingTable[varName] = value;
                }.bind(this),
              );
            }.bind(this),
          }),
        ],
      }),
    });
  }

  build(context) {
    return new Scaffold({
      appBar: new AppBar({ title: new Text('AnimatedPhysicalModel') }),
      body: new Column({
        children: [
          new SizedBox({ height: 20.0 }),
          new Center({
            child: new AnimatedPhysicalModel({
              borderRadius: this.settingTable['hasBorderRadius'] ? BorderRadius.circular(20.0) : BorderRadius.zero,
              shape: BoxShape.rectangle,
              color: this.settingTable['ColorPink'] ? Colors.pink /*[300]*/ : Colors.cyan /*[300]*/,
              elevation: this.settingTable['Elevation'] ? 18 : 8,
              shadowColor: this.settingTable['ShadowColor'] ? Colors.yellow : Colors.black,
              child: new Container({ height: 120, width: 120 }),
              duration: new Duration({ milliseconds: 500 }),
            }),
          }),
          new SizedBox({ height: 20.0 }),
          this._singleOption('??????????????????', '??????????????????', 'hasBorderRadius'),
          this._singleOption('?????????????????????', '?????????????????????', 'ColorPink'),
          this._singleOption('??????????????????', '??????????????????', 'Elevation'),
          this._singleOption('?????????????????????', '?????????????????????', 'ShadowColor'),
        ],
      }),
    });
  }
}

export { ExampleWidget };
