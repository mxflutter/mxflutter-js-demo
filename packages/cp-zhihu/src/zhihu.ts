/* eslint-disable */
import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp } from '@mxflutter/mxflutter-widgets/material';
import { Index } from './index';
// import { SearchPage } from './home/search_page';

class JSZhiHuPage extends MXJSStatefulWidget {
  constructor() {
    super('JSZhiHuPage');
  }

  createState() {
    return new JSZhiHuPageState();
  }
}

class JSZhiHuPageState extends MXJSWidgetState {
  constructor() {
    super();
  }
  build(context) {
    let widget = new MaterialApp({
      title: '知乎-高仿版',
      home: new Index(),
    });
    return widget;
  }
}

export { JSZhiHuPage };
