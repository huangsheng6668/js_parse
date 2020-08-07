经过多次反复对查询过后的页面的分析，发现要爬取列表页需要Cookie和accept、referer、user-agent

**除cookie外都好搞，先分析一下cookie**
经过多次请求，发现列表页面的cookie的**固定参数**：
    // 城市ID固定值（硬要杠说城市变了ID也会变当我没说
    lastCity=101280600
    
    sid=sem_pz_bdpc_dasou_title;
    // 时间戳（10位）
    __c=1584686241
    
    __g=sem_pz_bdpc_dasou_title;
    // __c细心点可以发现比这个参数少2
    df3105ad7148dcf2b98a91b5e727a=1584686243

我分析了几分钟的Cookie主要是为了研究Cookie的那个参数是必须的
[![8RM9yt.md.png](https://s1.ax1x.com/2020/03/21/8RM9yt.md.png)](https://imgchr.com/i/8RM9yt)        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cookie加了__zp_stoken__之后`
[![8RKHL6.md.png](https://s1.ax1x.com/2020/03/21/8RKHL6.md.png)](https://imgchr.com/i/8RKHL6)        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cookie单独加__zp_stoken__之后`
[![8RM8kF.md.png](https://s1.ax1x.com/2020/03/21/8RM8kF.md.png)](https://imgchr.com/i/8RM8kF)        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cookie不加__zp_stoken__时
`
由以上尝试，可以总结得出，BOSS的列表页——  **__zp_stoken__**

所以想要获取BOSS的列表页我们需要把__zp_stoken__这个参数给破解出来。

此次是我第一次破解Cookie，所以我会尽量详细记录下来。
