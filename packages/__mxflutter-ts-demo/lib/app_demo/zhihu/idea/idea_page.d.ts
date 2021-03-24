import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp } from '@mxflutter/mxflutter-widgets/material';
declare class IdeaPage extends MXJSStatefulWidget {
    constructor();
    createState(): IdeaPageState;
}
declare class IdeaPageState extends MXJSWidgetState {
    constructor();
    build(context: any): MaterialApp;
}
export { IdeaPage };
