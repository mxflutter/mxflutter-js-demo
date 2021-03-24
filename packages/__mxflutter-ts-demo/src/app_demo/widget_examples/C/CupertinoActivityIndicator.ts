/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Column,
  Row,
  Alignment,
  Container,
  Expanded,
  EdgeInsets,
  Colors,
  BoxDecoration,
  Border,
  BorderRadius,
  Radius,
  MainAxisAlignment,
} from '@mxflutter/mxflutter-widgets/material';
import { CupertinoActivityIndicator, CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoActivityIndicator();
  }
}

class PageExampleCupertinoActivityIndicator extends MXJSWidgetState {
  private settingTable: any;
  constructor() {
    super();
    this.settingTable = {
      showAnimation: true,
      bigIcon: false,
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
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('CupertinoActivityIndicator') }),
      body: new Column({
        children: [
          new Container({
            margin: EdgeInsets.all(12.0),
            decoration: new BoxDecoration({
              borderRadius: BorderRadius.all(Radius.circular(4.0)),
              border: Border.all({
                color: Colors.black,
                width: 2.0,
              }),
            }),
            height: 240,
            alignment: Alignment.center,
            child: new CupertinoActivityIndicator({
              animating: this.settingTable['showAnimation'],
              radius: this.settingTable['bigIcon'] ? 32.0 : 16.0,
            }),
          }),
          new Expanded({ child: new Container() }),
          this._singleOption('显示动画：是', '显示动画：否', 'showAnimation'),
          this._singleOption('大图标：是', '大图标：否', 'bigIcon'),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
