import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { MaterialApp } from '@mxflutter/mxflutter-widgets/material';
declare class QuestionPage extends MXJSStatefulWidget {
    constructor();
    createState(): QuestionPageState;
}
declare class QuestionPageState extends MXJSWidgetState {
    constructor();
    build(context: any): MaterialApp;
}
export { QuestionPage };
