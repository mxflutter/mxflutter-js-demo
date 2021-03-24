import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleBottomNavigationBarState;
}
declare class PageExampleBottomNavigationBarState extends MXJSWidgetState {
    private _position;
    private _type;
    private _colors;
    constructor();
    _changeBottomBar(value: any): void;
    _changeType(): void;
    build(): Scaffold;
}
export { ExampleWidget };
