import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleScaffold extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleScaffoldState;
}
declare class PageExampleScaffoldState extends MXJSWidgetState {
    _currentIndex: any;
    _navigationViews: any;
    _pageList: any;
    _currentPage: any;
    constructor();
    build(context: any): Scaffold;
}
export { PageExampleScaffold, };
