import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, ListTile, Radio } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleRadio;
}
declare class PageExampleRadio extends MXJSWidgetState {
    private _basicRadioValue;
    private _radioTileValue;
    constructor();
    _basicRadio(number: any): Radio;
    _radioTile(number: any): ListTile;
    build(context: any): Scaffold;
}
export { ExampleWidget };
