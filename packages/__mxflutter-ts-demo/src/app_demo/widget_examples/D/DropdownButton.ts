/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Scaffold,
  AppBar,
  Text,
  TextStyle,
  Container,
  Alignment,
  Colors,
  ListView,
  ListTile,
  DropdownMenuItem,
  DropdownButton,
  Icon,
  Icons,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }
  createState() {
    return new PageExampleDropdownButton();
  }
}

class PageExampleDropdownButton extends MXJSWidgetState {
  private _dropValue: string;
  private _dropSelectValue: string;
  private _dropHintValue: string;
  private _dropIconValue: string;
  constructor() {
    super();
    this._dropValue = 'Math';
    this._dropSelectValue = 'Math';
    this._dropHintValue = null;
    this._dropIconValue = 'Math';
  }

  _buildItem() {
    return [
      new DropdownMenuItem({ child: new Text('Math'), value: 'Math' }),
      new DropdownMenuItem({ child: new Text('English'), value: 'English' }),
      new DropdownMenuItem({ child: new Text('Chinese'), value: 'Chinese' }),
    ];
  }

  _buildCommonButton() {
    return new Container({
      alignment: Alignment.center,
      child: new DropdownButton({
        value: this._dropValue,
        items: this._buildItem(),
        onChanged: function (value) {
          this.setState(
            function () {
              this._dropValue = value;
              console.log(value);
            }.bind(this),
          );
        }.bind(this),
      }),
    });
  }

  _buildSelectItemButton() {
    return new Container({
      alignment: Alignment.center,
      child: new DropdownButton({
        value: this._dropSelectValue,
        items: this._buildItem(),
        selectedItemBuilder: (context) => {
          return [
            new Text('Math', { style: new TextStyle({ color: Colors.red }) }),
            new Text('English', { style: new TextStyle({ color: Colors.red }) }),
            new Text('Chinese', { style: new TextStyle({ color: Colors.red }) }),
          ];
        },
        onChanged: function (value) {
          this.setState(
            function () {
              this._dropSelectValue = value;
              console.log(value);
            }.bind(this),
          );
        }.bind(this),
      }),
    });
  }

  _buildHintButton() {
    return new Container({
      alignment: Alignment.center,
      child: new DropdownButton({
        hint: new Text('请选择'),
        value: this._dropHintValue,
        items: this._buildItem(),
        onChanged: function (value) {
          this.setState(
            function () {
              this._dropHintValue = value;
              console.log(value);
            }.bind(this),
          );
        }.bind(this),
      }),
    });
  }
  _buildIconButton() {
    return new Container({
      alignment: Alignment.center,
      child: new DropdownButton({
        icon: new Icon(Icons.add),
        iconSize: 24,
        iconDisabledColor: Colors.grey,
        iconEnabledColor: Colors.red,
        value: this._dropIconValue,
        items: this._buildItem(),
        onChanged: function (value) {
          this.setState(
            function () {
              this._dropIconValue = value;
              console.log(value);
            }.bind(this),
          );
        }.bind(this),
      }),
    });
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('DropdownButton'),
      }),
      body: new ListView({
        children: [
          new ListTile({ title: new Text('DropDownButton') }),
          this._buildCommonButton(),
          new ListTile({ title: new Text('DropdownButton.selectedItemBuilder(MXFlutter中暂不支持)') }),
          this._buildSelectItemButton(),
          new ListTile({ title: new Text('DropdownButton.hint') }),
          this._buildHintButton(),
          new ListTile({ title: new Text('DropdownButton.icon') }),
          this._buildIconButton(),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
