import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Row, Expanded } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleExpanded;
}
declare class PageExampleExpanded extends MXJSWidgetState {
    private _flex;
    constructor();
    _randomValue(): number;
    _buildFlexContainer(flexNum: any): Expanded;
    _buildContent(num1: any, num2: any, num3: any): Row;
    build(): Scaffold;
}
export { ExampleWidget };
