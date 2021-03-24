import { MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Colors, AppBar, FloatingActionButton, IconButton, BottomAppBar, FloatingActionButtonLocation, Radio, RawMaterialButton } from '@mxflutter/mxflutter-widgets/material';
import { Container, Text, ListView, Icon, IconData, Row, Expanded, MergeSemantics, SizedBox, GestureDetector, Semantics } from '@mxflutter/mxflutter-widgets/widgets';
import { Color, TextStyle, TextDecorationStyle } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import { BorderSide, AlignmentDirectional, CircularNotchedRectangle, EdgeInsetsDirectional, CircleBorder } from '@mxflutter/mxflutter-widgets/painting';
import { MainAxisAlignment, BoxConstraints, HitTestBehavior } from '@mxflutter/mxflutter-widgets/rendering';
class JSChoiceValue {
    constructor({ value, title, label } = {}) {
        this.value = value;
        this.title = title;
        this.label = label;
    }
}
class JSNamedColor {
    constructor({ color, name } = {}) {
        this.color = color;
        this.name = name;
    }
}
// Notch
const kShowNotchTrue = new JSChoiceValue({
    title: 'On',
    label: 'show bottom appbar notch',
    value: true
});
const kShowNotchFalse = new JSChoiceValue({
    title: 'Off',
    label: 'do not show bottom appbar notch',
    value: false
});
// FAB Position
const kFabEndDocked = new JSChoiceValue({
    title: 'Attached - End',
    label: 'floating action button is docked at the end of the bottom app bar',
    value: FloatingActionButtonLocation.endDocked
});
const kFabCenterDocked = new JSChoiceValue({
    title: 'Attached - Center',
    label: 'floating action button is docked at the center of the bottom app bar',
    value: FloatingActionButtonLocation.centerDocked
});
const kFabEndFloat = new JSChoiceValue({
    title: 'Free - End',
    label: 'floating action button floats above the end of the bottom app bar',
    value: FloatingActionButtonLocation.endFloat
});
const kFabCenterFloat = new JSChoiceValue({
    title: 'Free - Center',
    label: 'floating action button is floats above the center of the bottom app bar',
    value: FloatingActionButtonLocation.centerFloat
});
const kFabColors = [
    new JSNamedColor({
        color: new Color(0xFFFFFFFF),
        name: 'Clear'
    }),
    new JSNamedColor({
        color: new Color(0xFFFFC100),
        name: 'Orange'
    }),
    new JSNamedColor({
        color: new Color(0xFF91FAFF),
        name: 'Light Blue'
    }),
    new JSNamedColor({
        color: new Color(0xFF00D1FF),
        name: 'Cyan'
    }),
    new JSNamedColor({
        color: new Color(0xFF00BCFF),
        name: 'Cerulean'
    }),
    new JSNamedColor({
        color: new Color(0xFF009BEE),
        name: 'Blue'
    })
];
class _JSHeading extends MXJSStatelessWidget {
    constructor({ text } = {}) {
        super();
        this.text = text;
    }
    build(context) {
        return new Container({
            height: 56.0,
            padding: EdgeInsetsDirectional.only({
                start: 26.0
            }),
            alignment: new AlignmentDirectional(-1.0, 0.0),
            child: new Text(this.text, {
                style: new TextStyle({
                    inherit: false,
                    fontSize: 18.0,
                    decorationColor: new Color(0xFF123456),
                    decorationStyle: TextDecorationStyle.wavy,
                    color: new Color(0xFF123456)
                })
            })
        });
    }
}
class _JSRadioItem extends MXJSStatelessWidget {
    constructor({ value, groupValue, onChanged } = {}) {
        super();
        this.value = value;
        this.groupValue = groupValue;
        this.onChanged = onChanged;
        console.log("[JS]-MXJSFlutter:: require..........", value, groupValue);
    }
    build(context) {
        return new Container({
            height: 56.0,
            padding: EdgeInsetsDirectional.only({
                start: 36.0
            }),
            alignment: new AlignmentDirectional(-1.0, 0.0),
            child: new MergeSemantics({
                child: new Row({
                    children: [
                        new Radio({
                            value: this.value.value,
                            groupValue: this.groupValue.value,
                            onChanged: function () {
                                this.onChanged(this.value);
                            }.bind(this)
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
                                    child: new Text(this.value.title)
                                })
                            })
                        })
                    ]
                })
            })
        });
    }
}
class _JSColorsItem extends MXJSStatelessWidget {
    constructor({ colors, selectedColor, onChanged } = {}) {
        super();
        this.colors = colors;
        this.selectedColor = selectedColor;
        this.onChanged = onChanged;
    }
    build(context) {
        let rowContents = [];
        this.colors.forEach(function (namedColor) {
            let widget = new RawMaterialButton({
                onPressed: function () {
                    this.onChanged(namedColor.color);
                }.bind(this),
                constraints: new BoxConstraints({
                    minWidth: 32,
                    maxWidth: 32,
                    minHeight: 32,
                    maxHeight: 32
                }),
                fillColor: namedColor.color,
                shape: new CircleBorder({
                    side: new BorderSide({
                        color: namedColor.color == this.selectedColor ? Colors.black : new Color(0xFFD5D7DA),
                        width: 2.0
                    })
                }),
                child: new Semantics({
                    value: namedColor.name,
                    selected: namedColor.color == this.selectedColor
                })
            });
            rowContents.push(widget);
        }.bind(this));
        return new Row({
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: rowContents
        });
    }
}
class JSBottomAPPBarDemo extends MXJSStatefulWidget {
    constructor() {
        super('JSBottomAPPBarDemo');
    }
    createState() {
        return new JSBottomAPPBarDemoState(this);
    }
}
class JSBottomAPPBarDemoState extends MXJSWidgetState {
    // _scaffoldKey;//new GlobalKey();
    constructor(widget) {
        super(widget);
        this._showNotch = kShowNotchTrue;
        this._fabLocation = kFabCenterDocked;
        this._babColor = kFabColors[1].color;
    }
    showSnackBar() {
        text =
            "When the Scaffold's floating action button location changes, ";
        'the floating action button animates to its new position.';
        'The BottomAppBar adapts its shape appropriately.';
        _scaffoldKey.currentState.showSnackBar(new SnackBar({
            content: Text(text)
        }));
    }
    onShowNotchChanged(value) {
        console.log("[JS]-MXJSFlutter:: require..........");
        this.setState(function () {
            this._showNotch = value;
        }.bind(this));
    }
    onFabLocationChanged(value) {
        this.setState(function () {
            this._fabLocation = value;
        }.bind(this));
    }
    onBabColorChange(value) {
        this.setState(function () {
            this._babColor = value;
        }.bind(this));
    }
    build(context) {
        let floatingButtonLocation = this._fabLocation.value;
        let rowContents = [
            new IconButton({
                icon: new Icon(new IconData(0xe5d2, {
                    fontFamily: 'MaterialIcons',
                    semanticLabel: 'Show bottom sheet'
                })),
                tooltip: 'Show bottom sheet',
                onPressed: function () {
                    Scaffold.of(context).showSnackBar(new SnackBar({
                        content: new Text('This is a dummy sheet action.')
                    }));
                }.bind(this)
            })
        ];
        if (floatingButtonLocation == FloatingActionButtonLocation.centerDocked || floatingButtonLocation == FloatingActionButtonLocation.centerFloat) {
            rowContents.push(new Expanded({
                child: new SizedBox()
            }));
        }
        rowContents.push(new IconButton({
            icon: new Icon(new IconData(0xe8b6, {
                fontFamily: 'MaterialIcons',
                semanticLabel: 'show search action'
            })),
            tooltip: 'show search action',
            onPressed: function () {
                Scaffold.of(context).showSnackBar(new SnackBar({
                    content: new Text('This is a dummy search action.')
                }));
            }.bind(this)
        }));
        rowContents.push(new IconButton({
            icon: new Icon(new IconData(0xe5d3, {
                fontFamily: 'MaterialIcons',
                semanticLabel: 'Show menu actions'
            })),
            tooltip: 'Show menu actions',
            onPressed: function () {
                Scaffold.of(context).showSnackBar(new SnackBar({
                    content: new Text('This is a dummy menu action.')
                }));
            }.bind(this)
        }));
        let widget = new Scaffold({
            // key: _scaffoldKey,
            appBar: new AppBar({
                title: new Text('Bottom app bar')
            }),
            body: new ListView({
                children: [
                    new _JSHeading({
                        text: "Notch"
                    }),
                    new _JSRadioItem({
                        value: kShowNotchTrue,
                        groupValue: this._showNotch,
                        onChanged: this.onShowNotchChanged.bind(this)
                    }),
                    new _JSRadioItem({
                        value: kShowNotchFalse,
                        groupValue: this._showNotch,
                        onChanged: this.onShowNotchChanged.bind(this)
                    }),
                    new _JSHeading({
                        text: "FAB Position"
                    }),
                    new _JSRadioItem({
                        value: kFabEndDocked,
                        groupValue: this._fabLocation,
                        onChanged: this.onFabLocationChanged.bind(this)
                    }),
                    new _JSRadioItem({
                        value: kFabCenterDocked,
                        groupValue: this._fabLocation,
                        onChanged: this.onFabLocationChanged.bind(this)
                    }),
                    new _JSRadioItem({
                        value: kFabEndFloat,
                        groupValue: this._fabLocation,
                        onChanged: this.onFabLocationChanged.bind(this)
                    }),
                    new _JSRadioItem({
                        value: kFabCenterFloat,
                        groupValue: this._fabLocation,
                        onChanged: this.onFabLocationChanged.bind(this)
                    }),
                    new _JSHeading({
                        text: "App bar color"
                    }),
                    new _JSColorsItem({
                        colors: kFabColors,
                        selectedColor: this._babColor,
                        onChanged: this.onBabColorChange.bind(this)
                    })
                ]
            }),
            bottomNavigationBar: new BottomAppBar({
                // color: Colors.red,
                child: new Row({
                    children: rowContents
                }),
                color: this._babColor,
                shape: this._showNotch.value == true ? new CircularNotchedRectangle() : null
            }),
            floatingActionButton: new FloatingActionButton({
                child: new Icon(new IconData(0xe145, {
                    fontFamily: 'MaterialIcons',
                    semanticLabel: 'Action'
                })),
                onPressed: function () {
                },
                backgroundColor: Colors.orange
            }),
            floatingActionButtonLocation: floatingButtonLocation
        });
        return widget;
    }
}
export { JSBottomAPPBarDemo };
