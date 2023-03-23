// 自定义交互式命令行的问题及简单的校验
let question = [{
        name: "name",
        type: "input",
        message: "请输入你要建立的项目名称？",
        validate(val) {
            if (val === "") {
                return "项目必须要有个名称";
            } else {
                return true;
            }
        },
    },
    {
        name: "项目描述",
        type: "input",
        message: "项目相关的描述（没有填无）",
    },
];
module.exports = question;