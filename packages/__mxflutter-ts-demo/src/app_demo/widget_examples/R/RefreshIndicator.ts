/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  RefreshIndicator,
  ListView,
  ListTile,
  Color,
  CircleAvatar,
  Colors,
  Container,
  BoxDecoration,
  Radius,
  BorderRadius,
  Padding,
  EdgeInsets,
  TextStyle,
} from '@mxflutter/mxflutter-widgets/material';

let _problemBegin = [
  '如何看待',
  '如何评价最新的',
  '为什么',
  '吃一小勺',
  '',
  '',
  '新发现的',
  '未来20年中',
  '为什么不能',
  '用人民币1000元可以买到什么样的',
];

let _problemEnd = [
  '事件？',
  '？',
  '？',
  '会怎样？',
  '是一种怎样的体验？',
  '是什么样的？',
  '将对人类产生怎样的影响？',
  '的趋势是怎样的？',
  '呢？',
  '？',
];

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleRefreshIndicator();
  }
}

class PageExampleRefreshIndicator extends MXJSWidgetState {
  private _newsList: any;
  constructor() {
    super();
    this._newsList = this._getNews();
  }

  _randomColor(deep) {
    var r, g, b;
    if (deep)
      do {
        r = Math.ceil(Math.random() * 128);
        g = Math.ceil(Math.random() * 128);
        b = Math.ceil(Math.random() * 128);
      } while (r + g + b < 128);
    else
      do {
        r = Math.ceil(Math.random() * 128) + 128;
        g = Math.ceil(Math.random() * 128) + 128;
        b = Math.ceil(Math.random() * 128) + 128;
      } while (r + g + b > 640);
    return Color.fromRGBO(r, g, b, 1.0);
  }

  _randomNews(index) {
    let _randomNum = Math.floor(Math.random() * 10);
    let _randomName = '#' + ('0000' + Math.floor(Math.random() * 10000)).slice(-4) + '#';
    let _randomTitle = _problemBegin[_randomNum] + _randomName + _problemEnd[_randomNum];
    return new Padding({
      padding: EdgeInsets.all(16.0),
      child: new ListTile({
        leading: new CircleAvatar({
          backgroundColor: this._randomColor(true),
          foregroundColor: Colors.white,
          child: new Text(('0' + index).slice(-2)),
        }),
        title: new Text(_randomTitle, { style: new TextStyle({ fontSize: 12.0 }) }),
        trailing: new Container({
          decoration: new BoxDecoration({
            borderRadius: BorderRadius.all(Radius.circular(4.0)),
            color: this._randomColor(false),
          }),
          height: 45.0,
          width: 60.0,
        }),
      }),
    });
  }

  _getNews() {
    let list = [];
    for (let i = 0; i < 20; i++) {
      list.push(this._randomNews(i + 1));
    }
    return list;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('RefreshIndicator'),
      }),
      body: new RefreshIndicator({
        onRefresh: function async() {
          this.setState(
            function () {
              this._newsList = this._getNews();
            }.bind(this),
          );
        }.bind(this),
        child: new ListView({
          children: this._newsList,
        }),
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
