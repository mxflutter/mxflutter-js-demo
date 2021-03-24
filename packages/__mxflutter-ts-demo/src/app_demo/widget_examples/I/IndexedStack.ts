/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Container,
  AppBar,
  Text,
  Colors,
  IndexedStack,
  Center,
  Icon,
  Icons,
  Alignment,
  Row,
  IconButton,
  MainAxisAlignment,
  Column,
  Wrap,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleIndexedStack();
  }
}

class PageExampleIndexedStack extends MXJSWidgetState {
  private _index: number;
  constructor() {
    super();
    this._index = 1;
  }

  genIndexedStack(containerColor, iconName, index) {
    return new Center({
      child: new Container({
        height: 300,
        width: 300,
        color: Colors[containerColor],
        alignment: Alignment.center,
        child: new Wrap({
          children: [new Text('NO.' + index), new Icon(Icons[iconName])],
        }),
      }),
    });
  }

  genIndexedIcon(iconName, index) {
    return new IconButton({
      icon: new Icon(Icons[iconName]),
      onPressed: function () {
        this.setState(
          function () {
            this._index = index;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('IndexedStack') }),
      body: new Column({
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          new IndexedStack({
            index: this._index,
            children: [
              this.genIndexedStack('red', 'school', 0),
              this.genIndexedStack('green', 'person', 1),
              this.genIndexedStack('yellow', 'home', 2),
            ],
          }),
          new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              this.genIndexedIcon('school', 0),
              this.genIndexedIcon('person', 1),
              this.genIndexedIcon('home', 2),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
