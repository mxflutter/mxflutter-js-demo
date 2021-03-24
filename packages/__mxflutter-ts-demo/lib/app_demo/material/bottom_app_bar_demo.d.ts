import { StatefulWidget, State } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class JSChoiceValue {
    title: string;
    label: string;
    value: any;
    constructor(title: any, label: any, value: any);
}
declare class JSBottomAPPBarDemo extends StatefulWidget {
    constructor();
    createState(): JSBottomAPPBarDemoState;
}
declare class JSBottomAPPBarDemoState extends State {
    _showNotch: JSChoiceValue;
    _fabLocation: JSChoiceValue;
    _babColor: any;
    constructor(widget: any);
    showSnackBar(): void;
    onShowNotchChanged(value: any): void;
    onFabLocationChanged(value: any): void;
    onBabColorChange(value: any): void;
    build(context: any): Scaffold;
}
export { JSBottomAPPBarDemo };
