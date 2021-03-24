import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, GestureDetector } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleGestureDetector;
}
declare class PageExampleGestureDetector extends MXJSWidgetState {
    private _infoCommon;
    private _infoOffset;
    constructor();
    _buildCommon(): GestureDetector;
    _onTapUp(details: any): void;
    _buildOffset(): GestureDetector;
    build(): Scaffold;
}
export { ExampleWidget };
