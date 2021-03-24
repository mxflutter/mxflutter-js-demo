import { StatelessWidget, StatefulWidget, State } from '@mxflutter/mxflutter';
import { Scaffold, Container } from '@mxflutter/mxflutter-widgets/material';
declare class MXJSWidgetHomePage extends StatefulWidget {
    data: any;
    count: any;
    constructor();
    createState(): MXJSWidgetHomePageState;
}
declare class MXJSWidgetHomePageState extends State {
    build(context: any): Scaffold;
    sectionTitle(context: any, title: any): HomeSectionTitle;
}
declare class HomeSectionTitle extends StatelessWidget {
    private title;
    constructor(title: any);
    build(context: any): Container;
}
export { MXJSWidgetHomePage };
