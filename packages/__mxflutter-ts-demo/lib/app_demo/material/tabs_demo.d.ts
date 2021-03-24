import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { DefaultTabController } from '@mxflutter/mxflutter-widgets/material';
declare class JSTabsDemo extends MXJSStatefulWidget {
    constructor();
    createState(): JSTabsDemoState;
}
declare class JSTabsDemoState extends MXJSWidgetState {
    build(context: any): DefaultTabController;
}
export { JSTabsDemo };
