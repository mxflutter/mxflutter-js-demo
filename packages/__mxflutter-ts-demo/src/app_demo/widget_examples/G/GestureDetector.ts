/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Container,
  Alignment,
  Colors,
  ListTile,
  GestureDetector,
  ListView,
  TextStyle,
} from '@mxflutter/mxflutter-widgets/material';

// 手势识别组件
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleGestureDetector();
  }
}

class PageExampleGestureDetector extends MXJSWidgetState {
  private _infoCommon: string;
  private _infoOffset: string;
  constructor() {
    super();
    this._infoCommon = 'idle';
    this._infoOffset = 'idle';
  }

  _buildCommon() {
    return new GestureDetector({
      onTap: function () {
        this.setState(
          function () {
            this._infoCommon = 'onTap';
          }.bind(this),
        );
        console.log(this._infoCommon);
      }.bind(this),
      onLongPress: function () {
        this.setState(
          function () {
            this._infoCommon = 'onLongPress';
          }.bind(this),
        );
        console.log(this._infoCommon);
      }.bind(this),
      child: new Container({
        alignment: Alignment.center,
        height: 200,
        color: Colors.orange,
        child: new Text(this._infoCommon, {
          style: new TextStyle({ fontSize: 20, color: Colors.white }),
        }),
      }),
    });
  }

  _onTapUp(details) {
    console.log(details);
    console.log(details.localPosition);
    console.log(details.globalPosition);
    this.setState(
      function () {
        this._infoOffset = 'onTapUp\n' + details.localPosition + '\n' + details.globalPosition;
      }.bind(this),
    );
  }

  _buildOffset() {
    return new GestureDetector({
      onTapUp: this._onTapUp.bind(this),
      // onTapDown: function(details) {
      //     this.setState(function() {
      //         this._infoOffset = 'onTapDown\n'+details.localPosition+'\n'+details.globalPosition;
      //     })
      //     console.log(details.localPosition);
      // }.bind(this),
      child: new Container({
        alignment: Alignment.center,
        height: 200,
        color: Colors.orange,
        child: new Text(this._infoOffset, {
          style: new TextStyle({ fontSize: 20, color: Colors.white }),
        }),
      }),
    });
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('GestureDetector'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('点击长按试试？') }),
          this._buildCommon(),
          new ListTile({ title: new Text('换个位置试试？') }),
          this._buildOffset(),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
