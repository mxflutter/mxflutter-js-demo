declare class Question {
    private order;
    private title;
    private hotNum;
    private imgUrl;
    private mark;
    private rise;
    constructor(order: any, title: any, hotNum: any, imgUrl: any, { mark, rise }?: {
        mark?: any;
        rise?: any;
    });
}
declare let questionList: Question[];
export { Question, questionList };
