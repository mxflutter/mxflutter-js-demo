/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListTile,
  ListView,
  Container,
  Color,
  Column,
  PageView,
  Center,
  BoxDecoration,
  Border,
  Colors,
  ClampingScrollPhysics,
  Axis,
  PageController,
  Stack,
  Positioned,
} from '@mxflutter/mxflutter-widgets/material';

function _randomColor() {
  var r, g, b;
  do {
    r = Math.ceil(Math.random() * 128) + 128;
    g = Math.ceil(Math.random() * 128) + 128;
    b = Math.ceil(Math.random() * 128) + 128;
  } while (r + g + b > 640);
  return Color.fromRGBO(r, g, b, 1.0);
}

function _pages() {
  let list = [];
  for (let i = 1; i <= 5; i++) {
    list.push(
      new Container({
        child: new Center({ child: new Text('Page' + i) }),
        color: _randomColor(),
      }),
    );
  }
  return list;
}

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExamplePageView();
  }
}

class PageViewWithHint extends MXJSStatefulWidget {
  constructor() {
    super('PageViewWithHint');
  }
  createState() {
    return new PageViewWithHintState();
  }
}

class PageViewWithHintState extends MXJSWidgetState {
  private list: any;
  private _pageView: any;
  private _currentIndex: number;
  constructor() {
    super();
    this.list = [];
    this._currentIndex = 0;
    this._pageView = new PageView({
      children: _pages(),
      onPageChanged: function (index) {
        this.setState(
          function () {
            this._currentIndex = index;
          }.bind(this),
        );
      }.bind(this),
    });
  }

  build() {
    this.list = [];
    this.list.push(this._pageView);
    this.list.push(
      new Positioned({
        left: 160.0,
        right: 160.0,
        top: 240.0,
        child: new Container({
          child: new Center({
            child: new Text(this._currentIndex + 1 + ' / 5'),
          }),
        }),
      }),
    );
    let window = new Container({
      width: 360.0,
      height: 270.0,
      child: new Stack({ children: this.list }),
      decoration: new BoxDecoration({
        border: Border.all({ color: Colors.black }),
      }),
    });
    return new Column({
      children: [new ListTile({ title: new Text('带有指示器的PageView') }), window, new ListTile()],
    });
  }
}

class PageExamplePageView extends MXJSWidgetState {
  constructor() {
    super();
  }

  _normalPageView() {
    return new Column({
      children: [
        new ListTile({ title: new Text('普通的PageView') }),
        new Container({
          width: 360.0,
          height: 270.0,
          child: new PageView({ children: _pages() }),
          decoration: new BoxDecoration({
            border: Border.all({ color: Colors.black }),
          }),
        }),
      ],
    });
  }

  _verticalPageView() {
    return new Column({
      children: [
        new ListTile({ title: new Text('改变了方向和物理效果的PageView') }),
        new Container({
          width: 360.0,
          height: 270.0,
          child: new PageView({
            scrollDirection: Axis.vertical,
            physics: new ClampingScrollPhysics(),
            children: _pages(),
          }),
          decoration: new BoxDecoration({
            border: Border.all({ color: Colors.black }),
          }),
        }),
      ],
    });
  }

  _fractionPageView() {
    return new Column({
      children: [
        new ListTile({ title: new Text('改变了默认页和缩放的PageView') }),
        new Container({
          width: 360.0,
          height: 270.0,
          child: new PageView({
            children: _pages(),
            controller: new PageController({
              viewportFraction: 0.9,
              initialPage: 2,
            }),
          }),
          decoration: new BoxDecoration({
            border: Border.all({ color: Colors.black }),
          }),
        }),
      ],
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('PageView') }),
      body: new ListView({
        children: [this._normalPageView(), this._verticalPageView(), this._fractionPageView(), new PageViewWithHint()],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
