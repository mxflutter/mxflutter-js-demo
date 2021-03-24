import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { MaterialApp } from '@mxflutter/mxflutter-widgets/material';
declare class Index extends MXJSStatefulWidget {
    constructor();
    createState(): IndexState;
}
declare class IndexState extends MXJSWidgetState {
    private _currentIndex;
    private _navigationViews;
    private _pageList;
    private _currentPage;
    constructor();
    build(context: any): MaterialApp;
}
export { Index };
