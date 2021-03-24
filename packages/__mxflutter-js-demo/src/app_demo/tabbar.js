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
} from '@mxflutter/mxflutter-widgets/material';
import {
  Text,
  Icon,
  IconData,
  Center,
  Column,
} from '@mxflutter/mxflutter-widgets/widgets';
import {
  MainAxisAlignment,
} from '@mxflutter/mxflutter-widgets/rendering';

class ExampleWidget extends MXTickerMixinWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new ExampleWidgetState();
  }
}

class ExampleWidgetState extends MXTickerMixinWidgetState {
  constructor() {
    super();
  }

  initState() {
    super.initState();
    this.tabController = new TabController({
      length: 2
    });
  }

  build(context) {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAlign'),
        bottom: new TabBar({
          controller: this.tabController,
          tabs: [new Tab({
            text: 'A'
          }), new Tab({
            text: 'B'
          })],
        }),
        actions: [
          new IconButton({
            icon: new Icon(new IconData(0xe150, {
              fontFamily: 'MaterialIcons'
            })),
            tooltip: 'Edit',
            onPressed: () => {
              this.setState(() => {
                MXJSLog.log('edit button pressed');
              });

            }
          })
        ]
      }),
      body: new TabBarView({
        controller: this.tabController,
        children: [new CounterPage('A'), new CounterPage('B')],
      }),
    });
  }
}

class CounterPage extends MXKeepAliveMixinWidget {
  constructor(title) {
    super('ExampleWidget');
    this.title = title;
  }

  createState() {
    return new CounterPageState();
  }
}

class CounterPageState extends MXKeepAliveMixinWidgetState {
  constructor(title) {
    super();
    this._counter = 0;
  }

  initState() {
    super.initState();
    MXJSLog.log('CounterPageState initState begin');
    setTimeout(() => {
      MXJSLog.log('CounterPageState setTimeout');
      this.setState(() => {
        MXJSLog.log('CounterPageState setTimeout this._counter: ' + this._counter);
        this._counter++;
        MXJSLog.log('CounterPageState setTimeout this._counter: ' + this._counter);
      });
    }, 1);
    MXJSLog.log('CounterPageState initState end');
  }

  _incrementCounter() {
    this.setState(() => {
      this._counter++;
    });
  }

  build(context) {
    return new Scaffold({
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            new Text(this.widget.title),
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

export { ExampleWidget };