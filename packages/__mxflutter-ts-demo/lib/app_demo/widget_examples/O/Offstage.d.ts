import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleOffstage;
}
declare class PageExampleOffstage extends MXJSWidgetState {
    private _isOff;
    constructor();
    _changeState(): void;
    build(context: any): Scaffold;
}
export { ExampleWidget };
