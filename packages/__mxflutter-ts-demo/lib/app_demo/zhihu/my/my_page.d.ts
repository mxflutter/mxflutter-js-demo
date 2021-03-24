import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp, Container, Row } from '@mxflutter/mxflutter-widgets/material';
declare class MyPage extends MXJSStatefulWidget {
    constructor();
    createState(): MyPageState;
}
declare class MyPageState extends MXJSWidgetState {
    constructor();
    barSearch(context: any): Container;
    infoCardDescItem(context: any, count: any, desc: any, showSeparator: any): Row;
    infoCard(context: any): Container;
    serviceCardDescItem(context: any, iconDataValue: any, desc: any, bgColor: any): Container;
    serviceCard(context: any): Container;
    settingCard(context: any): Container;
    videoCardHeader(context: any, title: any, iconDataValue: any, colorValue: any, nextActionTitle: any): Container;
    videoCardItem(context: any, imgUrl: any): Container;
    videoCard(context: any): Container;
    ideaCardItem(context: any, title: any, subTitle: any, imgUrl: any): Container;
    ideaCard(context: any): Container;
    build(context: any): MaterialApp;
}
export { MyPage };
