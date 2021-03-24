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
  Column,
  Container,
  Colors,
  ListTile,
  Center,
  MainAxisAlignment,
  MainAxisSize,
  CrossAxisAlignment,
  VerticalDirection,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleColumn();
  }
}

class PageExampleColumn extends MXJSWidgetState {
  constructor() {
    super();
  }

  _equalContainersList() {
    return [
      new Container({
        height: 30,
        width: 100,
        color: Colors.red /*[300]*/,
        child: new Center({ child: new Text('1') }),
      }),
      new Container({
        height: 30,
        width: 100,
        color: Colors.blue /*[300]*/,
        child: new Center({ child: new Text('2') }),
      }),
      new Container({
        height: 30,
        width: 100,
        color: Colors.green /*[300]*/,
        child: new Center({ child: new Text('3') }),
      }),
    ];
  }

  _unequalContainersList() {
    return [
      new Container({
        height: 30,
        width: 100,
        color: Colors.red /*[300]*/,
        child: new Center({ child: new Text('1') }),
      }),
      new Container({
        height: 30,
        width: 90,
        color: Colors.blue /*[300]*/,
        child: new Center({ child: new Text('2') }),
      }),
      new Container({
        height: 30,
        width: 80,
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
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.start,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.end') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.end,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.center') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.center,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.spaceAround') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.spaceBetween') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisAlignment.spaceEvenly') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
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
          height: 90.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            crossAxisAlignment: CrossAxisAlignment.start,
            children: this._unequalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('CrossAxisAlignment.end') }),
        new Container({
          height: 90.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            crossAxisAlignment: CrossAxisAlignment.end,
            children: this._unequalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('CrossAxisAlignment.center') }),
        new Container({
          height: 90.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            crossAxisAlignment: CrossAxisAlignment.center,
            children: this._unequalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('CrossAxisAlignment.stretch') }),
        new Container({
          height: 90.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
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
          child: new Column({
            mainAxisSize: MainAxisSize.min,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('MainAxisSize.max') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            mainAxisSize: MainAxisSize.max,
            children: this._equalContainersList(),
          }),
        }),
      ],
    });
  }

  _verticalDirectionView() {
    return new ListView({
      children: [
        new ListTile({ title: new Text('VerticalDirection.down') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            verticalDirection: VerticalDirection.down,
            children: this._equalContainersList(),
          }),
        }),
        new ListTile({ title: new Text('VerticalDirection.up') }),
        new Container({
          height: 240.0,
          color: Colors.grey /*[300]*/,
          child: new Column({
            verticalDirection: VerticalDirection.up,
            children: this._equalContainersList(),
          }),
        }),
      ],
    });
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 4,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Column'),
          bottom: new TabBar({
            isScrollable: true,
            tabs: [
              new Tab({ text: 'MainAxisAlignment' }),
              new Tab({ text: 'CrossAxisAlignment' }),
              new Tab({ text: 'MainAxisSize' }),
              new Tab({ text: 'VerticalDirection' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            this._mainAxisAlignmentView(),
            this._crossAxisAlignmentView(),
            this._mainAxisSizeView(),
            this._verticalDirectionView(),
          ],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
