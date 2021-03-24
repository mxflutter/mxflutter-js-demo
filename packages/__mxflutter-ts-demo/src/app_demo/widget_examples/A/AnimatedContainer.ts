/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  Center,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  TextStyle,
  ListView,
  Icons,
  AnimatedContainer,
} from '@mxflutter/mxflutter-widgets/material';
import { Duration } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAnimatedContainerState();
  }
}

class PageExampleAnimatedContainerState extends MXJSWidgetState {
  private selected: boolean;
  constructor() {
    super();
    this.selected = false;
  }

  build(context) {
    const widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedContainer'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.setState(
            function () {
              this.selected = !this.selected;
            }.bind(this),
          );
        }.bind(this),
      }),
      body: new ListView({
        children: [
          new SectionTitle('PageExampleAnimatedContainer'),
          new AnimatedContainer({
            height: this.selected ? 300.0 : 100,
            color: this.selected ? Colors.blue : Colors.orange,
            duration: new Duration({ milliseconds: 200 }),
            child: new Center({
              child: new Text('动画容器', {
                style: new TextStyle({
                  color: Colors.white,
                  fontSize: 20,
                }),
              }),
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
