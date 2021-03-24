/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  ListView,
  ListTile,
  Text,
  EdgeInsets,
  Border,
  Colors,
  EdgeInsetsDirectional,
} from '@mxflutter/mxflutter-widgets/material';
import { CupertinoPageScaffold, CupertinoNavigationBar, CupertinoButton } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleCupertinoNavigationBar();
  }
}

class PageExampleCupertinoNavigationBar extends MXJSWidgetState {
  constructor() {
    super();
  }

  _normalCupertinoNavigationBar() {
    return new CupertinoNavigationBar({
      middle: new Text('CupertinoNavigationBar'),
      transitionBetweenRoutes: false,
    });
  }

  _changeLeadingCupertinoNavigationBar() {
    return new CupertinoNavigationBar({
      previousPageTitle: '返回',
      middle: new Text('CupertinoNavigationBar'),
      transitionBetweenRoutes: false,
    });
  }

  _trailingCupertinoNavigationBar() {
    return new CupertinoNavigationBar({
      middle: new Text('CupertinoNavigationBar'),
      trailing: new CupertinoButton({
        padding: EdgeInsets.all(0.0),
        child: new Text('设置'),
        onPressed: function () {},
      }),
      transitionBetweenRoutes: false,
    });
  }

  _borderCupertinoNavigationBar() {
    return new CupertinoNavigationBar({
      middle: new Text('CupertinoNavigationBar'),
      border: Border.all({
        color: Colors.orange /*[600]*/,
        width: 2.0,
      }),
      transitionBetweenRoutes: false,
    });
  }

  _backgroundCupertinoNavigationBar() {
    return new CupertinoNavigationBar({
      middle: new Text('CupertinoNavigationBar'),
      backgroundColor: Colors.yellow /*[200]*/,
      transitionBetweenRoutes: false,
    });
  }

  _paddingCupertinoNavigationBar() {
    return new CupertinoNavigationBar({
      middle: new Text('CupertinoNavigationBar'),
      padding: EdgeInsetsDirectional.only({ bottom: 20.0 }),
      transitionBetweenRoutes: false,
    });
  }

  _actionsColorCupertinoNavigationBar() {
    return new CupertinoNavigationBar({
      previousPageTitle: '返回',
      middle: new Text('CupertinoNavigationBar'),
      trailing: new CupertinoButton({
        padding: EdgeInsets.all(0.0),
        child: new Text('设置'),
        onPressed: function () {},
      }),
      actionsForegroundColor: Colors.blue,
      transitionBetweenRoutes: false,
    });
  }

  build(context) {
    let widget = new CupertinoPageScaffold({
      navigationBar: new CupertinoNavigationBar({
        middle: new Text('CupertinoNavigationBar'),
      }),
      child: new Scaffold({
        backgroundColor: Colors.green /*[100]*/,
        body: new ListView({
          children: [
            new ListTile({
              title: new Text('最简单的CupertinoNavigationBar'),
            }),
            this._normalCupertinoNavigationBar(),
            new ListTile({
              title: new Text('leading带有说明的CupertinoNavigationBar'),
            }),
            this._changeLeadingCupertinoNavigationBar(),
            new ListTile({
              title: new Text('带有右侧按钮的CupertinoNavigationBar'),
            }),
            this._trailingCupertinoNavigationBar(),
            new ListTile({
              title: new Text('带有边框的CupertinoNavigationBar'),
            }),
            this._borderCupertinoNavigationBar(),
            new ListTile({
              title: new Text('带有背景色的CupertinoNavigationBar'),
            }),
            this._backgroundCupertinoNavigationBar(),
            new ListTile({
              title: new Text('带有padding的CupertinoNavigationBar'),
            }),
            this._paddingCupertinoNavigationBar(),
            new ListTile({
              title: new Text('修改按钮颜色的的CupertinoNavigationBar'),
            }),
            this._actionsColorCupertinoNavigationBar(),
          ],
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
