import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container, DropdownMenuItem } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleDropdownButton;
}
declare class PageExampleDropdownButton extends MXJSWidgetState {
    private _dropValue;
    private _dropSelectValue;
    private _dropHintValue;
    private _dropIconValue;
    constructor();
    _buildItem(): DropdownMenuItem[];
    _buildCommonButton(): Container;
    _buildSelectItemButton(): Container;
    _buildHintButton(): Container;
    _buildIconButton(): Container;
    build(context: any): Scaffold;
}
export { ExampleWidget };
