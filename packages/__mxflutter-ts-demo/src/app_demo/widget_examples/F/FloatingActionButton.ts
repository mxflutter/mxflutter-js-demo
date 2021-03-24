/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  ButtonBar,
  FloatingActionButton,
  Icon,
  Icons,
  Colors,
  RoundedRectangleBorder,
  BorderRadius,
  MainAxisAlignment,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleFloatingActionButton();
  }
}

class PageExampleFloatingActionButton extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FloatingActionButton'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('基本的FloatingActionButton样式') }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: [
              new FloatingActionButton({
                child: new Icon(Icons.add),
                heroTag: 1,
              }),
              new FloatingActionButton({
                child: new Icon(Icons.add),
                foregroundColor: Colors.white,
                backgroundColor: Colors.blue,
                heroTag: 2,
              }),
              new FloatingActionButton({
                child: new Icon(Icons.add),
                foregroundColor: Colors.white,
                backgroundColor: Colors.green,
                splashColor: Colors.white,
                heroTag: 3,
              }),
              new FloatingActionButton({
                child: new Icon(Icons.add),
                foregroundColor: Colors.white,
                backgroundColor: Colors.pink /*[300]*/,
                elevation: 2.0,
                highlightElevation: 6.0,
                heroTag: 4,
              }),
            ],
          }),
          new ListTile({ title: new Text('mini, 长按提示和其他形状的FloatingActionButton') }),
          new ButtonBar({
            alignment: MainAxisAlignment.spaceAround,
            children: [
              new FloatingActionButton({
                child: new Icon(Icons.add),
                mini: true,
                heroTag: 5,
              }),
              new FloatingActionButton({
                child: new Icon(Icons.add),
                tooltip: 'FloatingActionButton',
                heroTag: 6,
              }),
              new FloatingActionButton({
                child: new Icon(Icons.add),
                shape: new RoundedRectangleBorder({
                  borderRadius: BorderRadius.circular(12.0),
                }),
                heroTag: 7,
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
