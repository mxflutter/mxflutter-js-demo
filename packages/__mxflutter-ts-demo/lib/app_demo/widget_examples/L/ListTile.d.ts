import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleListTile;
}
declare class PageExampleListTile extends MXJSWidgetState {
    private _selected;
    constructor();
    _divider(): Container;
    build(context: any): Scaffold;
}
export { ExampleWidget };
