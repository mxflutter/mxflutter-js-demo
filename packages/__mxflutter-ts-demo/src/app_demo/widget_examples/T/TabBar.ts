/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  DefaultTabController,
  Scaffold,
  AppBar,
  Text,
  TabBar,
  Tab,
  TabBarView,
  Container,
  Center,
  EdgeInsets,
  Colors,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTabbar();
  }
}

class PageExampleTabbar extends MXJSWidgetState {
  constructor() {
    super();
  }

  build(context) {
    let widget = new DefaultTabController({
      length: 5,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Tabbar'),
          bottom: new TabBar({
            isScrollable: true,
            labelColor: Colors.purple,
            unselectedLabelColor: Colors.grey,
            labelPadding: EdgeInsets.symmetric({ horizontal: 48.0 }),
            tabs: [
              new Tab({ text: 'Tab 1' }),
              new Tab({ text: 'Tab 2' }),
              new Tab({ text: 'Tab 3' }),
              new Tab({ text: 'Tab 4' }),
              new Tab({ text: 'Tab 5' }),
            ],
          }),
        }),
        body: new TabBarView({
          children: [
            new Container({
              child: new Center({
                child: new Text('Tab 1'),
              }),
            }),
            new Container({
              child: new Center({
                child: new Text('Tab 2'),
              }),
            }),
            new Container({
              child: new Center({
                child: new Text('Tab 3'),
              }),
            }),
            new Container({
              child: new Center({
                child: new Text('Tab 4'),
              }),
            }),
            new Container({
              child: new Center({
                child: new Text('Tab 5'),
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
