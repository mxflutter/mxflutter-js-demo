import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Stack } from '@mxflutter/mxflutter-widgets/material';
declare class JSBottomNavigationDemo extends MXJSStatefulWidget {
    constructor();
    createState(): JSBottomNavigationDemoState;
}
declare class JSBottomNavigationDemoState extends MXJSWidgetState {
    private _currentIndex;
    private _type;
    private _navigationViews;
    constructor(widget: any);
    initState(): void;
    dispose(): void;
    _buildTransitionsStack(context: any): Stack;
    build(context: any): Scaffold;
}
export { JSBottomNavigationDemo };
