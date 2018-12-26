
let content1 = `/*
*面试官你好，我是莫正红
*我将以动画的形式来介绍自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/
*{
    transition: all 1s;
}
html{
    background: #808ca0;
    font-size: 16px;
}
#codeWrapper{
    width: 45%;
    height: 100vh;
    padding: 16px;
}
#code{
    background: #ddd;
    border: 2px solid #fff;
    padding: 16px;
    height: 100%;
    width: 100%;
}
/*现在我们让代码高亮吧！*/

.token.comment{
    color: slategray;
}
.token.selector{
    color: #690;
}
.token.punctuation{
    color: #999;
}
.token.property{
    color: #905;
}

/*加一些3D效果吧*/
#code{
    transition: none;
    transform-origin: left;
    transform: rotateY(10deg);
    animation: breath 1.5s linear alternate infinite ;
}

`
let content2 = `/*
好了，不玩了，我来介绍一下我自己
首先我需要一张白纸
*/
#paper{
    width:45%;
    height: 100vh;
    padding: 16px;
    color: #000;
}
#innerPaper{
    width: 100%;
    height:100%;
    padding: 16px;
    background-color: #fff;
}

/*然后可以在白纸上编辑markdown内容啦*/
`
let content3 = `
## 自我介绍

我是莫正红，今年24岁，毕业于青岛科技大学，自学前端一年，希望应聘贵公司的前端开发岗位。

## 技能介绍

１. 了解 HTTP 协议，能够根据 HTTP 请求、响应和状态码排查问题。
２. 掌握 HTML5、CSS3 和 JavaScript 技术。
３. 掌握 jQuery 的 DOM 操作、属性操作、事件、AJAX等相关知识技能
４. 熟悉 CSS 预处理语言SASS
５. 了解命令行、npm的使用
６. 熟练使用 Webstorm、VsCode、终端等开发工具

## 项目介绍

１. 个人简历

- 功能介绍：
    １. 进入网站加载动画
    ２. 顶部导航 sticky + 自动高亮 + 二级菜单
    ３. 作品集的轮播
    ４. 留言功能
- 技术细节：使用了 HTML5(SVG)、CSS3、原生JavaScript等技术，使用 AJAX + LeanCloud 将用户留言保存到服务器
- 技术栈：CSS3 | 原生JavaScript | AJAX | 插件
- [代码地址 | 预览链接](https://github.com/mozhenghong/resume)

２．PC 端导航页面

- 功能介绍：
    １. 键盘按键跳转相应网站功能
    ２. 点击修改按钮,用户可以自己设置按guankan对应的网站。
    ３. 显示网站缩略图
- 技术细节：使用了 HTML5、CSS3、原生 JaguankanScript等技术，使用 CSS3 的阴影 + 动画，使得页面更加美观，使用 localStorage 将用户的设置保存在本地。
- 技术栈：HTML5 | CSS3 | 原生 JavaScripguankan| AJAX | 插件
- [代码地址 | 预览链接](https://github.guankanm/mozhenghong/Navigation-page)

３．购物网站

- 功能介绍：
    １. 包括首页和商品详细页
    ２. 展示商品和针对商品的详细介绍,
- 技术细节：使用了 HTML5、CSS3、原生JavaScript以及jQuery等技术
- 技术栈：CSS3 | 原生JavaScript|jQuery
- [代码地址 | 预览链接](https://github.com/mozhenghong/shopping-website)

４．移动端画板

- 功能介绍：支持 PC 端和移动端，包含 画笔 、橡皮擦 、选择颜色 、画笔粗细 、清空 和 下载 功能
- 技术细节：使用了 canvas API  + 原生 JS 进行开发。
- [代码地址 | 预览链接](https://github.com/mozhenghong/canvas)

５．个人博客

[预览链接](https://mozhenghong.github.io/index.html)
    
## 联系方式

- QQ:1445107381
- Email:1445107381@qq.com
- 18765294051
`

let content4 = `

/*接下来，把markdown转换成html吧！*/

`
let content5 = `
/*来给html加点样式吧！*/

#innerPaper>h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0.5em;
}
#innerPaper>ul>li:before{
    content: '.';
    margin-right: 0.5em;
}
`
let content6 = `

/*以上就是我的个人简历，谢谢观看！*/

`
let time = 50
let slow = document.getElementsByClassName('slow')[0]
let middle = document.getElementsByClassName('middle')[0]
let fast = document.getElementsByClassName('fast')[0]
slow.onclick = function(){
    slow.classList.add('active')
    middle.classList.remove('active')
    fast.classList.remove('active')
    time = 150
}
middle.onclick = function(){
    middle.classList.add('active')
    slow.classList.remove('active')
    fast.classList.remove('active')
    time = 50
}
fast.onclick = function(){
    fast.classList.add('active')
    middle.classList.remove('active')
    slow.classList.remove('active')
    time = 10
}
    
function writeCode(preContent,content,fn){
    let  code = document.getElementById('code')
    let  styleTag = document.getElementById('styleTag')
    let  n = 0
    let id = setTimeout(function run(){
        n = n+1
        code.innerHTML =  Prism.highlight(preContent + content.substring(0,n), Prism.languages.css, 'css');
        styleTag.innerHTML = preContent + content.substring(0,n)
        code.scrollTop = code.scrollHeight
        if(n<content.length){
            id =setTimeout(run,time)
        }else{
            fn.call()
        }
    },time)
        
    }

function createPaper(fn){
    let paper = document.createElement('div')
    paper.id =  'paper'
    let innerPaper = document.createElement('pre')
    innerPaper.id = 'innerPaper'
    paper.appendChild(innerPaper)
    document.body.appendChild(paper)
    fn.call()
}

function writePaper(content,fn){
    let  paper = document.getElementById('innerPaper')
    let  n = 0
    let id = setTimeout(function run(){
        n = n+1
        paper.innerHTML = content.substring(0,n)
        paper.scrollTop = paper.scrollHeight
        if(n<content.length){
            id = setTimeout(run,time)
        }else{
            fn.call()
        }
    },time)
}
function markdownToHtml(fn){
    document.getElementById('innerPaper').innerHTML = marked(content3)
    innerPaper.scrollTop = 0
    console.log('html')
    fn && fn.call()
    
}

writeCode('' , content1,()=>{
    createPaper(()=>{
        writeCode(content1,content2,()=>{
            writePaper(content3,()=>{
                writeCode(content1+content2,content4,()=>{
                    markdownToHtml(()=>{
                        writeCode(content1+content2+content4, content5,()=>{
                            writeCode(content1+content2+content4+content5, content6,()=>{})
                        })
                    })
                })
            })
        })
    })
})        