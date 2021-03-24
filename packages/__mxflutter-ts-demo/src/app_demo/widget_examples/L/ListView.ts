/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  Container,
  Center,
  Axis,
  Colors,
  DefaultTabController,
  TabBar,
  Tab,
  TabBarView,
} from '@mxflutter/mxflutter-widgets/material';

let colors = [
  Colors.blue /*[300]*/,
  Colors.pink /*[300]*/,
  Colors.orange /*[300]*/,
  Colors.green /*[300]*/,
  Colors.purple /*[300]*/,
  Colors.grey /*[300]*/,
  Colors.yellow /*[300]*/,
  Colors.red /*[300]*/,
  Colors.cyan /*[300]*/,
];

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

  _containerBuilder(context, index) {
    return new Container({
      height: 60.0,
      width: 60.0,
      color: colors[index % 9],
      child: new Center({
        child: new Text(index.toString()),
      }),
    });
  }

  _sparatedBuilder(context, index) {
    return new Container({
      width: 2.0,
      height: 2.0,
      color: index % 2 == 0 ? Colors.black54 : Colors.black,
    });
  }

  _containerList() {
    let lists = [];
    for (let i = 0; i < 31; i++) {
      lists.push(this._theContainer(colors[i % 9], i.toString()));
    }
    return lists;
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 4,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('ListBody'),
          bottom: new TabBar({
            tabs: [
              new Tab({ text: '垂直方向' }),
              new Tab({ text: '水平方向' }),
              new Tab({ text: 'builder' }),
              new Tab({ text: 'separated' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            new ListView({
              children: this._containerList(),
            }),
            new ListView({
              scrollDirection: Axis.horizontal,
              children: this._containerList(),
            }),
            ListView.builder({
              itemCount: 31,
              itemBuilder: this._containerBuilder,
            }),
            ListView.separated({
              itemCount: 31,
              itemBuilder: this._containerBuilder,
              separatorBuilder: this._sparatedBuilder,
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
