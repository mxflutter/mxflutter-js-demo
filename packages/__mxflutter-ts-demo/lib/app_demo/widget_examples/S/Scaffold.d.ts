import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { BottomNavigationBar, FlatButton, Column, Text, Scaffold, Drawer } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleSingleChildScrollView;
}
declare class PageExampleSingleChildScrollView extends MXJSWidgetState {
    private _showBottomBar;
    private _showButtonsBar;
    private _showDrawer;
    private _showEndDrawer;
    private _fablocation;
    private _bgColor;
    private _bottomBarPosition;
    constructor();
    _bottomBar(): BottomNavigationBar;
    _buttonsBar(): (Text | FlatButton)[];
    _drawer(context: any): Drawer;
    _endDrawer(context: any): Drawer;
    _changeFabLocation(): Column;
    _changeBgColor(): Column;
    _changeSetting(): Column;
    build(context: any): Scaffold;
}
export { ExampleWidget };
