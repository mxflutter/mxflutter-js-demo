/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListBody,
  Container,
  Center,
  Axis,
  Colors,
  SingleChildScrollView,
  DefaultTabController,
  TabBar,
  Tab,
  TabBarView,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleListBody();
  }
}

class PageExampleListBody extends MXJSWidgetState {
  constructor() {
    super();
  }

  _theContainer(color, text) {
    return new Container({
      height: 60.0,
      width: 60.0,
      color: color,
      child: new Center({
        child: new Text(text),
      }),
    });
  }

  _containerList() {
    let colors = [
      Colors.blue /*[300]*/,
      Colors.pink /*[300]*/,
      Colors.orange /*[300]*/,
      Colors.green /*[300]*/,
      Colors.purple /*[300]*/,
      Colors.grey /*[300]*/,
    ];
    let lists = [];
    for (let i = 1; i <= 30; i++) {
      lists.push(this._theContainer(colors[i % 6], i.toString()));
    }
    return lists;
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 2,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('ListBody'),
          bottom: new TabBar({
            tabs: [new Tab({ text: 'Axis.vertical' }), new Tab({ text: 'Axis.horizontal' })],
          }),
        }),
        body: new TabBarView({
          children: [
            new SingleChildScrollView({
              scrollDirection: Axis.vertical,
              child: new ListBody({
                mainAxis: Axis.vertical,
                children: this._containerList(),
              }),
            }),
            new SingleChildScrollView({
              scrollDirection: Axis.horizontal,
              child: new ListBody({
                mainAxis: Axis.horizontal,
                children: this._containerList(),
              }),
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
