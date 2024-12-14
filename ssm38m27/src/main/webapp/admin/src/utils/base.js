const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm38m27/",
            name: "ssm38m27",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm38m27/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "“健康早知道”微信小程序"
        } 
    }
}
export default base
