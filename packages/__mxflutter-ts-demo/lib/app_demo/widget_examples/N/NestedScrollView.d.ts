import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampeNestedScrollView;
}
declare class PageExampeNestedScrollView extends MXJSWidgetState {
    constructor();
    _listContainerBuilder(context: any, index: any): Container;
    build(context: any): Scaffold;
}
export { ExampleWidget };
