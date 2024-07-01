import {defineConfig} from 'vitepress'
import fs from 'fs'
import path from 'path'
// https://vitepress.dev/reference/site-config
function getSidebar(folder, basePath = '') {
    const fullPath = path.join(basePath, folder)
    const files = fs.readdirSync(fullPath)
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => ({
            text: file.replace('.md', ''),
            link: `/${folder}/${file.replace('.md', '')}`
        }))
}
export default defineConfig({
    ignoreDeadLinks: true,
    head: [
        ['link',
            {rel: 'icon', href: '/favicon.ico'}
        ],
        [
            'meta',
            {name: 'referrer', content: 'no-referrer'},
        ],
        [
            'meta',
            {name: 'robots', content: "index,follow"}
        ],
        [
            'meta',
            {name: 'referrer', content: 'no-referrer'},
        ],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "前端日记,gongyonghui,blog,Blog,技术博客,博客,个人博客,技术总结,问题解析,个人成长,前端,JavaScript,Vue,React,网络,Node.js,TypeScript",
            },
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-TB63M8G2D6');`
        ],
        [
            'script',
            {},
            `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "mdde12font")`
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
        ],
        [
            'script',
            {},
            `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?48d31a1ec82cedac903f0150d2e000d9";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
        ]
    ],
    transformPageData(pageData) {
        const canonicalUrl = `://gongyonghui.cn/${pageData.relativePath}`
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '.html')

        pageData.frontmatter.head ??= []
        pageData.frontmatter.head.push([
            'link',
            {rel: 'canonical', href: canonicalUrl}
        ])
        pageData.frontmatter.lastUpdated = new Date()
    },
    lastUpdated: false,
    title: "技术总结备忘录",
    titleTemplate: "前端日记",
    description: "前端日记,gongyonghui,blog,Blog,技术博客,博客,个人博客,技术总结,问题解析,个人成长,前端,JavaScript,Vue,网络,Node.js,TypeScript",
    themeConfig: {
        siteTitle: '前端日记',
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: 'local'
        },
        footer: {
            message: '如有转载或 CV 的请标注本站原文地址'
        },
        nav: [
            {text: '技术总结', link: '/question/', activeMatch: '^/question/'},
            {text: '问题解析', link: '/summary/', activeMatch: '^/summary/'},
            // { text: '个人成长', link: '/growth/',activeMatch: '^/growth/' }
            {text: '生活感悟', link: '/photo/', activeMatch: '^/photo/'},
            {text: '快捷键', link: '/baseCommand/', activeMatch: '^/baseCommand/'},
            // {
            //     text: '开源项目', items: [
            //         {text: 'FindAll', link: 'https://findallteam.github.io/'},
            //     ]
            // },
            {text: '关于我', link: '/about/', activeMatch: '^/about/'},
        ],
        sidebar: {
            '/baseCommand/': [
                {
                    text: 'Windows快捷键',
                    items: [
                        {
                            text: '001-vscode快捷键',
                            link: '/baseCommand/WinShortcutKey/001'
                        },
                        {
                            text: '002-Windows快捷键',
                            link: '/baseCommand/WinShortcutKey/002'
                        },
                        {
                            text: '003-Notion快捷键',
                            link: '/baseCommand/WinShortcutKey/003'
                        },
                        {
                            text: '004-Potplayer快捷键',
                            link: '/baseCommand/WinShortcutKey/004'
                        }
                    ]
                },
                {
                    text: 'MacOS快捷键',
                    items: [
                        {
                            text: '001-vscode快捷键',
                            link: '/baseCommand/MacShortcutKey/001_vscode'
                        },
                        {
                            text: '002-MacOS快捷键',
                            link: '/baseCommand/MacShortcutKey/002_macos'
                        },
                        {
                            text: '003-控制台快捷键',
                            link: '/baseCommand/MacShortcutKey/003_console'
                        },
                        {
                            text: '004-Google快捷键',
                            link: '/baseCommand/MacShortcutKey/004_google'
                        }
                    ]
                }
            ],
            '/question/': [
                {
                    text: '技术总结',
                    items: [
                        {
                            text: 'Javascript',
                            items: [
                                {
                                    text: 'JS垃圾回收机制',
                                    link: '/question/javascript/carbage_recovery_mechanism'
                                },
                                {
                                    text: 'Web应用中的存储方式',
                                    link: '/question/javascript/storage_method_in_web_applications'
                                },
                                {
                                    text: 'apply、call、bind比较',
                                    link: '/question/javascript/apply_call_bind'
                                },
                                {
                                    text: 'JS模块化',
                                    link: '/question/javascript/js_modularization'
                                },
                                {
                                    text: '前端异步编程解决方案',
                                    link: '/question/javascript/asynchronous_solution'
                                },
                                {
                                    text: '浅拷贝和深拷贝',
                                    link: '/question/javascript/shallow_copy_and_deep_copy'
                                }
                            ]
                        },
                        {
                            text: 'Vue',
                            items: [
                                {
                                    text: 'Vue组件通信方式',
                                    link: '/question/vue/component_communication_method'
                                },
                                {
                                    text: '真实DOM和虚拟DOM',
                                    link: '/question/vue/dom_and_virtual_dom'
                                },
                                {
                                    text: 'Vue和React',
                                    link: '/question/vue/vue_react'
                                },
                                {
                                    text: 'Vue2和Vue3对比',
                                    link: '/question/vue/vue2_vue3'
                                }
                            ]
                        },
                        {
                            text: 'React',
                            items: [
                                {
                                    text: 'React样式解决方案',
                                    link: '/question/react/react_styling_solutions'
                                },
                                {
                                    text: 'React组件通信方式总结',
                                    link: '/question/react/react_components_props'
                                }
                            ]
                        },
                        {
                            text: '网络',
                            items: [
                                {
                                    text: 'TCP和UDP的区别',
                                    link: '/question/network/tcp_and_udp'
                                },
                                {
                                    text: '输入URL回车后全过程',
                                    link: '/question/network/what_steps_after_entering_the_url'
                                },
                                {
                                    text: '跨域解决方案',
                                    link: '/question/network/cross_domain_solution'
                                },
                                {
                                    text: 'http 和 https的区别',
                                    link: '/question/network/http_and_https'
                                },
                            ]
                        },
                        {
                            text: '杂项',
                            items: [
                                {
                                    text: 'JSBridge原理简析',
                                    link: '/question/sundry/JSBridge'
                                }
                            ]
                        }
                    ]
                }
            ],
            '/summary/': [
                {
                    text: '前端的一些知识',
                    items: [
                        {
                            text: '栈-深拷贝和浅拷贝',
                            link: '/summary/Algorithm/001_Stack'
                        },
                        {
                            text: '队列-事件循环',
                            link: '/summary/Algorithm/002_Queue'
                        },
                        {
                            text: '链表-原型和原型链',
                            link: '/summary/Algorithm/003_LinkedList'
                        },
                        {
                            text: '字典和集合-Set和Map',
                            link: '/summary/Algorithm/004_Dictionary'
                        },
                        {
                            text: '树-深/广度优先遍历',
                            link: '/summary/Algorithm/005_Tree'
                        },
                        {
                            text: '图-邻接矩阵/邻接表',
                            link: '/summary/Algorithm/006_Graph'
                        },
                        {
                            text: '堆-最大堆/最小堆',
                            link: '/summary/Algorithm/007_Heap'
                        }
                    ]
                },
                {
                    text: '练习',
                    items:  getSidebar('summary/solve', path.resolve(__dirname, '../'))
                },

            ],
            // '/growth/': [
            //   {
            //     text: '个人成长',
            //     // items: [
            //     //   {
            //     //     text: '成长1',
            //     //     link: '/growth/'
            //     //   },
            //     // ]
            //   }
            // ]
            '/photo/': [
                {
                    text: '生活',
                    items:  getSidebar('photo/life', path.resolve(__dirname, '../'))
                },
                {
                    text: '常用工具',
                    items:  getSidebar('photo/tool', path.resolve(__dirname, '../'))
                }
            ]
        }
    }
})
