/* eslint-disable */

//follow.js 正式开始，😝

import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import {
  Container,
  Row,
  FlatButton,
  Text,
  Expanded,
  TextStyle,
  Colors,
  AspectRatio,
  BoxDecoration,
  DecorationImage,
  NetworkImage,
  Rect,
  Border,
  BorderRadius,
  Radius,
  Color,
  Icon,
  IconData,
  EdgeInsets,
  Column,
  FontWeight,
  PopupMenuButton,
  PopupMenuItem,
  SingleChildScrollView,
  Alignment,
  CircleAvatar,
  MaterialPageRoute,
  Navigator,
  Image,
  Center,
} from '@mxflutter/mxflutter-widgets/material';
import { GlobalConfig } from '../global_config';
import { articleList } from './article';
import { ReplyPage } from './reply_page';

class Follow extends MXJSStatefulWidget {
  constructor() {
    super('Follow');
  }

  createState() {
    return new FollowState();
  }
}

class FollowState extends MXJSWidgetState {
  constructor() {
    super();
  }
  wordsCard(context, article) {
    let markWidget;
    if (article.imgUrl == null) {
      markWidget = new Text(article.mark, {
        style: new TextStyle({
          height: 1.3,
          color: GlobalConfig.fontColor,
        }),
      });
    } else {
      markWidget = new Row({
        children: [
          new Expanded({
            flex: 2,
            child: new Container({
              child: new Text(article.mark, {
                style: new TextStyle({
                  height: 1.3,
                  color: GlobalConfig.fontColor,
                }),
              }),
            }),
          }),
          new Expanded({
            flex: 1,
            child: new AspectRatio({
              aspectRatio: 3.0 / 2.0,
              child: new Container({
                foregroundDecoration: new BoxDecoration({
                  image: new DecorationImage({
                    image: new NetworkImage(article.imgUrl),
                    centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0),
                  }),
                  borderRadius: BorderRadius.all(Radius.circular(6.0)),
                }),
              }),
            }),
          }),
        ],
      });
    }
    return new Container({
      color: new Color(0xffffffff),
      margin: EdgeInsets.only({
        top: 5.0,
        bottom: 5.0,
      }),
      child: new FlatButton({
        onPressed: function () {
          Navigator.push(
            context,
            new MaterialPageRoute({
              builder: function (context) {
                return new ReplyPage();
              },
            }),
          );
        },
        child: new Column({
          children: [
            new Container({
              child: new Row({
                children: [
                  new Container({
                    child: new CircleAvatar({
                      backgroundImage: new NetworkImage(article.headUrl),
                      radius: 11.0,
                    }),
                  }),
                  new Text(' ' + article.user + ' ' + article.action + ' . ' + article.time, {
                    style: new TextStyle({
                      color: GlobalConfig.fontColor,
                    }),
                  }),
                ],
              }),
              padding: EdgeInsets.only({ top: 10.0 }),
            }),
            new Container({
              child: new Text(article.title, {
                style: new TextStyle({
                  fontWeight: FontWeight.bold,
                  fontSize: 16.0,
                  height: 1.3,
                  color: Colors.black,
                }),
              }),
              margin: EdgeInsets.only({ top: 6.0, bottom: 2.0 }),
              alignment: Alignment.topLeft,
            }),
            new Container({
              child: markWidget,
              margin: EdgeInsets.only({ top: 6 }),
              alignment: Alignment.topLeft,
            }),
            new Container({
              child: new Row({
                children: [
                  new Expanded({
                    child: new Text(article.agreeNum.toString() + ' 赞同 · ' + article.commentNum.toString() + '评论', {
                      style: new TextStyle({
                        color: GlobalConfig.fontColor,
                      }),
                    }),
                  }),
                  new PopupMenuButton({
                    icon:
                      Image.file(require('../images/menuset.png'), { width: 20, height: 20 }),
                    itemBuilder: function (context) {
                      let list = [
                        new PopupMenuItem({
                          value: '选项一的值',
                          child: new Text('屏蔽这个问题'),
                        }),
                        new PopupMenuItem({
                          value: '选项二的值',
                          child: new Text('取消关注 learner'),
                        }),
                        new PopupMenuItem({
                          value: '选项三的值',
                          child: new Text('举报'),
                        }),
                      ];
                      return list;
                    },
                  }),
                ],
              }),
              padding: EdgeInsets.only(),
            }),
          ],
        }),
      }),
    });
  }

  billboard(context) {
    return new Container({
      margin: EdgeInsets.only({
        top: 5.0,
        bottom: 5.0,
      }),
      color: GlobalConfig.cardBackgroundColor,
      child: new FlatButton({
        onPressed: function () { },
        child: new Column({
          children: [
            new Container({
              child: new Row({
                children: [
                  new Container({
                    child: new CircleAvatar({
                      backgroundImage: new NetworkImage(
                        'https://pic1.zhimg.com/50/v2-0c9de2012cc4c5e8b01657d96da35534_s.jpg',
                      ),
                      radius: 11.0,
                    }),
                  }),
                  new Text('  对啊网', {
                    style: new TextStyle({
                      color: GlobalConfig.fontColor,
                    }),
                  }),
                ],
              }),
              padding: EdgeInsets.only({ top: 10.0 }),
            }),
            new Container({
              child: new Text('考过CPA，非名牌大学也能进名企', {
                style: new TextStyle({
                  fontWeight: FontWeight.bold,
                  fontSize: 16.0,
                  height: 1.3,
                  color: GlobalConfig.fontColor,
                }),
              }),
              margin: EdgeInsets.only({ top: 6.0, bottom: 2.0 }),
              alignment: Alignment.topLeft,
            }),
            new Container({
              child: new AspectRatio({
                aspectRatio: 3.0 / 1.0,
                child: new Container({
                  foregroundDecoration: new BoxDecoration({
                    image: new DecorationImage({
                      image: new NetworkImage('https://pic2.zhimg.com/50/v2-6416ef6d3181117a0177275286fac8f3_hd.jpg'),
                      centerSlice: Rect.fromLTRB(270.0, 180.0, 1360.0, 730.0),
                    }),
                    borderRadius: BorderRadius.all(Radius.circular(6.0)),
                  }),
                }),
              }),
              margin: EdgeInsets.only({ top: 6.0, bottom: 14.0 }),
              alignment: Alignment.topLeft,
            }),
            new Container({
              child: new Text('还在羡慕别人的好工作？免费领取价值1980元的注册会计师课程，为自己充电！', {
                style: new TextStyle({
                  height: 1.3,
                  color: GlobalConfig.fontColor,
                }),
              }),
              padding: EdgeInsets.only({ bottom: 8.0 }),
            }),
            new Container({
              child: new Row({
                children: [
                  new Container({
                    child: new Text('广告', {
                      style: new TextStyle({
                        fontSize: 10.0,
                        color: GlobalConfig.fontColor,
                      }),
                    }),
                    decoration: new BoxDecoration({
                      border: Border.all({
                        color: GlobalConfig.fontColor,
                      }),
                      borderRadius: BorderRadius.all(Radius.circular(2.0)),
                    }),
                    padding: EdgeInsets.only({ top: 2.0, bottom: 2.0, left: 3.0, right: 3.0 }),
                  }),
                  new Expanded({
                    child: new Text('  查看详情', {
                      style: new TextStyle({
                        color: GlobalConfig.fontColor,
                      }),
                    }),
                  }),
                  new Icon(new IconData(0xe14c, { fontFamily: 'MaterialIcons' }), {
                    color: GlobalConfig.fontColor,
                  }),
                ],
              }),
              padding: EdgeInsets.only({ bottom: 10.0 }),
            }),
          ],
        }),
      }),
    });
  }

  build(context) {
    const childrens = [];
    for (let i = 0; i < articleList.length; i++) {
      childrens.push(this.wordsCard(context, articleList[i]));
      if (i == 3) {
        childrens.push(this.billboard(context));
      }
    }
    let widget = new SingleChildScrollView({
      child: new Container({
        margin: EdgeInsets.only({ top: 5.0 }),
        child: new Column({
          children: childrens,
        }),
      }),
    });
    return widget;
  }
}

export { Follow };
