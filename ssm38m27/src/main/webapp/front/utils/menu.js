const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"健康信息","menuJump":"列表","tableName":"jiankangxinxi"}],"menu":"健康信息管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除"],"menu":"健康评估","menuJump":"列表","tableName":"jiankangpinggu"}],"menu":"健康评估管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"在线留言","tableName":"messages"}],"menu":"在线留言"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"医学知识","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","评估"],"menu":"健康信息","menuJump":"列表","tableName":"jiankangxinxi"}],"menu":"健康信息管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改"],"menu":"健康评估","menuJump":"列表","tableName":"jiankangpinggu"}],"menu":"健康评估管理"}],"frontMenu":[],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"医生","tableName":"yisheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看"],"menu":"健康信息","menuJump":"列表","tableName":"jiankangxinxi"}],"menu":"健康信息管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"健康评估","menuJump":"列表","tableName":"jiankangpinggu"}],"menu":"健康评估管理"}],"frontMenu":[],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;