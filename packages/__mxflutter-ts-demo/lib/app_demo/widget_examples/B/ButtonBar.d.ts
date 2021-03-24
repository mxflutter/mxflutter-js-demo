import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, RaisedButton } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleButtonBar;
}
declare class PageExampleButtonBar extends MXJSWidgetState {
    constructor();
    _buttonList(): RaisedButton[];
    build(context: any): Scaffold;
}
export { ExampleWidget };
