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
  Row,
  Container,
  Colors,
  ListTile,
  Center,
  MainAxisAlignment,
  MainAxisSize,
  CrossAxisAlignment,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleRow();
  }
}

class PageExampleRow extends MXJSWidgetState {
  constructor() {
    super();
  }

  _equalContainersList() {
    return [
      new Container({
        height: 100,
        width: 30,
        color: Colors.red /*[300]*/,
        child: new Center({ child: new Text('1') }),
      }),
      new Container({
        height: 100,
        width: 30,
        color: Colors.blue /*[300]*/,
        child: new Center({ child: new Text('2') }),
      }),
      new Container({
        height: 100,
        width: 30,
        color: Colors.green /*[300]*/,
        child: new Center({ child: new Text('3') }),
      }),
    ];
  }

  _unequalContainersList() {
    return [
      new Container({
        height: 100,
        width: 30,
        color: Colors.red /*[300]*/,
        child: new Center({ child: new Text('1') }),
      }),
      new Container({
        height: 90,
        width: 30,
        color: Colors.blue /*[300]*/,
        child: new Center({ child: new Text('2') }),
      }),
      new Container({
        height: 80,
        width: 30,
        color: Colors.green /*[300]*/,
        child: new Center({ child: new Text('3') }),
      }),
    ];
  }

  _mainAxisAlignmentView() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('MainAxisAlignment.start') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisAlignment: MainAxisAlignment.start,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.end') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisAlignment: MainAxisAlignment.end,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.center') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisAlignment: MainAxisAlignment.center,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.spaceAround') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.spaceBetween') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.spaceEvenly') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: this._equalContainersList(),
          }),
        }),
      ],
    });
  }

  _crossAxisAlignmentView() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('CrossAxisAlignment.start') }),
        new Container({
          height: 120.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: this._unequalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('CrossAxisAlignment.end') }),
        new Container({
          height: 120.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            crossAxisAlignment: CrossAxisAlignment.end,
            children: this._unequalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('CrossAxisAlignment.center') }),
        new Container({
          height: 120.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            crossAxisAlignment: CrossAxisAlignment.center,
            children: this._unequalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('CrossAxisAlignment.stretch') }),
        new Container({
          height: 120.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: this._unequalContainersList(),
          }),
        }),
      ],
    });
  }

  _mainAxisSizeView() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('MainAxisSize.min') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisSize: MainAxisSize.min,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisSize.max') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Row({
            mainAxisSize: MainAxisSize.max,
            children: this._equalContainersList(),
          }),
        }),
      ],
    });
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 3,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Row'),
          bottom: new TabBar({
            isScrollable: true,
            tabs: [
              new Tab({ text: 'MainAxisAlignment' }),
              new Tab({ text: 'CrossAxisAlignment' }),
              new Tab({ text: 'MainAxisSize' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [this._mainAxisAlignmentView(), this._crossAxisAlignmentView(), this._mainAxisSizeView()],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
