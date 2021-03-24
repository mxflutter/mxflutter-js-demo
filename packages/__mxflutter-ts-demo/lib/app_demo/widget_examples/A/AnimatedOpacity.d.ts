import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleAnimatedOpacity;
}
declare class PageExampleAnimatedOpacity extends MXJSWidgetState {
    private settingTable;
    private _selected;
    private _repeatAnimationRunning;
    constructor();
    _singleOption(selectedText: any, unselectedText: any, varName: any): Container;
    _changeSelected(): void;
    _playOrEnd(): void;
    build(context: any): Scaffold;
}
export { ExampleWidget };
