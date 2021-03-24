import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Column } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExamplePageView;
}
declare class PageExamplePageView extends MXJSWidgetState {
    constructor();
    _normalPageView(): Column;
    _verticalPageView(): Column;
    _fractionPageView(): Column;
    build(context: any): Scaffold;
}
export { ExampleWidget };
