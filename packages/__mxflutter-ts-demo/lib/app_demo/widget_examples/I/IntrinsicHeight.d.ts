import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Row, ListView, DefaultTabController } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleIntrinsicHeight;
}
declare class PageExampleIntrinsicHeight extends MXJSWidgetState {
    constructor();
    _withoutIntrinsicHeight(): Row;
    _withIntrinsicHeight(): ListView;
    build(): DefaultTabController;
}
export { ExampleWidget };
