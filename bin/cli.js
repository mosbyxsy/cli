var program = require('commander');//指定命令版本等

program.version(require('../package').version).usage('<command> [options]');// 指定版本及命令格式
program.command('init', 'generate a new project from a template');//指定init命令
program.parse(process.argv);