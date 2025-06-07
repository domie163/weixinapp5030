const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm0u4hl/",
            name: "ssm0u4hl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm0u4hl/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园订餐小程序"
        } 
    }
}
export default base
