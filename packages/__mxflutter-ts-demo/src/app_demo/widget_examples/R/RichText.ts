/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  ListView,
  RichText,
  TextSpan,
  TextStyle,
  Colors,
  TextOverflow,
  TextAlign,
} from '@mxflutter/mxflutter-widgets/material';
import { SectionTitle } from '../../component/section_title';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleRichText();
  }
}

class PageExampleRichText extends MXJSWidgetState {
  private _defaultTextStyle: any;
  constructor() {
    super();
    this._defaultTextStyle = new TextStyle({ fontSize: 20.0 });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('RichText'),
      }),
      body: new ListView({
        children: [
          new SectionTitle('普通的RichText'),
          new RichText({
            text: new TextSpan({
              style: this._defaultTextStyle,
              children: [
                new TextSpan({ text: 'ABCDEFG', style: new TextStyle({ color: Colors.red }) }),
                new TextSpan({ text: 'HIJKLMN', style: new TextStyle({ color: Colors.blue }) }),
                new TextSpan({ text: 'OPQRST', style: new TextStyle({ color: Colors.green }) }),
                new TextSpan({ text: 'UVWXYZ', style: new TextStyle({ color: Colors.orange }) }),
                new TextSpan({ text: 'ABCDEFG', style: new TextStyle({ color: Colors.red }) }),
                new TextSpan({ text: 'HIJKLMN', style: new TextStyle({ color: Colors.blue }) }),
                new TextSpan({ text: 'OPQRST', style: new TextStyle({ color: Colors.green }) }),
                new TextSpan({ text: 'UVWXYZ', style: new TextStyle({ color: Colors.orange }) }),
              ],
            }),
          }),
          new SectionTitle('TextAlign.end'),
          new RichText({
            textAlign: TextAlign.end,
            text: new TextSpan({
              style: this._defaultTextStyle,
              children: [
                new TextSpan({ text: 'ABCDEFG', style: new TextStyle({ color: Colors.red }) }),
                new TextSpan({ text: 'HIJKLMN', style: new TextStyle({ color: Colors.blue }) }),
                new TextSpan({ text: 'OPQRST', style: new TextStyle({ color: Colors.green }) }),
                new TextSpan({ text: 'UVWXYZ', style: new TextStyle({ color: Colors.orange }) }),
                new TextSpan({ text: 'ABCDEFG', style: new TextStyle({ color: Colors.red }) }),
                new TextSpan({ text: 'HIJKLMN', style: new TextStyle({ color: Colors.blue }) }),
                new TextSpan({ text: 'OPQRST', style: new TextStyle({ color: Colors.green }) }),
                new TextSpan({ text: 'UVWXYZ', style: new TextStyle({ color: Colors.orange }) }),
              ],
            }),
          }),
          new SectionTitle('maxLines and overflow'),
          new RichText({
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            text: new TextSpan({
              style: this._defaultTextStyle,
              children: [
                new TextSpan({ text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', style: new TextStyle({ color: Colors.red }) }),
                new TextSpan({ text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', style: new TextStyle({ color: Colors.blue }) }),
                new TextSpan({ text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', style: new TextStyle({ color: Colors.green }) }),
                new TextSpan({ text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', style: new TextStyle({ color: Colors.orange }) }),
              ],
            }),
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
