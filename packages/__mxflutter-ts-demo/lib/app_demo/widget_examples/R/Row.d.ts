import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { DefaultTabController, ListView, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleRow;
}
declare class PageExampleRow extends MXJSWidgetState {
    constructor();
    _equalContainersList(): Container[];
    _unequalContainersList(): Container[];
    _mainAxisAlignmentView(): ListView;
    _crossAxisAlignmentView(): ListView;
    _mainAxisSizeView(): ListView;
    build(context: any): DefaultTabController;
}
export { ExampleWidget };
