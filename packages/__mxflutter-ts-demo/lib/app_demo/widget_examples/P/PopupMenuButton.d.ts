import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, ListTile } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExamplePopupMenuButton;
}
declare class PageExamplePopupMenuButton extends MXJSWidgetState {
    private _items;
    private _callbackText;
    private _currentIndex;
    constructor();
    _normalPopupMenuButton(): ListTile;
    _callbackPopupMenuButton(): ListTile;
    _customIconPopupMenuButton(): ListTile;
    _customColorPopupMenuButton(): ListTile;
    _checkablePopupMenuButton(): ListTile;
    build(context: any): Scaffold;
}
export { ExampleWidget };
