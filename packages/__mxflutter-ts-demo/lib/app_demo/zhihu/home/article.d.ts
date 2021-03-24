declare class Article {
    private headUrl;
    private user;
    private action;
    private time;
    private title;
    private mark;
    private agreeNum;
    private commentNum;
    private imgUrl;
    constructor(headUrl: any, user: any, action: any, time: any, title: any, mark: any, agreeNum: any, commentNum: any, { imgUrl }?: {
        imgUrl?: string;
    });
}
declare let articleList: Article[];
export { Article, articleList };
