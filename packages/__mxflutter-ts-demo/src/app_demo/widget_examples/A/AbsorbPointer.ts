/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  ListView,
  ListTile,
  Scaffold,
  AppBar,
  Text,
  AbsorbPointer,
  RaisedButton,
  FlatButton,
  OutlineButton,
  ButtonBar,
} from '@mxflutter/mxflutter-widgets/material';
import { CupertinoSwitch } from '@mxflutter/mxflutter-widgets/cupertino';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleAbsorbPointer();
  }
}

class PageExampleAbsorbPointer extends MXJSWidgetState {
  private _absorbing: boolean;
  private _flatButtonText: string;
  private _rasiedButtonText: string;
  private _outlineButtonText: string;
  constructor() {
    super();
    this._absorbing = true;
    this._flatButtonText = 'FlatButton';
    this._rasiedButtonText = 'RasiedButton';
    this._outlineButtonText = 'OutlineButton';
  }

  build(context) {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('AbsorbPointer'),
      }),
      body: new ListView({
        children: [
          new ListTile({
            title: new Text('禁止点击：' + (this._absorbing ? '是' : '否')),
            trailing: new CupertinoSwitch({
              value: this._absorbing,
              onChanged: function (value) {
                this.setState(
                  function () {
                    this._absorbing = value;
                  }.bind(this),
                );
              }.bind(this),
            }),
          }),
          new AbsorbPointer({
            absorbing: this._absorbing,
            child: new ButtonBar({
              children: [
                new FlatButton({
                  onPressed: function () {
                    this.setState(
                      function () {
                        this._flatButtonText = 'onPressed';
                      }.bind(this),
                    );
                  }.bind(this),
                  child: new Text(this._flatButtonText),
                }),
                new RaisedButton({
                  onPressed: function () {
                    this.setState(
                      function () {
                        this._rasiedButtonText = 'onPressed';
                      }.bind(this),
                    );
                  }.bind(this),
                  child: new Text(this._rasiedButtonText),
                }),
                new OutlineButton({
                  onPressed: function () {
                    this.setState(
                      function () {
                        this._outlineButtonText = 'onPressed';
                      }.bind(this),
                    );
                  }.bind(this),
                  child: new Text(this._outlineButtonText),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
}

export { ExampleWidget };
