//hot.js 正式开始，😝

import {
    MXJSStatefulWidget,
    MXJSWidgetState,
} from '@mxflutter/mxflutter';

import {
    Colors,
    MaterialPageRoute,
    FlatButton,
} from '@mxflutter/mxflutter-widgets/material';
import {
    Container,
    Text,
    Icon,
    IconData,
    Row,
    Navigator,
    Expanded,
    Column,
    AspectRatio,
    SingleChildScrollView,
} from '@mxflutter/mxflutter-widgets/widgets';
import {
    TextStyle,
    FontWeight,
    Rect,
    Radius
} from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import {
    EdgeInsets,
    BorderSide,
    BoxDecoration,
    Alignment,
    BorderRadius,
    BorderDirectional,
    DecorationImage,
    NetworkImage,
} from '@mxflutter/mxflutter-widgets/painting';

import { GlobalConfig } from '../global_config';
import { questionList } from './question';
import { QuestionPage } from './question_page';

class Hot extends MXJSStatefulWidget {
    constructor() {
        super("Hot");
    }

    createState() {
        return new HotState(this);
    }
}

class HotState extends MXJSWidgetState {

    hotCard(context, question) {
        return new Container({
            decoration: new BoxDecoration({
                color: GlobalConfig.cardBackgroundColor,
                border: new BorderDirectional({
                    bottom: new BorderSide({
                        color: Colors.black12,
                        width: 1.0
                    })
                })
            }),
            child: new FlatButton({
                onPressed: function () {

                    Navigator.push(context, new MaterialPageRoute({
                        builder: function (context) {
                            return new QuestionPage;
                        }
                    }))
                },
                child: new Container({
                    padding: EdgeInsets.only({
                        top: 8.0,
                        bottom: 8.0
                    }),
                    child: new Row({
                        children: [
                            new Expanded({
                                flex: 1,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(
                                                question.order, {
                                                    style: new TextStyle({
                                                        color: question.order <= "03" ? Colors.red : Colors.yellow,
                                                        fontSize: 18.0
                                                    })
                                                }),
                                            alignment: Alignment.topLeft
                                        }),
                                        question.rise != null ?
                                        new Row({
                                            children: [
                                                new Icon(new IconData(0xe5d8, {
                                                    fontFamily: 'MaterialIcons'
                                                }), {
                                                    color: Colors.red,
                                                    size: 10.0
                                                }),
                                                new Text(question.rise, {
                                                    style: new TextStyle({
                                                        color: Colors.red,
                                                        fontSize: 10.0
                                                    })
                                                })
                                            ]
                                        }) :
                                        new Container()
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 6,
                                child: new Column({
                                    children: [
                                        new Container({
                                            child: new Text(question.title, {
                                                style: new TextStyle({
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: 16.0,
                                                    height: 1.1,
                                                    color: Colors.black
                                                })
                                            }),
                                            padding: EdgeInsets.only({
                                                bottom: 10.0,
                                                right: 4.0
                                            }),
                                            alignment: Alignment.topLeft
                                        }),
                                        question.mark != null ?
                                        new Container({
                                            child: new Text(question.mark, {
                                                style: new TextStyle({
                                                    color: GlobalConfig.fontColor
                                                })
                                            }),
                                            alignment: Alignment.topLeft,
                                            padding: EdgeInsets.only({
                                                bottom: 8.0,
                                                right: 4.0
                                            })
                                        }) :
                                        new Container(),
                                        new Container({
                                            child: new Text(question.hotNum, {
                                                style: new TextStyle({
                                                    color: GlobalConfig.fontColor
                                                })
                                            }),
                                            alignment: Alignment.topLeft
                                        })
                                    ]
                                })
                            }),
                            new Expanded({
                                flex: 3,
                                child: new AspectRatio({
                                    aspectRatio: 3.0 / 2.0,
                                    child: new Container({
                                        foregroundDecoration: new BoxDecoration({
                                            image: new DecorationImage({
                                                image: new NetworkImage(question.imgUrl),
                                                centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0)
                                            }),
                                            borderRadius: BorderRadius.all(Radius.circular(6.0))
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    }

    build(context) {
        let widget = new SingleChildScrollView({
            child: new Container({
                margin: EdgeInsets.only({
                    top: 5.0
                }),
                child: new Column({
                    children: [
                        this.hotCard(context, questionList[0]),
                        this.hotCard(context, questionList[1]),
                        this.hotCard(context, questionList[2]),
                        this.hotCard(context, questionList[3]),
                        this.hotCard(context, questionList[4])
                    ]
                })
            })
        });
        return widget;
    }
}

export { Hot };