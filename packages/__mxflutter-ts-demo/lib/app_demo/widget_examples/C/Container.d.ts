import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { DefaultTabController, ListView } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleContainer;
}
declare class PageExampleContainer extends MXJSWidgetState {
    constructor();
    _alignmentView(): ListView;
    _paddingAndMargin(): ListView;
    _decorationView(): ListView;
    _transformView(): ListView;
    build(context: any): DefaultTabController;
}
export { ExampleWidget };
