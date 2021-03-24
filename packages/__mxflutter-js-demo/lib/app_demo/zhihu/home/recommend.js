//recommend.js 正式开始，😝
import { MXJSStatefulWidget, MXJSWidgetState, } from '@mxflutter/mxflutter';
import { Colors, MaterialPageRoute, FlatButton, } from '@mxflutter/mxflutter-widgets/material';
import { Container, Text, Icon, IconData, Row, Navigator, Expanded, Column, AspectRatio, SingleChildScrollView, } from '@mxflutter/mxflutter-widgets/widgets';
import { TextStyle, FontWeight, Rect, Radius } from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import { EdgeInsets, BoxDecoration, Alignment, BorderRadius, DecorationImage, NetworkImage, } from '@mxflutter/mxflutter-widgets/painting';
import { GlobalConfig } from '../global_config';
import { articleList } from './article';
import { ReplyPage } from './reply_page';
class Recommend extends MXJSStatefulWidget {
    constructor() {
        super("Recommend");
    }
    createState() {
        return new RecommendState(this);
    }
}
class RecommendState extends MXJSWidgetState {
    commonCard(context, article) {
        let markWidget;
        if (article.imgUrl == null) {
            markWidget = new Text(article.user + " :  " + article.mark, {
                style: new TextStyle({
                    height: 1.3,
                    color: GlobalConfig.fontColor
                })
            });
        }
        else {
            markWidget = new Row({
                children: [
                    new Expanded({
                        flex: 2,
                        child: new Container({
                            child: new Text(article.user + " :  " + article.mark, {
                                style: new TextStyle({
                                    height: 1.3,
                                    color: GlobalConfig.fontColor
                                })
                            })
                        })
                    }),
                    new Expanded({
                        flex: 1,
                        child: new AspectRatio({
                            aspectRatio: 3.0 / 2.0,
                            child: new Container({
                                foregroundDecoration: new BoxDecoration({
                                    image: new DecorationImage({
                                        image: new NetworkImage(article.imgUrl),
                                        centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0)
                                    }),
                                    borderRadius: BorderRadius.all(Radius.circular(6.0))
                                })
                            })
                        })
                    })
                ]
            });
        }
        return new Container({
            color: GlobalConfig.cardBackgroundColor,
            margin: EdgeInsets.only({
                top: 5.0,
                bottom: 5.0
            }),
            child: new FlatButton({
                onPressed: function () {
                    Navigator.push(context, new MaterialPageRoute({
                        builder: function (context) {
                            return new ReplyPage;
                        }
                    }));
                },
                child: new Column({
                    children: [
                        new Container({
                            child: new Text(article.title, {
                                style: new TextStyle({
                                    fontWeight: FontWeight.bold,
                                    fontSize: 16.0,
                                    height: 1.3,
                                    color: Colors.black
                                })
                            }),
                            margin: EdgeInsets.only({
                                top: 6.0,
                                bottom: 2.0
                            }),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: markWidget,
                            margin: EdgeInsets.only({
                                top: 6.0,
                                bottom: 14.0
                            }),
                            alignment: Alignment.topLeft
                        }),
                        new Container({
                            child: new Row({
                                children: [
                                    new Expanded({
                                        child: new Text(article.agreeNum.toString() + " 赞同 · " + article.commentNum.toString() + "评论", {
                                            style: new TextStyle({
                                                color: GlobalConfig.fontColor
                                            })
                                        })
                                    }),
                                    new Icon(new IconData(0xe260, {
                                        fontFamily: 'MaterialIcons'
                                    }), {
                                        color: GlobalConfig.fontColor
                                    })
                                ]
                            }),
                            padding: EdgeInsets.only({
                                bottom: 10.0
                            })
                        })
                    ]
                })
            })
        });
    }
    build(context) {
        let widget = new SingleChildScrollView({
            child: new Container({
                margin: EdgeInsets.only({
                    top: 5.0
                }),
                child: new Column({
                    children: [
                        this.commonCard(context, articleList[0]),
                        this.commonCard(context, articleList[1])
                    ]
                })
            })
        });
        return widget;
    }
}
export { Recommend };
