import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Container, ListView, SizedBox, Column, DefaultTabController } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAlign;
}
declare class PageExampleAlign extends MXJSWidgetState {
    private _widthFactor;
    private _heightFactor;
    private _xOffset;
    private _yOffset;
    constructor();
    _changeWidthFactor(value: any): void;
    _changeHeightFactor(value: any): void;
    _changeXOffset(value: any): void;
    _changeYOffset(value: any): void;
    _oneAlignInBoard({ costumAlign, alignment }?: {
        costumAlign?: boolean;
        alignment?: any;
    }): Container;
    _alignAlignment(): ListView;
    _sizedSlider({ width, min, max, value, onChanged }: {
        width: any;
        min: any;
        max: any;
        value: any;
        onChanged: any;
    }): SizedBox;
    _alignFactor(): Column;
    build(context: any): DefaultTabController;
}
export { ExampleWidget };
