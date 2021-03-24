import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Color, DefaultTabController } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleSingleChildScrollView;
}
declare class PageExampleSingleChildScrollView extends MXJSWidgetState {
    private _tileSize;
    private _tileSize1of3;
    private _tileSize2of3;
    private _colorMin;
    private _colorRange;
    constructor();
    _getColor(value: any): Color;
    _containerList(rd?: boolean): any[];
    build(context: any): DefaultTabController;
}
export { ExampleWidget };
