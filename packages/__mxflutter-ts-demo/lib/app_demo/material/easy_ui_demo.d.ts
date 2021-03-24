import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container, Column } from '@mxflutter/mxflutter-widgets/material';
declare class JSEasyUIDemo extends MXJSStatefulWidget {
    constructor();
    createState(): JSEasyUIDemoState;
}
declare class JSEasyUIDemoState extends MXJSWidgetState {
    dropdownValue: any;
    iconColorIndex: any;
    sliderValue: any;
    sliderDiscreteValue: any;
    constructor();
    _buildButtons(): Column;
    _buildTexts(): Container;
    _buildIcons(): Container;
    _buildTextFields(): Container;
    _buildTextFormFields(): Container;
    _buildSlider(): Container;
    build(context: any): Scaffold;
}
export { JSEasyUIDemo };
