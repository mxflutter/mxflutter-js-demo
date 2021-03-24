/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  AppBar,
  Text,
  Colors,
  Column,
  Alignment,
  AspectRatio,
  Row,
  Slider,
  Padding,
  EdgeInsets,
} from '@mxflutter/mxflutter-widgets/material';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAspectRatioState();
  }
}

/// 比例盒 容纳一个子组件 通过指定宽高比限定子组件的大小
class PageExampleAspectRatioState extends MXJSWidgetState {
  private _ratio: number;
  constructor() {
    super();
    this._ratio = 1 / 2;
  }

  _changeRatio(value) {
    this.setState(
      function () {
        this._ratio = value;
      }.bind(this),
    );
  }

  build() {
    let widgets = new Scaffold({
      appBar: new AppBar({
        title: new Text('AspectRatio'),
      }),
      body: new Column({
        children: [
          new SectionTitle('比例盒组件'),
          new Padding({
            padding: EdgeInsets.all(10),
          }),
          new Container({
            height: 100,
            width: 300,
            color: Colors.blueGrey,
            alignment: Alignment.center,
            child: new Row({
              children: [
                new Container({
                  alignment: Alignment.center,
                  color: Colors.blue,
                  width: 50,
                  height: 50,
                  child: new Text('static'),
                }),
                new AspectRatio({
                  aspectRatio: this._ratio,
                  child: new Container({
                    alignment: Alignment.center,
                    color: Colors.green,
                  }),
                }),
                new Container({
                  alignment: Alignment.center,
                  color: Colors.blue,
                  width: 50,
                  height: 50,
                  child: new Text('static'),
                }),
              ],
            }),
          }),
          new Padding({
            padding: EdgeInsets.all(10),
          }),
          new Slider({
            value: this._ratio,
            onChanged: this._changeRatio.bind(this),
            min: 0.1,
            max: 2,
          }),
        ],
      }),
    });

    return widgets;
  }
}

export { ExampleWidget };
