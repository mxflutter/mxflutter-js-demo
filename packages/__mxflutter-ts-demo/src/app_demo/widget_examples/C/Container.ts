/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  DefaultTabController,
  Tab,
  TabBar,
  TabBarView,
  Scaffold,
  AppBar,
  Text,
  ListView,
  Alignment,
  Container,
  Colors,
  ListTile,
  EdgeInsets,
  BoxDecoration,
  BoxShape,
  BorderRadius,
  Radius,
  Border,
  BoxShadow,
  Offset,
  Matrix4,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleContainer();
  }
}

class PageExampleContainer extends MXJSWidgetState {
  constructor() {
    super();
  }

  _alignmentView() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('Alignment.center') }),
        new Container({
          height: 240.0,
          color: Colors.blue /*[200]*/,
          alignment: Alignment.center,
          child: new Text('Container'),
        }),
        new ListTile({ title: new Text('Alignment.topLeft') }),
        new Container({
          height: 240.0,
          color: Colors.blue /*[200]*/,
          alignment: Alignment.topLeft,
          child: new Text('Container'),
        }),
        new ListTile({ title: new Text('Alignment(0.2, -0.7)') }),
        new Container({
          height: 240.0,
          color: Colors.blue /*[200]*/,
          alignment: new Alignment(0.2, -0.7),
          child: new Text('Container'),
        }),
      ],
    });
  }

  _paddingAndMargin() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('Red Container: (padding: 50.0, margin: 20.0)') }),
        new Container({
          height: 240.0,
          color: Colors.blue /*[200]*/,
          child: new Container({
            color: Colors.red /*[200]*/,
            padding: EdgeInsets.all(50.0),
            margin: EdgeInsets.all(20.0),
            child: new Container({ color: Colors.yellow /*[200]*/ }),
          }),
        }),
        new ListTile({ title: new Text('margin: EdgeInsets.fromLTRB(10, 20, 30, 40)') }),
        new Container({
          height: 240.0,
          color: Colors.blue /*[200]*/,
          child: new Container({
            color: Colors.green /*[200]*/,
            margin: EdgeInsets.fromLTRB(10.0, 20.0, 30.0, 40.0),
          }),
        }),
        new ListTile({ title: new Text('margin: EdgeInsets.symmetric({vertical: 10, horizontal: 40})') }),
        new Container({
          height: 240.0,
          color: Colors.blue /*[200]*/,
          child: new Container({
            color: Colors.orange /*[200]*/,
            margin: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 40.0 }),
          }),
        }),
        new ListTile({ title: new Text('margin: EdgeInsets.only({bottom: 20})') }),
        new Container({
          height: 240.0,
          color: Colors.blue /*[200]*/,
          child: new Container({
            color: Colors.purple /*[200]*/,
            margin: EdgeInsets.only({ bottom: 20.0 }),
          }),
        }),
      ],
    });
  }

  _decorationView() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('decoration.shape') }),
        new Container({
          child: new Text('Container'),
          decoration: new BoxDecoration({
            shape: BoxShape.circle,
            color: Colors.red /*[200]*/,
          }),
          alignment: Alignment.center,
          margin: EdgeInsets.all(10.0),
          height: 80.0,
        }),
        new ListTile({ title: new Text('decoration.borderRadius') }),
        new Container({
          child: new Text('Container'),
          decoration: new BoxDecoration({
            borderRadius: BorderRadius.all(Radius.circular(16.0)),
            color: Colors.green /*[200]*/,
          }),
          alignment: Alignment.center,
          margin: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 80.0 }),
          height: 80.0,
        }),
        new ListTile({ title: new Text('decoration.border') }),
        new Container({
          child: new Text('Container'),
          decoration: new BoxDecoration({
            borderRadius: BorderRadius.all(Radius.circular(16.0)),
            border: Border.all({
              color: Colors.orange /*[600]*/,
              width: 2.0,
            }),
          }),
          alignment: Alignment.center,
          margin: EdgeInsets.symmetric({ vertical: 10.0, horizontal: 120.0 }),
          height: 40.0,
        }),
        new ListTile({ title: new Text('decoration.boxShadow') }),
        new Container({
          child: new Text('Container'),
          decoration: new BoxDecoration({
            shape: BoxShape.circle,
            color: Colors.blue /*[300]*/,
            boxShadow: [
              new BoxShadow({
                color: Colors.black54,
                offset: new Offset(5.0, 5.0),
                blurRadius: 5.0,
              }),
            ],
          }),
          alignment: Alignment.center,
          margin: EdgeInsets.all(10.0),
          height: 80.0,
        }),
      ],
    });
  }

  _transformView() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('Matrix4.rotationX(0.25)') }),
        new Container({
          color: Colors.blue /*[200]*/,
          child: new Text('Container'),
          alignment: Alignment.center,
          margin: EdgeInsets.symmetric({ horizontal: 120.0 }),
          height: 60.0,
          transform: Matrix4.rotationZ(0.25),
        }),
        new Container({ height: 120 }),
        new ListTile({ title: new Text('Matrix4.skewY(0.25)') }),
        new Container({
          color: Colors.blue /*[200]*/,
          child: new Text('Container'),
          alignment: Alignment.center,
          margin: EdgeInsets.symmetric({ horizontal: 120.0 }),
          height: 60.0,
          transform: Matrix4.skewY(0.25),
        }),
      ],
    });
  }

  build(context) {
    let widgets = new DefaultTabController({
      length: 4,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Container'),
          bottom: new TabBar({
            isScrollable: true,
            tabs: [
              new Tab({ text: 'alignment' }),
              new Tab({ text: 'padding & margin' }),
              new Tab({ text: 'Decoration' }),
              new Tab({ text: 'transform' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [this._alignmentView(), this._paddingAndMargin(), this._decorationView(), this._transformView()],
        }),
      }),
    });
    return widgets;
  }
}

export { ExampleWidget };
