import {
  MXJSLog,
  MXTickerMixinWidget,
  MXTickerMixinWidgetState,
  MXKeepAliveMixinWidget,
  MXKeepAliveMixinWidgetState,
} from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  FloatingActionButton,
  IconButton,
  Icons,
  TabBar,
  TabBarView,
  Tab,
  TabController,
  Text,
  Icon,
  IconData,
  Center,
  Column,
  MainAxisAlignment,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleSubWidget extends MXTickerMixinWidget {
  constructor() {
    super('ExampleSubWidget');
  }

  createState() {
    return new ExampleSubWidgetState();
  }
}

class ExampleSubWidgetState extends MXTickerMixinWidgetState {
  constructor() {
    super();
    this._counter = 0;
  }

  initState() {
    super.initState();
  }

  build(context) {
    let size = context.size;
    MXJSLog.log('context.size' + size.width + '  ' + size.height);
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAlign'),
        actions: [
          new IconButton({
            icon: new Icon(
              new IconData(0xe150, {
                fontFamily: 'MaterialIcons',
              }),
            ),
            tooltip: 'Edit',
            onPressed: () => {
              this.setState(() => {
                MXJSLog.log('edit button pressed');
                this._counter++;
              });
            },
          }),
        ],
      }),
      body: new CounterPage('A' + this._counter + ' ' + 'context.size' + size.width + '  ' + size.height),
    });
  }
}

class CounterPage extends MXKeepAliveMixinWidget {
  constructor(title) {
    super('CounterPage');
    this.title = title;
  }

  createState() {
    return new CounterPageState();
  }

  // 与flutter同步时，才能获取正确的context.size
  isBuildSyncWithFlutter() {
    return true;
  }
}

class CounterPageState extends MXKeepAliveMixinWidgetState {
  constructor(title) {
    super();
    this._counter = 0;
  }

  initState() {
    super.initState();
  }

  _incrementCounter() {
    this.setState(() => {
      this._counter++;
    });
  }

  build(context) {
    let size = context.size;
    MXJSLog.log('context.size' + size.width + '  ' + size.height);
    return new Scaffold({
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            new Text(this.widget.title),
            new Text('context.size' + size.width + '  ' + size.height),
            new Text('You have pushed the button this many times:'),
            new Text('' + this._counter),
          ],
        }),
      }),
      floatingActionButton: new FloatingActionButton({
        onPressed: this._incrementCounter.bind(this),
        tooltip: 'Increment',
        child: new Icon(Icons.add),
      }), // This trailing comma makes auto-formatting nicer for build methods.
    });
  }
}

export { ExampleSubWidget };
