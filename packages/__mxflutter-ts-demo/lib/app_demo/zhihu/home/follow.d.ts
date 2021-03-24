import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { Container, SingleChildScrollView } from '@mxflutter/mxflutter-widgets/material';
declare class Follow extends MXJSStatefulWidget {
    constructor();
    createState(): FollowState;
}
declare class FollowState extends MXJSWidgetState {
    constructor();
    wordsCard(context: any, article: any): Container;
    billboard(context: any): Container;
    build(context: any): SingleChildScrollView;
}
export { Follow };
