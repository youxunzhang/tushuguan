const libraryData = {
  "北京": [
    {
      name: "国家图书馆",
      address: "北京市海淀区中关村南大街33号",
      phone: "010-88545426",
      website: "http://www.nlc.cn/",
      description: "中国最大的图书馆，拥有丰富的馆藏和现代化的服务设施。",
      image: "images/national-library-enhanced.svg"
    },
    {
      name: "首都图书馆",
      address: "北京市朝阳区东三环南路88号",
      phone: "010-67358114",
      website: "http://www.clcn.net.cn/",
      description: "北京市重要的公共图书馆，服务广大市民。",
      image: "images/default-library-enhanced.svg"
    },
    {
      name: "北京大学图书馆",
      address: "北京市海淀区颐和园路5号",
      phone: "010-62751051",
      website: "https://lib.pku.edu.cn/",
      description: "北京大学图书馆，历史悠久，馆藏丰富。",
      image: "images/pku-library-enhanced.svg"
    },
    {
      name: "清华大学图书馆",
      address: "北京市海淀区清华园1号",
      phone: "010-62782137",
      website: "https://lib.tsinghua.edu.cn/",
      description: "清华大学图书馆，现代化设施完善。",
      image: "images/tsinghua-library-enhanced.svg"
    },
    {
      name: "中国人民大学图书馆",
      address: "北京市海淀区中关村大街59号",
      phone: "010-62511373",
      website: "https://lib.ruc.edu.cn/",
      description: "中国人民大学图书馆，人文社科类馆藏丰富。",
      image: "images/default-library-enhanced.svg"
    },
    {
      name: "北京师范大学图书馆",
      address: "北京市海淀区新街口外大街19号",
      phone: "010-58806113",
      website: "https://lib.bnu.edu.cn/",
      description: "北京师范大学图书馆，教育类文献丰富。",
      image: "images/default-library-enhanced.svg"
    },
    {
      name: "北京理工大学图书馆",
      address: "北京市海淀区中关村南大街5号",
      phone: "010-68914263",
      website: "https://lib.bit.edu.cn/",
      description: "北京理工大学图书馆，理工科馆藏丰富。",
      image: "images/bit-library.svg"
    },
    {
      name: "北京航空航天大学图书馆",
      address: "北京市海淀区学院路37号",
      phone: "010-82317024",
      website: "https://lib.buaa.edu.cn/",
      description: "北京航空航天大学图书馆，航空航天类文献特色。",
      image: "images/buaa-library.svg"
    },
    {
      name: "中国国家图书馆古籍馆",
      address: "北京市西城区文津街7号",
      phone: "010-88003092",
      website: "http://www.nlc.cn/",
      description: "国家图书馆古籍馆，收藏珍贵古籍文献。",
      image: "images/nlc-ancient-library.svg"
    },
    {
      name: "中国科学院图书馆",
      address: "北京市海淀区中关村北四环西路33号",
      phone: "010-62532095",
      website: "https://www.las.ac.cn/",
      description: "中国科学院图书馆，科技文献资源丰富。",
      image: "images/cas-library.svg"
    },
    {
      name: "中国医学科学院图书馆",
      address: "北京市东城区东单三条9号",
      phone: "010-65133073",
      website: "https://www.imicams.ac.cn/",
      description: "中国医学科学院图书馆，医学文献专业馆藏。",
      image: "images/cams-library.svg"
    },
    {
      name: "北京外国语大学图书馆",
      address: "北京市海淀区西三环北路2号",
      phone: "010-88816254",
      website: "https://lib.bfsu.edu.cn/",
      description: "北京外国语大学图书馆，外语文献资源丰富。",
      image: "images/bfsu-library.svg"
    },
    {
      name: "中央财经大学图书馆",
      address: "北京市海淀区学院南路39号",
      phone: "010-62288332",
      website: "https://lib.cufe.edu.cn/",
      description: "中央财经大学图书馆，经济管理类文献特色。",
      image: "images/cufe-library.svg"
    },
    {
      name: "中国政法大学图书馆",
      address: "北京市昌平区府学路27号",
      phone: "010-58909522",
      website: "https://lib.cupl.edu.cn/",
      description: "中国政法大学图书馆，法学文献专业馆藏。",
      image: "images/cupl-library.svg"
    },
    {
      name: "北京邮电大学图书馆",
      address: "北京市海淀区西土城路10号",
      phone: "010-62282000",
      website: "https://lib.bupt.edu.cn/",
      description: "北京邮电大学图书馆，信息通信类文献丰富。",
      image: "images/bupt-library.svg"
    },
    {
      name: "北京交通大学图书馆",
      address: "北京市海淀区上园村3号",
      phone: "010-51688400",
      website: "https://lib.bjtu.edu.cn/",
      description: "北京交通大学图书馆，交通运输类文献特色。",
      image: "images/bjtu-library.svg"
    },
    {
      name: "北京科技大学图书馆",
      address: "北京市海淀区学院路30号",
      phone: "010-62332562",
      website: "https://lib.ustb.edu.cn/",
      description: "北京科技大学图书馆，材料科学类馆藏丰富。",
      image: "images/ustb-library.svg"
    },
    {
      name: "北京化工大学图书馆",
      address: "北京市朝阳区北三环东路15号",
      phone: "010-64434819",
      website: "https://lib.buct.edu.cn/",
      description: "北京化工大学图书馆，化学工程类文献专业。",
      image: "images/buct-library.svg"
    },
    {
      name: "北京林业大学图书馆",
      address: "北京市海淀区清华东路35号",
      phone: "010-62338236",
      website: "https://lib.bjfu.edu.cn/",
      description: "北京林业大学图书馆，林业生态类文献特色。",
      image: "images/bjfu-library.svg"
    }
  ],
  "上海": [
    {
      name: "上海图书馆",
      address: "上海市徐汇区淮海中路1555号",
      phone: "021-64455555",
      website: "https://www.library.sh.cn/",
      description: "中国著名的现代化大型图书馆。",
      image: "images/shanghai-library-enhanced.svg"
    },
    {
      name: "复旦大学图书馆",
      address: "上海市杨浦区邯郸路220号",
      phone: "021-65642222",
      website: "https://www.library.fudan.edu.cn/",
      description: "复旦大学图书馆，综合性大学图书馆。",
      image: "images/fudan-library-enhanced.svg"
    },
    {
      name: "上海交通大学图书馆",
      address: "上海市闵行区东川路800号",
      phone: "021-34206460",
      website: "https://www.lib.sjtu.edu.cn/",
      description: "上海交通大学图书馆，理工科馆藏丰富。",
      image: "images/sjtu-library.svg"
    },
    {
      name: "同济大学图书馆",
      address: "上海市杨浦区四平路1239号",
      phone: "021-65982200",
      website: "https://lib.tongji.edu.cn/",
      description: "同济大学图书馆，建筑类文献特色馆藏。",
      image: "images/tongji-library.svg"
    },
    {
      name: "华东师范大学图书馆",
      address: "上海市普陀区中山北路3663号",
      phone: "021-62232317",
      website: "https://lib.ecnu.edu.cn/",
      description: "华东师范大学图书馆，教育类文献丰富。",
      image: "images/ecnu-library.svg"
    },
    {
      name: "上海财经大学图书馆",
      address: "上海市杨浦区国定路777号",
      phone: "021-65904320",
      website: "https://lib.shufe.edu.cn/",
      description: "上海财经大学图书馆，经济管理类文献特色。",
      image: "images/shufe-library.svg"
    },
    {
      name: "上海外国语大学图书馆",
      address: "上海市虹口区大连西路550号",
      phone: "021-35372300",
      website: "https://lib.shisu.edu.cn/",
      description: "上海外国语大学图书馆，外语文献资源丰富。",
      image: "images/shisu-library.svg"
    },
    {
      name: "上海音乐学院图书馆",
      address: "上海市徐汇区汾阳路20号",
      phone: "021-64370137",
      website: "https://lib.shcmusic.edu.cn/",
      description: "上海音乐学院图书馆，音乐艺术类文献专业。",
      image: "images/shcmusic-library.svg"
    },
    {
      name: "华东理工大学图书馆",
      address: "上海市徐汇区梅陇路130号",
      phone: "021-64252000",
      website: "https://lib.ecust.edu.cn/",
      description: "华东理工大学图书馆，化工材料类文献丰富。",
      image: "images/ecust-library.svg"
    },
    {
      name: "东华大学图书馆",
      address: "上海市松江区人民北路2999号",
      phone: "021-67792000",
      website: "https://lib.dhu.edu.cn/",
      description: "东华大学图书馆，纺织服装类文献特色。",
      image: "images/dhu-library.svg"
    },
    {
      name: "上海大学图书馆",
      address: "上海市宝山区上大路99号",
      phone: "021-66135000",
      website: "https://lib.shu.edu.cn/",
      description: "上海大学图书馆，综合性大学图书馆。",
      image: "images/shu-library.svg"
    },
    {
      name: "上海理工大学图书馆",
      address: "上海市杨浦区军工路516号",
      phone: "021-55270000",
      website: "https://lib.usst.edu.cn/",
      description: "上海理工大学图书馆，理工科馆藏丰富。",
      image: "images/usst-library.svg"
    },
    {
      name: "上海海事大学图书馆",
      address: "上海市浦东新区海港大道1550号",
      phone: "021-38282000",
      website: "https://lib.shmtu.edu.cn/",
      description: "上海海事大学图书馆，海事物流类文献专业。",
      image: "images/shmtu-library.svg"
    },
    {
      name: "上海师范大学图书馆",
      address: "上海市徐汇区桂林路100号",
      phone: "021-64322000",
      website: "https://lib.shnu.edu.cn/",
      description: "上海师范大学图书馆，教育类文献丰富。",
      image: "images/shnu-library.svg"
    },
    {
      name: "上海中医药大学图书馆",
      address: "上海市浦东新区张江高科技园区蔡伦路1200号",
      phone: "021-51322000",
      website: "https://lib.shutcm.edu.cn/",
      description: "上海中医药大学图书馆，中医药文献专业馆藏。",
      image: "images/shutcm-library.svg"
    },
    {
      name: "上海戏剧学院图书馆",
      address: "上海市静安区华山路630号",
      phone: "021-62488000",
      website: "https://lib.sta.edu.cn/",
      description: "上海戏剧学院图书馆，戏剧影视类文献特色。",
      image: "images/sta-library.svg"
    },
    {
      name: "上海体育学院图书馆",
      address: "上海市杨浦区清源环路650号",
      phone: "021-51253000",
      website: "https://lib.sus.edu.cn/",
      description: "上海体育学院图书馆，体育科学类文献专业。",
      image: "images/sus-library.svg"
    }
  ],
  "广州": [
    {
      name: "广州图书馆",
      address: "广州市珠江东路4号",
      phone: "020-83836666",
      website: "https://www.gzlib.org.cn/",
      description: "位于珠江新城的现代化图书馆，建筑风格独特。",
      image: "images/guangzhou-library-enhanced.svg"
    },
    {
      name: "中山大学图书馆",
      address: "广州市海珠区新港西路135号",
      phone: "020-84111666",
      website: "https://library.sysu.edu.cn/",
      description: "中山大学图书馆，综合性大学图书馆。",
      image: "images/sysu-library.svg"
    },
    {
      name: "华南理工大学图书馆",
      address: "广州市天河区五山路381号",
      phone: "020-87111474",
      website: "https://www.lib.scut.edu.cn/",
      description: "华南理工大学图书馆，理工科馆藏丰富。",
      image: "images/scut-library.svg"
    },
    {
      name: "暨南大学图书馆",
      address: "广州市天河区黄埔大道西601号",
      phone: "020-85220223",
      website: "https://lib.jnu.edu.cn/",
      description: "暨南大学图书馆，华侨华人文献特色馆藏。",
      image: "images/jnu-library.svg"
    },
    {
      name: "华南师范大学图书馆",
      address: "广州市天河区中山大道西55号",
      phone: "020-85210000",
      website: "https://lib.scnu.edu.cn/",
      description: "华南师范大学图书馆，教育类文献丰富。",
      image: "images/scnu-library.svg"
    },
    {
      name: "广东工业大学图书馆",
      address: "广州市番禺区广州大学城外环西路100号",
      phone: "020-39322000",
      website: "https://lib.gdut.edu.cn/",
      description: "广东工业大学图书馆，工程技术类文献特色。",
      image: "images/gdut-library.svg"
    },
    {
      name: "广东外语外贸大学图书馆",
      address: "广州市白云区白云大道北2号",
      phone: "020-36207000",
      website: "https://lib.gdufs.edu.cn/",
      description: "广东外语外贸大学图书馆，外语外贸类文献专业。",
      image: "images/gdufs-library.svg"
    },
    {
      name: "广州大学图书馆",
      address: "广州市番禺区大学城外环西路230号",
      phone: "020-39366000",
      website: "https://lib.gzhu.edu.cn/",
      description: "广州大学图书馆，综合性大学图书馆。",
      image: "images/gzhu-library.svg"
    },
    {
      name: "广东财经大学图书馆",
      address: "广州市海珠区仑头路21号",
      phone: "020-84096000",
      website: "https://lib.gdufe.edu.cn/",
      description: "广东财经大学图书馆，经济管理类文献丰富。",
      image: "images/gdufe-library.svg"
    },
    {
      name: "广东药科大学图书馆",
      address: "广州市番禺区小谷围岛外环东路280号",
      phone: "020-39352000",
      website: "https://lib.gdpu.edu.cn/",
      description: "广东药科大学图书馆，药学医学类文献专业。",
      image: "images/gdpu-library.svg"
    },
    {
      name: "广州中医药大学图书馆",
      address: "广州市番禺区大学城外环东路232号",
      phone: "020-39358000",
      website: "https://lib.gzucm.edu.cn/",
      description: "广州中医药大学图书馆，中医药文献特色馆藏。",
      image: "images/gzucm-library.svg"
    },
    {
      name: "广东技术师范大学图书馆",
      address: "广州市天河区中山大道西293号",
      phone: "020-38265000",
      website: "https://lib.gpnu.edu.cn/",
      description: "广东技术师范大学图书馆，职业技术教育类文献丰富。",
      image: "images/gpnu-library.svg"
    },
    {
      name: "广州美术学院图书馆",
      address: "广州市番禺区大学城外环西路168号",
      phone: "020-39362000",
      website: "https://lib.gzarts.edu.cn/",
      description: "广州美术学院图书馆，美术设计类文献专业。",
      image: "images/gzarts-library.svg"
    },
    {
      name: "星海音乐学院图书馆",
      address: "广州市番禺区小谷围街外环西路398号",
      phone: "020-39363000",
      website: "https://lib.xhcom.edu.cn/",
      description: "星海音乐学院图书馆，音乐艺术类文献特色。",
      image: "images/xhcom-library.svg"
    },
    {
      name: "广州体育学院图书馆",
      address: "广州市天河区广州大道中1268号",
      phone: "020-38025000",
      website: "https://lib.gipe.edu.cn/",
      description: "广州体育学院图书馆，体育科学类文献专业。",
      image: "images/gipe-library.svg"
    },
    {
      name: "仲恺农业工程学院图书馆",
      address: "广州市海珠区仲恺路501号",
      phone: "020-89003000",
      website: "https://lib.zhku.edu.cn/",
      description: "仲恺农业工程学院图书馆，农业工程类文献丰富。",
      image: "images/zhku-library.svg"
    }
  ],
  "深圳": [
    {
      name: "深圳图书馆",
      address: "深圳市福田区福中路2014号",
      phone: "0755-82841200",
      website: "https://www.szlib.org.cn/",
      description: "深圳市标志性文化设施之一。",
      image: "images/shenzhen-library-enhanced.svg"
    },
    {
      name: "深圳大学图书馆",
      address: "深圳市南山区南海大道3688号",
      phone: "0755-26536114",
      website: "https://lib.szu.edu.cn/",
      description: "深圳大学图书馆，现代化设施完善。",
      image: "images/szu-library.svg"
    },
    {
      name: "南方科技大学图书馆",
      address: "深圳市南山区学苑大道1088号",
      phone: "0755-88018000",
      website: "https://lib.sustech.edu.cn/",
      description: "南方科技大学图书馆，新型研究型大学图书馆。",
      image: "images/sustech-library.svg"
    },
    {
      name: "深圳职业技术学院图书馆",
      address: "深圳市南山区西丽湖路2190号",
      phone: "0755-26731000",
      website: "https://lib.szpt.edu.cn/",
      description: "深圳职业技术学院图书馆，职业技术教育类文献丰富。",
      image: "images/szpt-library.svg"
    },
    {
      name: "深圳信息职业技术学院图书馆",
      address: "深圳市龙岗区龙翔大道2188号",
      phone: "0755-89226000",
      website: "https://lib.sziit.edu.cn/",
      description: "深圳信息职业技术学院图书馆，信息技术类文献特色。",
      image: "images/sziit-library.svg"
    },
    {
      name: "深圳大学城图书馆",
      address: "深圳市南山区西丽大学城",
      phone: "0755-26036000",
      website: "https://www.szlib.org.cn/",
      description: "深圳大学城图书馆，服务多所高校的共享图书馆。",
      image: "images/szuc-library.svg"
    },
    {
      name: "深圳技术大学图书馆",
      address: "深圳市坪山区石井街道兰田路3002号",
      phone: "0755-23256000",
      website: "https://lib.sztu.edu.cn/",
      description: "深圳技术大学图书馆，应用技术类文献专业。",
      image: "images/sztu-library.svg"
    },
    {
      name: "香港中文大学（深圳）图书馆",
      address: "深圳市龙岗区龙翔大道2001号",
      phone: "0755-23518000",
      website: "https://lib.cuhk.edu.cn/",
      description: "香港中文大学（深圳）图书馆，国际化教育特色。",
      image: "images/cuhk-sz-library.svg"
    },
    {
      name: "深圳北理莫斯科大学图书馆",
      address: "深圳市龙岗区国际大学园路1号",
      phone: "0755-28323000",
      website: "https://lib.smbu.edu.cn/",
      description: "深圳北理莫斯科大学图书馆，中俄合作办学特色。",
      image: "images/smbu-library.svg"
    },
    {
      name: "深圳开放大学图书馆",
      address: "深圳市罗湖区解放路4006号",
      phone: "0755-82113000",
      website: "https://lib.szou.edu.cn/",
      description: "深圳开放大学图书馆，开放教育类文献丰富。",
      image: "images/szou-library.svg"
    },
    {
      name: "深圳广播电视大学图书馆",
      address: "深圳市罗湖区解放路4006号",
      phone: "0755-82113000",
      website: "https://lib.szrtvu.edu.cn/",
      description: "深圳广播电视大学图书馆，远程教育类文献专业。",
      image: "images/szrtvu-library.svg"
    },
    {
      name: "深圳艺术学校图书馆",
      address: "深圳市南山区南山大道3930号",
      phone: "0755-26566000",
      website: "https://lib.szarts.edu.cn/",
      description: "深圳艺术学校图书馆，艺术教育类文献特色。",
      image: "images/szarts-library.svg"
    },
    {
      name: "深圳科学高中图书馆",
      address: "深圳市龙岗区坂田街道环城东路",
      phone: "0755-28752000",
      website: "https://lib.szkegao.edu.cn/",
      description: "深圳科学高中图书馆，科学教育类文献丰富。",
      image: "images/szkegao-library.svg"
    },
    {
      name: "深圳外国语学校图书馆",
      address: "深圳市福田区红荔路2005号",
      phone: "0755-83247000",
      website: "https://lib.sfls.edu.cn/",
      description: "深圳外国语学校图书馆，外语教育类文献专业。",
      image: "images/sfls-library.svg"
    },
    {
      name: "深圳中学图书馆",
      address: "深圳市罗湖区人民北路深中街18号",
      phone: "0755-82222500",
      website: "https://lib.shenzhong.edu.cn/",
      description: "深圳中学图书馆，基础教育类文献丰富。",
      image: "images/shenzhong-library.svg"
    },
    {
      name: "深圳实验学校图书馆",
      address: "深圳市福田区百花六路4号",
      phone: "0755-83247000",
      website: "https://lib.szsy.edu.cn/",
      description: "深圳实验学校图书馆，实验教育类文献特色。",
      image: "images/szsy-library.svg"
    }
  ],
  "杭州": [
    {
      name: "杭州图书馆",
      address: "杭州市江干区解放东路58号",
      phone: "0571-86535000",
      website: "https://www.hzlib.net/",
      description: "杭州市重要的公共图书馆，环境优美，服务完善。",
      image: "images/hangzhou-library-enhanced.svg"
    },
    {
      name: "浙江大学图书馆",
      address: "杭州市西湖区余杭塘路866号",
      phone: "0571-87951006",
      website: "https://libweb.zju.edu.cn/",
      description: "浙江大学图书馆，综合性研究型大学图书馆。",
      image: "images/zju-library.svg"
    },
    {
      name: "浙江图书馆",
      address: "杭州市西湖区曙光路73号",
      phone: "0571-87988500",
      website: "https://www.zjlib.cn/",
      description: "浙江省最大的公共图书馆，历史悠久。",
      image: "images/zhejiang-library.svg"
    },
    {
      name: "浙江工业大学图书馆",
      address: "杭州市拱墅区潮王路18号",
      phone: "0571-88320000",
      website: "https://lib.zjut.edu.cn/",
      description: "浙江工业大学图书馆，工程技术类文献丰富。",
      image: "images/zjut-library.svg"
    },
    {
      name: "浙江师范大学图书馆",
      address: "金华市婺城区迎宾大道688号",
      phone: "0579-82280000",
      website: "https://lib.zjnu.edu.cn/",
      description: "浙江师范大学图书馆，教育类文献特色。",
      image: "images/zjnu-library.svg"
    },
    {
      name: "杭州电子科技大学图书馆",
      address: "杭州市下沙高教园区2号大街1158号",
      phone: "0571-86915000",
      website: "https://lib.hdu.edu.cn/",
      description: "杭州电子科技大学图书馆，电子信息类文献专业。",
      image: "images/hdu-library.svg"
    },
    {
      name: "浙江理工大学图书馆",
      address: "杭州市下沙高教园区2号大街928号",
      phone: "0571-86843000",
      website: "https://lib.zstu.edu.cn/",
      description: "浙江理工大学图书馆，纺织材料类文献丰富。",
      image: "images/zstu-library.svg"
    },
    {
      name: "中国计量大学图书馆",
      address: "杭州市下沙高教园区学源街258号",
      phone: "0571-86836000",
      website: "https://lib.cjlu.edu.cn/",
      description: "中国计量大学图书馆，计量标准类文献特色。",
      image: "images/cjlu-library.svg"
    },
    {
      name: "浙江工商大学图书馆",
      address: "杭州市下沙高教园区学正街18号",
      phone: "0571-28877000",
      website: "https://lib.zjgsu.edu.cn/",
      description: "浙江工商大学图书馆，经济管理类文献专业。",
      image: "images/zjgsu-library.svg"
    },
    {
      name: "浙江财经大学图书馆",
      address: "杭州市下沙高教园区学源街18号",
      phone: "0571-87557000",
      website: "https://lib.zufe.edu.cn/",
      description: "浙江财经大学图书馆，财经类文献丰富。",
      image: "images/zufe-library.svg"
    },
    {
      name: "浙江农林大学图书馆",
      address: "杭州市临安区武肃街666号",
      phone: "0571-63740000",
      website: "https://lib.zafu.edu.cn/",
      description: "浙江农林大学图书馆，农林生态类文献特色。",
      image: "images/zafu-library.svg"
    },
    {
      name: "浙江中医药大学图书馆",
      address: "杭州市滨江区滨文路548号",
      phone: "0571-86613500",
      website: "https://lib.zcmu.edu.cn/",
      description: "浙江中医药大学图书馆，中医药文献专业馆藏。",
      image: "images/zcmu-library.svg"
    },
    {
      name: "中国美术学院图书馆",
      address: "杭州市西湖区转塘街道象山路352号",
      phone: "0571-87164600",
      website: "https://lib.caa.edu.cn/",
      description: "中国美术学院图书馆，美术设计类文献丰富。",
      image: "images/caa-library.svg"
    },
    {
      name: "浙江音乐学院图书馆",
      address: "杭州市西湖区转塘街道浙音路1号",
      phone: "0571-89808000",
      website: "https://lib.zjcm.edu.cn/",
      description: "浙江音乐学院图书馆，音乐艺术类文献特色。",
      image: "images/zjcm-library.svg"
    },
    {
      name: "浙江传媒学院图书馆",
      address: "杭州市下沙高教园区学源街998号",
      phone: "0571-86832000",
      website: "https://lib.zjicm.edu.cn/",
      description: "浙江传媒学院图书馆，传媒艺术类文献专业。",
      image: "images/zjicm-library.svg"
    },
    {
      name: "浙江科技学院图书馆",
      address: "杭州市西湖区留和路318号",
      phone: "0571-85070000",
      website: "https://lib.zust.edu.cn/",
      description: "浙江科技学院图书馆，应用技术类文献丰富。",
      image: "images/zust-library.svg"
    }
  ],
  "南京": [
    {
      name: "南京图书馆",
      address: "南京市玄武区中山东路189号",
      phone: "025-84356000",
      website: "https://www.jslib.org.cn/",
      description: "江苏省最大的公共图书馆，历史悠久，馆藏丰富。",
      image: "images/nanjing-library-enhanced.svg"
    },
    {
      name: "南京大学图书馆",
      address: "南京市栖霞区仙林大道163号",
      phone: "025-83593183",
      website: "https://lib.nju.edu.cn/",
      description: "南京大学图书馆，综合性大学图书馆。",
      image: "images/nju-library.svg"
    }
  ],
  "成都": [
    {
      name: "成都图书馆",
      address: "成都市青羊区文翁路98号",
      phone: "028-86126155",
      website: "https://www.cdclib.org/",
      description: "成都市重要的文化设施，为市民提供优质的阅读服务。",
      image: "images/chengdu-library.svg"
    },
    {
      name: "四川大学图书馆",
      address: "成都市武侯区望江路29号",
      phone: "028-85412334",
      website: "https://lib.scu.edu.cn/",
      description: "四川大学图书馆，综合性大学图书馆。",
      image: "images/scu-library.svg"
    }
  ],
  "武汉": [
    {
      name: "武汉图书馆",
      address: "武汉市江汉区建设大道861号",
      phone: "027-85718003",
      website: "https://www.whlib.org.cn/",
      description: "武汉市重要的公共图书馆，现代化设施完善。",
      image: "images/wuhan-library.svg"
    },
    {
      name: "武汉大学图书馆",
      address: "武汉市武昌区珞珈山",
      phone: "027-68752740",
      website: "https://www.lib.whu.edu.cn/",
      description: "武汉大学图书馆，综合性大学图书馆。",
      image: "images/whu-library.svg"
    }
  ],
  "西安": [
    {
      name: "陕西省图书馆",
      address: "西安市碑林区长安北路18号",
      phone: "029-85360000",
      website: "https://www.sxlib.org.cn/",
      description: "陕西省最大的公共图书馆，历史悠久，馆藏丰富。",
      image: "images/shaanxi-library.svg"
    },
    {
      name: "西安交通大学图书馆",
      address: "西安市碑林区咸宁西路28号",
      phone: "029-82667853",
      website: "https://lib.xjtu.edu.cn/",
      description: "西安交通大学图书馆，综合性大学图书馆。",
      image: "images/xjtu-library.svg"
    }
  ],
  "重庆": [
    {
      name: "重庆图书馆",
      address: "重庆市渝中区长江一路11号",
      phone: "023-63850361",
      website: "https://www.cqlib.cn/",
      description: "重庆市重要的公共图书馆，服务山城人民。",
      image: "images/chongqing-library.svg"
    },
    {
      name: "重庆大学图书馆",
      address: "重庆市沙坪坝区沙正街174号",
      phone: "023-65102300",
      website: "https://lib.cqu.edu.cn/",
      description: "重庆大学图书馆，综合性大学图书馆。",
      image: "images/cqu-library.svg"
    }
  ]
};
