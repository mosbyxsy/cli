var path = require('path');// node提供的路径方法集合
var program = require('commander');//指定命令版本等
var ora = require('ora');//命令行加载动画
var chalk = require('chalk');//命令行样式
var inquirer = require('inquirer'); //命令行交互
var download = require('download-git-repo'); //仓库下载

program.usage('<template-name> [project-name]').parse(process.argv);

// https://www.npmjs.com/package/download-git-repo
inquirer.prompt([{
    type: 'confirm',
    message: 'template:' + program.args[0],
    name: 'ok'
}]).then(answers => {
    if (answers.ok) {
        var spinner = ora('downloading template');
        spinner.start();
        // 目录需要为空
        download(`github:mosbyxsy/${program.args[0]}`, `../${program.args[1]}`, { clone: true }, err => {
            spinner.stop();
            if (err) {
                console.log(chalk.red(err));
            } else {
                console.log(chalk.green('Success!!!'));
            }
        })
    }
}).catch(err => {
    chalk.red(err);
});
