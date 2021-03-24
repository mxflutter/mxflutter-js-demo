/* eslint-disable */
import {Flutter, StatelessWidget, StatefulWidget, State } from '@mxflutter/mxflutter';

import {
  Scaffold,
  Container,
  Color,
  AppBar,
  Text,
  ListView,
  Icon,
  IconData,
  FloatingActionButton,
  GestureDetector,
  Expanded,
  Row,
  AlignmentDirectional,
  BottomAppBar,
  IconButton,
  FloatingActionButtonLocation,
  Colors,
  CircularNotchedRectangle,
  EdgeInsetsDirectional,
  TextStyle,
  Radio,
  Semantics,
  MergeSemantics,
  RawMaterialButton,
  BoxConstraints,
  HitTestBehavior,
  CircleBorder,
  BorderSide,
  MainAxisAlignment,
  SizedBox,
  TextDecorationStyle,
  SnackBar,
} from '@mxflutter/mxflutter-widgets/material';

class JSChoiceValue {
  public title: string;
  public label: string;
  public value: any;
  constructor(title, label, value) {
    this.value = value;
    this.title = title;
    this.label = label;
  }
}

class JSNamedColor {
  public color:  Color;
  public name: string;
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }
}

// Notch
let kShowNotchTrue = new JSChoiceValue('On', 'show bottom appbar notch', true);

let kShowNotchFalse = new JSChoiceValue('Off', 'do not show bottom appbar notch', false);

// FAB Position
let kFabEndDocked = new JSChoiceValue(
  'Attached - End',
  'floating action button is docked at the end of the bottom app bar',
  FloatingActionButtonLocation.endDocked,
);

let kFabCenterDocked = new JSChoiceValue(
  'Attached - Center',
  'floating action button is docked at the center of the bottom app bar',
  FloatingActionButtonLocation.centerDocked,
);

let kFabEndFloat = new JSChoiceValue(
  'Free - End',
  'floating action button floats above the end of the bottom app bar',
  FloatingActionButtonLocation.endFloat,
);

let kFabCenterFloat = new JSChoiceValue(
  'Free - Center',
  'floating action button is floats above the center of the bottom app bar',
  FloatingActionButtonLocation.centerFloat,
);

let kFabColors = [
  new JSNamedColor(new Color(0xffffffff), 'Clear'),
  new JSNamedColor(new Color(0xffffc100), 'Orange'),
  new JSNamedColor(new Color(0xff91faff), 'Light Blue'),
  new JSNamedColor(new Color(0xff00d1ff), 'Cyan'),
  new JSNamedColor(new Color(0xff00bcff), 'Cerulean'),
  new JSNamedColor(new Color(0xff009bee), 'Blue'),
];

class _JSHeading extends StatelessWidget {
  public text: string;
  constructor({ text = null }) {
    super();
    this.text = text;
  }

  build(context) {
    return new Container({
      height: 56.0,
      padding: EdgeInsetsDirectional.only({ start: 26.0 }),
      alignment: new AlignmentDirectional(-1.0, 0.0),
      child: new Text(this.text, {
        style: new TextStyle({
          inherit: false,
          fontSize: 18.0,
          decorationColor: new Color(0xff123456),
          decorationStyle: TextDecorationStyle.wavy,
          color: new Color(0xff123456),
        }),
      }),
    });
  }
}

class _JSRadioItem extends StatelessWidget {
  public value: JSChoiceValue;
  public groupValue: any;
  public onChanged: Function;
  constructor(value: JSChoiceValue, groupValue: any, onChanged: Function) {
    super();
    this.value = value;
    this.groupValue = groupValue;
    this.onChanged = onChanged;

    console.log('[JS]-MXJSFlutter:: require..........', value, groupValue);
  }

  build(context) {
    return new Container({
      height: 56.0,
      padding: EdgeInsetsDirectional.only({ start: 36.0 }),
      alignment: new AlignmentDirectional(-1.0, 0.0),
      child: new MergeSemantics({
        child: new Row({
          children: [
            new Radio({
              value: this.value.value,
              groupValue: this.groupValue.value,
              onChanged: function () {
                this.onChanged(this.value);
              }.bind(this),
            }),
            new Expanded({
              child: new Semantics({
                container: true,
                button: true,
                label: this.value.label,
                child: new GestureDetector({
                  behavior: HitTestBehavior.opaque,
                  onTap: function () {
                    this.onChanged(this.value);
                  }.bind(this),
                  child: new Text(this.value.title),
                }),
              }),
            }),
          ],
        }),
      }),
    });
  }
}

class _JSColorsItem extends StatelessWidget {
  public colors: any;
  public selectedColor: any;
  public onChanged: any;
  constructor(colors, selectedColor, onChanged) {
    super();
    this.colors = colors;
    this.selectedColor = selectedColor;
    this.onChanged = onChanged;
  }

  build(context) {
    let rowContents = [];
    this.colors.forEach(
      function (namedColor) {
        let widget = new RawMaterialButton({
          onPressed: function () {
            this.onChanged(namedColor.color);
          }.bind(this),
          constraints: new BoxConstraints({
            minWidth: 32,
            maxWidth: 32,
            minHeight: 32,
            maxHeight: 32,
          }),
          fillColor: namedColor.color,
          shape: new CircleBorder({
            side: new BorderSide({
              color: namedColor.color == this.selectedColor ? Colors.black : new Color(0xffd5d7da),
              width: 2.0,
            }),
          }),
          child: new Semantics({
            value: namedColor.name,
            selected: namedColor.color == this.selectedColor,
          }),
        });
        rowContents.push(widget);
      }.bind(this),
    );
    return new Row({
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: rowContents,
    });
  }
}

class JSBottomAPPBarDemo extends StatefulWidget {
  constructor() {
    super('JSBottomAPPBarDemo');
  }

  createState() {
    return new JSBottomAPPBarDemoState(this);
  }
}

class JSBottomAPPBarDemoState extends State {
  public _showNotch: JSChoiceValue;
  public _fabLocation: JSChoiceValue;
  public _babColor: any;
  constructor(widget) {
    super();

    this._showNotch = kShowNotchTrue;
    this._fabLocation = kFabCenterDocked;
    this._babColor = kFabColors[1].color;
  }

  showSnackBar() {
    let text = "When the Scaffold's floating action button location changes, ";
    ('the floating action button animates to its new position.');
    ('The BottomAppBar adapts its shape appropriately.');

    // _scaffoldKey.currentState.showSnackBar(
    //     new SnackBar({content: Text(text)})
    // );
  }

  onShowNotchChanged(value) {
    console.log('[JS]-MXJSFlutter:: require..........');
    this.setState(
      function () {
        this._showNotch = value;
      }.bind(this),
    );
  }

  onFabLocationChanged(value) {
    this.setState(
      function () {
        this._fabLocation = value;
      }.bind(this),
    );
  }

  onBabColorChange(value) {
    this.setState(
      function () {
        this._babColor = value;
      }.bind(this),
    );
  }

  build(context) {
    let floatingButtonLocation = this._fabLocation.value;

    let rowContents = [
      new IconButton({
        icon: new Icon(new IconData(0xe5d2, { fontFamily: 'MaterialIcons' })),
        tooltip: 'Show bottom sheet',
        onPressed: function () {
          // Scaffold.of(context).showSnackBar(new SnackBar({ content: new Text('This is a dummy sheet action.') }));
        }.bind(this),
      }),
    ];

    if (
      floatingButtonLocation == FloatingActionButtonLocation.centerDocked ||
      floatingButtonLocation == FloatingActionButtonLocation.centerFloat
    ) {
      // rowContents.push(new Expanded({ child: new SizedBox() }));
    }

    rowContents.push(
      new IconButton({
        icon: new Icon(new IconData(0xe8b6, { fontFamily: 'MaterialIcons' })),
        tooltip: 'show search action',
        onPressed: function () {
          // Scaffold.of(context).showSnackBar(new SnackBar({ content: new Text('This is a dummy search action.') }));
        }.bind(this),
      }),
    );

    rowContents.push(
      new IconButton({
        icon: new Icon(new IconData(0xe5d3, { fontFamily: 'MaterialIcons' })),
        tooltip: 'Show menu actions',
        onPressed: function () {
          // Scaffold.of(context).showSnackBar(new SnackBar({ content: new Text('This is a dummy menu action.') }));
        }.bind(this),
      }),
    );

    let widget = new Scaffold({
      // key: _scaffoldKey,
      appBar: new AppBar({
        title: new Text('Bottom app bar'),
      }),
      body: new ListView({
        children: [
          new _JSHeading({ text: 'Notch' }),
          new _JSRadioItem(kShowNotchTrue, this._showNotch, this.onShowNotchChanged.bind(this)),
          new _JSRadioItem(kShowNotchFalse, this._showNotch, this.onShowNotchChanged.bind(this)),

          new _JSHeading({ text: 'FAB Position' }),
          new _JSRadioItem(kFabEndDocked, this._fabLocation, this.onFabLocationChanged.bind(this)),
          new _JSRadioItem(kFabCenterDocked, this._fabLocation, this.onFabLocationChanged.bind(this)),
          new _JSRadioItem(kFabEndFloat, this._fabLocation, this.onFabLocationChanged.bind(this)),
          new _JSRadioItem(kFabCenterFloat, this._fabLocation, this.onFabLocationChanged.bind(this)),

          new _JSHeading({ text: 'App bar color' }),
          new _JSColorsItem(kFabColors, this._babColor, this.onBabColorChange.bind(this)),
        ],
      }),
      bottomNavigationBar: new BottomAppBar({
        // color: Colors.red,
        child: new Row({ children: rowContents }),
        color: this._babColor,
        shape: this._showNotch.value == true ? new CircularNotchedRectangle() : null,
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(new IconData(0xe145, { fontFamily: 'MaterialIcons' })),
        onPressed: function () {},
        backgroundColor: Colors.orange,
      }),
      floatingActionButtonLocation: floatingButtonLocation,
    });
    return widget;
  }
}

export { JSBottomAPPBarDemo };
