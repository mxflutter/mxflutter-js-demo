/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  Colors,
  Row,
  ListView,
  MediaQuery,
  MainAxisAlignment,
  TextStyle,
} from '@mxflutter/mxflutter-widgets/material';

// MediaQuery获取屏幕尺寸 设备密度 文字缩放比例 边距等信息
class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleMediaQuery();
  }
}

class PageExampleMediaQuery extends MXJSWidgetState {
  constructor() {
    super();
  }

  _buildQueryData(name, value) {
    return new Row({
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        new Text(name, {
          style: new TextStyle({ fontSize: 20, color: Colors.black }),
        }),
        new Text(value.toString(), {
          style: new TextStyle({ fontSize: 20, color: Colors.orange }),
        }),
      ],
    });
  }

  build(context) {
    let queryData = MediaQuery.of(context);
    let widget = new Scaffold({
      appBar: new AppBar({ title: new Text('MediaQuery') }),
      body: new ListView({
        itemExtent: 60,
        children: [
          this._buildQueryData('size', queryData.size),
          this._buildQueryData('padding.top', queryData.padding.top),
          this._buildQueryData('padding.left', queryData.padding.left),
          this._buildQueryData('padding.right', queryData.padding.right),
          this._buildQueryData('padding.bottom', queryData.padding.bottom),
          this._buildQueryData('viewInsets', queryData.viewInsets),
          new Text('还有很多其他属性不便展示 可以继续探索～', {
            style: new TextStyle({ fontSize: 15, color: Colors.black }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
