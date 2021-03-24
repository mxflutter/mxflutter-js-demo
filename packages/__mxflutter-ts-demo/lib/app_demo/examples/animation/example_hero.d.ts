import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { Scaffold } from '@mxflutter/mxflutter-widgets/material';
declare class PageExampleHero extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleHeroState;
}
declare class PageExampleHeroState extends MXJSWidgetState {
    constructor();
    build(context: any): Scaffold;
}
export { PageExampleHero, };
