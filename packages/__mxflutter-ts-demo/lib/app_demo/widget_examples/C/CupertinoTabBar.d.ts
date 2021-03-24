import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCupertinoTabBar;
}
declare class PageExampleCupertinoTabBar extends MXJSWidgetState {
    private _position;
    private _pageList;
    private _currentPage;
    constructor();
    _changeIndex(value: any): void;
    build(): Scaffold;
}
export { ExampleWidget };
