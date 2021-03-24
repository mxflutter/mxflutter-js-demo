import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAspectRatioState;
}
declare class PageExampleAspectRatioState extends MXJSWidgetState {
    private _ratio;
    constructor();
    _changeRatio(value: any): void;
    build(): Scaffold;
}
export { ExampleWidget };
