import { MXJSWidgetState, MXJSStatefulWidget } from '@mxflutter/mxflutter';
import { Container, SingleChildScrollView } from '@mxflutter/mxflutter-widgets/material';
declare class Recommend extends MXJSStatefulWidget {
    constructor();
    createState(): RecommendState;
}
declare class RecommendState extends MXJSWidgetState {
    commonCard(context: any, article: any): Container;
    build(context: any): SingleChildScrollView;
}
export { Recommend };
