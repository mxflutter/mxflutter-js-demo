import { MXJSStatelessWidget } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleAnimatedBuilder extends MXJSStatelessWidget {
    count: any;
    tween: any;
    animationController: any;
    animation: any;
    constructor();
    animationLoopFunc(status: any): void;
    beginAnimation(): void;
    build(context: any): Scaffold;
}
export { PageExampleAnimatedBuilder, };
