import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Slider, Text, Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleSlider;
}
declare class PageExampleSlider extends MXJSWidgetState {
    private _fontSizeMap;
    private _currentValue;
    private _fontSize;
    private _colorfulValue;
    constructor();
    _text(text: any): Text;
    _getColor(value: any): number;
    _valueChangeSlider(): Slider;
    _fontChangedSlider(): Slider;
    _colorfulSlider(): Slider;
    build(): Scaffold;
}
export { ExampleWidget };
