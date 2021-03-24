import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Container, DefaultTabController } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleListBody;
}
declare class PageExampleListBody extends MXJSWidgetState {
    constructor();
    _theContainer(color: any, text: any): Container;
    _containerBuilder(context: any, index: any): Container;
    _sparatedBuilder(context: any, index: any): Container;
    _containerList(): any[];
    build(context: any): DefaultTabController;
}
export { ExampleWidget };
