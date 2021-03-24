import {
  MXJSStatelessWidget,
} from '@mxflutter/mxflutter';

import {
  Scaffold,
  AppBar,
  ListTile,
  MaterialPageRoute,
  Scrollbar,
} from '@mxflutter/mxflutter-widgets/material';

import {
  Text,
  ListView,
  Navigator,
} from '@mxflutter/mxflutter-widgets/widgets';

import { SectionTitle } from '../component/section_title';
import { ColumnProfileDemo1 } from './column_profile';
import { ColumnProfileDemo2 } from './column_submxwidget_profile';
import { ListViewProfileDemo1 } from './listview_profile';

class ProfileExamplesPage extends MXJSStatelessWidget {
  constructor() {
    super("ProfileExamplesPage");
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Performance Profiling'),
      }),
      body: new Scrollbar({
        child: new ListView({
          children: [
            new SectionTitle("大页面 column模拟"),

            new ListTile({
              title: new Text("Column"),
              subtitle: new Text('200条Feeds同时渲染，模拟大页面刷新'),
              onTap: function () {Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new ColumnProfileDemo1;
                  }
                }));
              }
            }),
            new SectionTitle("MXWidget子元素 column模拟"),

            new ListTile({
              title: new Text("Column"),
              subtitle: new Text('100条FeedsMXWidget子元素渲染'),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new ColumnProfileDemo2;
                  }
                }));
              }
            }),
            new SectionTitle("ListView"),

            new ListTile({
              title: new Text("ListView"),
              subtitle: new Text('1000条新闻Feeds按需渲染，测试Listview启动和滑动性能'),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function (context) {
                    return new ListViewProfileDemo1;
                  }
                }));
              }
            }),



          ],
        })
      })
    });
    return widget;
  }
}

export { ProfileExamplesPage };