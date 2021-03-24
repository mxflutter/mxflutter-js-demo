import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { DefaultTabController } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleTabbar;
}
declare class PageExampleTabbar extends MXJSWidgetState {
    constructor();
    build(context: any): DefaultTabController;
}
export { ExampleWidget };
