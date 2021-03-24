import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleNavigator;
}
declare class PageExampleNavigator extends MXJSWidgetState {
    constructor();
    _buildSearchBar(context: any): Container;
    build(context: any): Scaffold;
}
export { ExampleWidget };
