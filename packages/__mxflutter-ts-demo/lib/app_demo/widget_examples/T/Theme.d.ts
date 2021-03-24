import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { ListView, ListTile, Theme } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleTheme;
}
declare class PageExampleTheme extends MXJSWidgetState {
    private _index;
    private _themeList;
    private _themeData;
    private _themeNameList;
    constructor();
    _cardView(): ListView;
    _themeChangeTile(index: any): ListTile;
    _themeChange(): ListView;
    build(context: any): Theme;
}
export { ExampleWidget };
