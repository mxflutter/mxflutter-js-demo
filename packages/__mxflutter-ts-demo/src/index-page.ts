//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

/* eslint-disable */
import { Flutter, StatelessWidget, StatefulWidget, State, MXJSLog } from '@mxflutter/mxflutter';

import {
  Scaffold,
  Container,
  Color,
  Colors,
  AppBar,
  Text,
  ListView,
  ListTile,
  Icon,
  IconData,
  EdgeInsets,
  TextAlign,
  TextStyle,
  Row,
  Padding,
  Theme,
  Navigator,
  MaterialPageRoute,
} from '@mxflutter/mxflutter-widgets/material';

import { MXJSWidgetHomePage } from './home-page';
import { ExamplesPage } from './app_demo/examples/index';
import { WidgetExamplesPage } from './app_demo/widget_examples/index';
import { JSMaterialPage } from './app_demo/material';
import { JSZhiHuPage } from './app_demo/zhihu/zhihu';

class MXIndexPage extends StatelessWidget {
  constructor() {
    super('MXJSWidgetHomePage');
  }
  build(context) {
    let widgetName = this.flutterPushParams ? this.flutterPushParams['widgetName'] : null;
    let w;
    if (widgetName == 'WidgetExamplesPage') {
      w = new WidgetExamplesPage();
    } else if (widgetName == 'zhihu') {
      w = new JSZhiHuPage();
    } else {
      w = new MXJSWidgetHomePage();
    }
    return w;
  }
}

export { MXIndexPage };
