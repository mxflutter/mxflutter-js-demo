/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  ListTile,
  FittedBox,
  Container,
  BoxFit,
  Image,
  Colors,
  Alignment,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleFittedBox();
  }
}

class PageExampleFittedBox extends MXJSWidgetState {
  constructor() {
    super();
  }

  _picture() {
    return Image.asset('people/ali_landscape.png', {
      __mx_package: 'flutter_gallery_assets',
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FittedBox'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('fit: BoxFit.contain') }),
          new Container({
            color: Colors.blue /*[200]*/,
            height: 200,
            child: new FittedBox({
              fit: BoxFit.contain,
              child: this._picture(),
            }),
          }),
          new ListTile({ title: new Text('fit: BoxFit.cover') }),
          new Container({
            color: Colors.blue /*[200]*/,
            height: 200,
            child: new FittedBox({
              fit: BoxFit.cover,
              child: this._picture(),
            }),
          }),
          new ListTile({ title: new Text('fit: BoxFit.fill') }),
          new Container({
            color: Colors.blue /*[200]*/,
            height: 200,
            child: new FittedBox({
              fit: BoxFit.fill,
              child: this._picture(),
            }),
          }),
          new ListTile({ title: new Text('fit: BoxFit.none') }),
          new Container({
            color: Colors.blue /*[200]*/,
            height: 200,
            child: new FittedBox({
              fit: BoxFit.none,
              child: this._picture(),
            }),
          }),
          new ListTile({ title: new Text('alignment: Alignment.centerLeft') }),
          new Container({
            color: Colors.blue /*[200]*/,
            height: 200,
            child: new FittedBox({
              fit: BoxFit.contain,
              alignment: Alignment.centerLeft,
              child: this._picture(),
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
