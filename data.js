const libraryData = [
  {
    city: "北京",
    libraries: [
      {
        name: "国家图书馆",
        address: "北京市海淀区中关村南大街33号",
        phone: "010-88545426",
        website: "http://www.nlc.cn/",
        description: "中国最大的图书馆，拥有丰富的馆藏和现代化的服务设施。",
        image: "images/national-library.svg"
      },
      {
        name: "首都图书馆",
        address: "北京市朝阳区东三环南路88号",
        phone: "010-67358114",
        website: "http://www.clcn.net.cn/",
        description: "北京市重要的公共图书馆，服务广大市民。",
        image: "images/capital-library.svg"
      },
      {
        name: "北京大学图书馆",
        address: "北京市海淀区颐和园路5号",
        phone: "010-62751051",
        website: "https://lib.pku.edu.cn/",
        description: "北京大学图书馆，历史悠久，馆藏丰富。",
        image: "images/pku-library.svg"
      },
      {
        name: "清华大学图书馆",
        address: "北京市海淀区清华园1号",
        phone: "010-62782137",
        website: "https://lib.tsinghua.edu.cn/",
        description: "清华大学图书馆，现代化设施完善。",
        image: "images/tsinghua-library.svg"
      },
      {
        name: "中国人民大学图书馆",
        address: "北京市海淀区中关村大街59号",
        phone: "010-62511373",
        website: "https://lib.ruc.edu.cn/",
        description: "中国人民大学图书馆，人文社科类馆藏丰富。",
        image: "images/ruc-library.svg"
      },
      {
        name: "北京师范大学图书馆",
        address: "北京市海淀区新街口外大街19号",
        phone: "010-58806113",
        website: "https://lib.bnu.edu.cn/",
        description: "北京师范大学图书馆，教育类文献丰富。",
        image: "images/bnu-library.svg"
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
      },
      {
        name: "中国农业大学图书馆",
        address: "北京市海淀区清华东路17号",
        phone: "010-62732884",
        website: "https://lib.cau.edu.cn/",
        description: "中国农业大学图书馆，农业科学类馆藏丰富。",
        image: "images/cau-library.svg"
      },
      {
        name: "中央音乐学院图书馆",
        address: "北京市西城区鲍家街43号",
        phone: "010-66425714",
        website: "https://lib.ccom.edu.cn/",
        description: "中央音乐学院图书馆，音乐艺术类文献专业。",
        image: "images/ccom-library.svg"
      },
      {
        name: "中央美术学院图书馆",
        address: "北京市朝阳区花家地南街8号",
        phone: "010-64771000",
        website: "https://lib.cafa.edu.cn/",
        description: "中央美术学院图书馆，美术设计类文献丰富。",
        image: "images/cafa-library.svg"
      },
      {
        name: "北京电影学院图书馆",
        address: "北京市海淀区西土城路4号",
        phone: "010-82048899",
        website: "https://lib.bfa.edu.cn/",
        description: "北京电影学院图书馆，影视艺术类文献特色。",
        image: "images/bfa-library.svg"
      },
      {
        name: "中国传媒大学图书馆",
        address: "北京市朝阳区定福庄东街1号",
        phone: "010-65779370",
        website: "https://lib.cuc.edu.cn/",
        description: "中国传媒大学图书馆，传媒新闻类馆藏丰富。",
        image: "images/cuc-library.svg"
      },
      {
        name: "北京体育大学图书馆",
        address: "北京市海淀区信息路48号",
        phone: "010-62989300",
        website: "https://lib.bsu.edu.cn/",
        description: "北京体育大学图书馆，体育科学类文献专业。",
        image: "images/bsu-library.svg"
      }
    ]
  },
  {
    city: "上海",
    libraries: [
      {
        name: "上海图书馆",
        address: "上海市徐汇区淮海中路1555号",
        phone: "021-64455555",
        website: "https://www.library.sh.cn/",
        description: "中国著名的现代化大型图书馆。",
        image: "images/shanghai-library.svg"
      },
      {
        name: "复旦大学图书馆",
        address: "上海市杨浦区邯郸路220号",
        phone: "021-65642222",
        website: "https://www.library.fudan.edu.cn/",
        description: "复旦大学图书馆，综合性大学图书馆。",
        image: "images/fudan-library.svg"
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
      },
      {
        name: "上海应用技术大学图书馆",
        address: "上海市奉贤区海泉路100号",
        phone: "021-60873000",
        website: "https://lib.sit.edu.cn/",
        description: "上海应用技术大学图书馆，应用技术类馆藏丰富。",
        image: "images/sit-library.svg"
      },
      {
        name: "上海工程技术大学图书馆",
        address: "上海市松江区龙腾路333号",
        phone: "021-67791000",
        website: "https://lib.sues.edu.cn/",
        description: "上海工程技术大学图书馆，工程技术类文献特色。",
        image: "images/sues-library.svg"
      },
      {
        name: "上海立信会计金融学院图书馆",
        address: "上海市松江区文翔路2800号",
        phone: "021-67705000",
        website: "https://lib.lixin.edu.cn/",
        description: "上海立信会计金融学院图书馆，会计金融类文献专业。",
        image: "images/lixin-library.svg"
      },
      {
        name: "上海政法学院图书馆",
        address: "上海市青浦区外青松公路7989号",
        phone: "021-39225000",
        website: "https://lib.shupl.edu.cn/",
        description: "上海政法学院图书馆，法学文献专业馆藏。",
        image: "images/shupl-library.svg"
      },
      {
        name: "上海第二工业大学图书馆",
        address: "上海市浦东新区金海路2360号",
        phone: "021-50215000",
        website: "https://lib.sspu.edu.cn/",
        description: "上海第二工业大学图书馆，工程技术类文献丰富。",
        image: "images/sspu-library.svg"
      }
    ]
  },
  {
    city: "广州",
    libraries: [
      {
        name: "广州图书馆",
        address: "广州市珠江东路4号",
        phone: "020-83836666",
        website: "https://www.gzlib.org.cn/",
        description: "位于珠江新城的现代化图书馆，建筑风格独特。",
        image: "images/guangzhou-library.svg"
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
      },
      {
        name: "广东金融学院图书馆",
        address: "广州市天河区龙洞迎福路527号",
        phone: "020-37215000",
        website: "https://lib.gduf.edu.cn/",
        description: "广东金融学院图书馆，金融经济类文献特色。",
        image: "images/gduf-library.svg"
      },
      {
        name: "广东警官学院图书馆",
        address: "广州市白云区文盛庄路118号",
        phone: "020-36244000",
        website: "https://lib.gdppla.edu.cn/",
        description: "广东警官学院图书馆，公安法学类文献专业。",
        image: "images/gdppla-library.svg"
      }
    ]
  },
  {
    city: "深圳",
    libraries: [
      {
        name: "深圳图书馆",
        address: "深圳市福田区福中路2014号",
        phone: "0755-82841200",
        website: "https://www.szlib.org.cn/",
        description: "深圳市标志性文化设施之一。",
        image: "images/shenzhen-library.svg"
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
      },
      {
        name: "深圳高级中学图书馆",
        address: "深圳市福田区春田路2号",
        phone: "0755-83247000",
        website: "https://lib.szgjzx.edu.cn/",
        description: "深圳高级中学图书馆，高中教育类文献专业。",
        image: "images/szgjzx-library.svg"
      }
    ]
  },
  {
    city: "杭州",
    libraries: [
      {
        name: "杭州图书馆",
        address: "杭州市江干区解放东路58号",
        phone: "0571-86535000",
        website: "https://www.hzlib.net/",
        description: "杭州市重要的公共图书馆，环境优美，服务完善。",
        image: "images/hangzhou-library.svg"
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
      },
      {
        name: "浙江水利水电学院图书馆",
        address: "杭州市下沙高教园区学林街583号",
        phone: "0571-86929000",
        website: "https://lib.zjweu.edu.cn/",
        description: "浙江水利水电学院图书馆，水利工程类文献特色。",
        image: "images/zjweu-library.svg"
      }
    ]
  },
  {
    city: "南京",
    libraries: [
      {
        name: "南京图书馆",
        address: "南京市玄武区中山东路189号",
        phone: "025-84356000",
        website: "https://www.jslib.org.cn/",
        description: "江苏省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/nanjing-library.svg"
      },
      {
        name: "南京大学图书馆",
        address: "南京市栖霞区仙林大道163号",
        phone: "025-83593183",
        website: "https://lib.nju.edu.cn/",
        description: "南京大学图书馆，综合性大学图书馆。",
        image: "images/nju-library.svg"
      },
      {
        name: "东南大学图书馆",
        address: "南京市玄武区四牌楼2号",
        phone: "025-83792301",
        website: "https://lib.seu.edu.cn/",
        description: "东南大学图书馆，建筑类文献特色馆藏。",
        image: "images/seu-library.svg"
      },
      {
        name: "南京师范大学图书馆",
        address: "南京市栖霞区文苑路1号",
        phone: "025-85891000",
        website: "https://lib.njnu.edu.cn/",
        description: "南京师范大学图书馆，教育类文献丰富。",
        image: "images/njnu-library.svg"
      },
      {
        name: "南京理工大学图书馆",
        address: "南京市玄武区孝陵卫200号",
        phone: "025-84315000",
        website: "https://lib.njust.edu.cn/",
        description: "南京理工大学图书馆，军工科技类文献特色。",
        image: "images/njust-library.svg"
      },
      {
        name: "南京航空航天大学图书馆",
        address: "南京市江宁区将军大道29号",
        phone: "025-52110000",
        website: "https://lib.nuaa.edu.cn/",
        description: "南京航空航天大学图书馆，航空航天类文献专业。",
        image: "images/nuaa-library.svg"
      },
      {
        name: "河海大学图书馆",
        address: "南京市鼓楼区西康路1号",
        phone: "025-83786000",
        website: "https://lib.hhu.edu.cn/",
        description: "河海大学图书馆，水利工程类文献丰富。",
        image: "images/hhu-library.svg"
      },
      {
        name: "南京农业大学图书馆",
        address: "南京市玄武区卫岗1号",
        phone: "025-84396000",
        website: "https://lib.njau.edu.cn/",
        description: "南京农业大学图书馆，农业科学类文献特色。",
        image: "images/njau-library.svg"
      },
      {
        name: "中国药科大学图书馆",
        address: "南京市鼓楼区童家巷24号",
        phone: "025-83271000",
        website: "https://lib.cpu.edu.cn/",
        description: "中国药科大学图书馆，药学医学类文献专业。",
        image: "images/cpu-library.svg"
      },
      {
        name: "南京邮电大学图书馆",
        address: "南京市栖霞区文苑路9号",
        phone: "025-85866000",
        website: "https://lib.njupt.edu.cn/",
        description: "南京邮电大学图书馆，信息通信类文献丰富。",
        image: "images/njupt-library.svg"
      },
      {
        name: "南京林业大学图书馆",
        address: "南京市玄武区龙蟠路159号",
        phone: "025-85427000",
        website: "https://lib.njfu.edu.cn/",
        description: "南京林业大学图书馆，林业生态类文献特色。",
        image: "images/njfu-library.svg"
      },
      {
        name: "南京信息工程大学图书馆",
        address: "南京市浦口区宁六路219号",
        phone: "025-58731000",
        website: "https://lib.nuist.edu.cn/",
        description: "南京信息工程大学图书馆，气象科学类文献专业。",
        image: "images/nuist-library.svg"
      },
      {
        name: "南京工业大学图书馆",
        address: "南京市浦口区浦珠南路30号",
        phone: "025-58139000",
        website: "https://lib.njtech.edu.cn/",
        description: "南京工业大学图书馆，化工材料类文献丰富。",
        image: "images/njtech-library.svg"
      },
      {
        name: "南京财经大学图书馆",
        address: "南京市栖霞区仙林大学城文苑路3号",
        phone: "025-84028000",
        website: "https://lib.njue.edu.cn/",
        description: "南京财经大学图书馆，经济管理类文献特色。",
        image: "images/njue-library.svg"
      },
      {
        name: "南京审计大学图书馆",
        address: "南京市浦口区江浦街道雨山西路86号",
        phone: "025-58318000",
        website: "https://lib.nau.edu.cn/",
        description: "南京审计大学图书馆，审计会计类文献专业。",
        image: "images/nau-library.svg"
      },
      {
        name: "南京艺术学院图书馆",
        address: "南京市鼓楼区虎踞北路15号",
        phone: "025-83498000",
        website: "https://lib.nua.edu.cn/",
        description: "南京艺术学院图书馆，艺术设计类文献丰富。",
        image: "images/nua-library.svg"
      },
      {
        name: "南京体育学院图书馆",
        address: "南京市栖霞区灵谷寺路8号",
        phone: "025-84755000",
        website: "https://lib.nipes.edu.cn/",
        description: "南京体育学院图书馆，体育科学类文献特色。",
        image: "images/nipes-library.svg"
      },
      {
        name: "南京晓庄学院图书馆",
        address: "南京市江宁区弘景大道3601号",
        phone: "025-86178000",
        website: "https://lib.njxzc.edu.cn/",
        description: "南京晓庄学院图书馆，师范教育类文献专业。",
        image: "images/njxzc-library.svg"
      }
    ]
  },
  {
    city: "成都",
    libraries: [
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
      },
      {
        name: "电子科技大学图书馆",
        address: "成都市成华区建设北路二段4号",
        phone: "028-83202300",
        website: "https://lib.uestc.edu.cn/",
        description: "电子科技大学图书馆，电子信息类馆藏丰富。",
        image: "images/uestc-library.svg"
      },
      {
        name: "西南交通大学图书馆",
        address: "成都市金牛区二环路北一段111号",
        phone: "028-87600600",
        website: "https://lib.swjtu.edu.cn/",
        description: "西南交通大学图书馆，交通运输类文献特色。",
        image: "images/swjtu-library.svg"
      },
      {
        name: "西南财经大学图书馆",
        address: "成都市温江区柳台大道555号",
        phone: "028-87092000",
        website: "https://lib.swufe.edu.cn/",
        description: "西南财经大学图书馆，财经类文献专业馆藏。",
        image: "images/swufe-library.svg"
      },
      {
        name: "四川师范大学图书馆",
        address: "成都市锦江区静安路5号",
        phone: "028-84480000",
        website: "https://lib.sicnu.edu.cn/",
        description: "四川师范大学图书馆，教育类文献丰富。",
        image: "images/sicnu-library.svg"
      },
      {
        name: "成都理工大学图书馆",
        address: "成都市成华区二仙桥东三路1号",
        phone: "028-84078000",
        website: "https://lib.cdut.edu.cn/",
        description: "成都理工大学图书馆，地质工程类文献特色。",
        image: "images/cdut-library.svg"
      },
      {
        name: "西南石油大学图书馆",
        address: "成都市新都区新都大道8号",
        phone: "028-83032000",
        website: "https://lib.swpu.edu.cn/",
        description: "西南石油大学图书馆，石油工程类文献专业。",
        image: "images/swpu-library.svg"
      },
      {
        name: "成都中医药大学图书馆",
        address: "成都市温江区柳台大道1166号",
        phone: "028-61800000",
        website: "https://lib.cdutcm.edu.cn/",
        description: "成都中医药大学图书馆，中医药文献丰富。",
        image: "images/cdutcm-library.svg"
      },
      {
        name: "四川农业大学图书馆",
        address: "雅安市雨城区新康路46号",
        phone: "0835-2882000",
        website: "https://lib.sicau.edu.cn/",
        description: "四川农业大学图书馆，农业科学类文献特色。",
        image: "images/sicau-library.svg"
      },
      {
        name: "成都信息工程大学图书馆",
        address: "成都市双流区学府路一段24号",
        phone: "028-85966000",
        website: "https://lib.cuit.edu.cn/",
        description: "成都信息工程大学图书馆，信息工程类文献专业。",
        image: "images/cuit-library.svg"
      },
      {
        name: "西华大学图书馆",
        address: "成都市郫都区红光大道9999号",
        phone: "028-87720000",
        website: "https://lib.xhu.edu.cn/",
        description: "西华大学图书馆，综合性大学图书馆。",
        image: "images/xhu-library.svg"
      },
      {
        name: "成都大学图书馆",
        address: "成都市龙泉驿区成洛大道2025号",
        phone: "028-84616000",
        website: "https://lib.cdu.edu.cn/",
        description: "成都大学图书馆，应用技术类文献丰富。",
        image: "images/cdu-library.svg"
      },
      {
        name: "四川音乐学院图书馆",
        address: "成都市武侯区新生路6号",
        phone: "028-85430000",
        website: "https://lib.sccm.edu.cn/",
        description: "四川音乐学院图书馆，音乐艺术类文献特色。",
        image: "images/sccm-library.svg"
      },
      {
        name: "成都体育学院图书馆",
        address: "成都市武侯区体院路2号",
        phone: "028-85096000",
        website: "https://lib.cdsu.edu.cn/",
        description: "成都体育学院图书馆，体育科学类文献专业。",
        image: "images/cdsu-library.svg"
      },
      {
        name: "四川传媒学院图书馆",
        address: "成都市郫都区团结镇学院街67号",
        phone: "028-87953000",
        website: "https://lib.scmc.edu.cn/",
        description: "四川传媒学院图书馆，传媒艺术类文献丰富。",
        image: "images/scmc-library.svg"
      },
      {
        name: "成都东软学院图书馆",
        address: "成都市都江堰市青城山镇东软大道1号",
        phone: "028-82878000",
        website: "https://lib.nsu.edu.cn/",
        description: "成都东软学院图书馆，软件工程类文献特色。",
        image: "images/nsu-library.svg"
      },
      {
        name: "四川工商学院图书馆",
        address: "成都市郫都区团结镇学院街65号",
        phone: "028-87953000",
        website: "https://lib.stbu.edu.cn/",
        description: "四川工商学院图书馆，工商管理类文献专业。",
        image: "images/stbu-library.svg"
      }
    ]
  },
  {
    city: "武汉",
    libraries: [
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
      },
      {
        name: "华中科技大学图书馆",
        address: "武汉市洪山区珞瑜路1037号",
        phone: "027-87542230",
        website: "https://lib.hust.edu.cn/",
        description: "华中科技大学图书馆，理工科馆藏丰富。",
        image: "images/hust-library.svg"
      },
      {
        name: "华中师范大学图书馆",
        address: "武汉市洪山区珞喻路152号",
        phone: "027-67868000",
        website: "https://lib.ccnu.edu.cn/",
        description: "华中师范大学图书馆，教育类文献丰富。",
        image: "images/ccnu-library.svg"
      },
      {
        name: "武汉理工大学图书馆",
        address: "武汉市洪山区珞狮路122号",
        phone: "027-87650000",
        website: "https://lib.whut.edu.cn/",
        description: "武汉理工大学图书馆，材料交通类文献特色。",
        image: "images/whut-library.svg"
      },
      {
        name: "华中农业大学图书馆",
        address: "武汉市洪山区狮子山街1号",
        phone: "027-87280000",
        website: "https://lib.hzau.edu.cn/",
        description: "华中农业大学图书馆，农业科学类文献专业。",
        image: "images/hzau-library.svg"
      },
      {
        name: "中南财经政法大学图书馆",
        address: "武汉市洪山区南湖大道182号",
        phone: "027-88386000",
        website: "https://lib.zuel.edu.cn/",
        description: "中南财经政法大学图书馆，财经法学类文献丰富。",
        image: "images/zuel-library.svg"
      },
      {
        name: "中国地质大学（武汉）图书馆",
        address: "武汉市洪山区鲁磨路388号",
        phone: "027-67883000",
        website: "https://lib.cug.edu.cn/",
        description: "中国地质大学图书馆，地质科学类文献特色。",
        image: "images/cug-library.svg"
      },
      {
        name: "华中科技大学同济医学院图书馆",
        address: "武汉市硚口区航空路13号",
        phone: "027-83692000",
        website: "https://lib.tjmu.edu.cn/",
        description: "华中科技大学同济医学院图书馆，医学文献专业馆藏。",
        image: "images/tjmu-library.svg"
      },
      {
        name: "武汉科技大学图书馆",
        address: "武汉市青山区和平大道947号",
        phone: "027-68862000",
        website: "https://lib.wust.edu.cn/",
        description: "武汉科技大学图书馆，冶金材料类文献丰富。",
        image: "images/wust-library.svg"
      },
      {
        name: "湖北大学图书馆",
        address: "武汉市武昌区友谊大道368号",
        phone: "027-88662000",
        website: "https://lib.hubu.edu.cn/",
        description: "湖北大学图书馆，综合性大学图书馆。",
        image: "images/hubu-library.svg"
      },
      {
        name: "武汉工程大学图书馆",
        address: "武汉市洪山区雄楚大街693号",
        phone: "027-87195000",
        website: "https://lib.wit.edu.cn/",
        description: "武汉工程大学图书馆，化工工程类文献特色。",
        image: "images/wit-library.svg"
      },
      {
        name: "武汉纺织大学图书馆",
        address: "武汉市江夏区阳光大道1号",
        phone: "027-59367000",
        website: "https://lib.wtu.edu.cn/",
        description: "武汉纺织大学图书馆，纺织服装类文献专业。",
        image: "images/wtu-library.svg"
      },
      {
        name: "武汉轻工大学图书馆",
        address: "武汉市东西湖区常青花园学府南路68号",
        phone: "027-83921000",
        website: "https://lib.whpu.edu.cn/",
        description: "武汉轻工大学图书馆，轻工食品类文献丰富。",
        image: "images/whpu-library.svg"
      },
      {
        name: "湖北工业大学图书馆",
        address: "武汉市洪山区南李路28号",
        phone: "027-59750000",
        website: "https://lib.hbut.edu.cn/",
        description: "湖北工业大学图书馆，工程技术类文献特色。",
        image: "images/hbut-library.svg"
      },
      {
        name: "武汉音乐学院图书馆",
        address: "武汉市武昌区解放路255号",
        phone: "027-88068000",
        website: "https://lib.whcm.edu.cn/",
        description: "武汉音乐学院图书馆，音乐艺术类文献专业。",
        image: "images/whcm-library.svg"
      },
      {
        name: "湖北美术学院图书馆",
        address: "武汉市江夏区藏龙岛科技园栗庙路6号",
        phone: "027-81317000",
        website: "https://lib.hifa.edu.cn/",
        description: "湖北美术学院图书馆，美术设计类文献丰富。",
        image: "images/hifa-library.svg"
      },
      {
        name: "武汉体育学院图书馆",
        address: "武汉市洪山区珞喻路461号",
        phone: "027-87190000",
        website: "https://lib.wipe.edu.cn/",
        description: "武汉体育学院图书馆，体育科学类文献特色。",
        image: "images/wipe-library.svg"
      }
    ]
  },
  {
    city: "西安",
    libraries: [
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
      },
      {
        name: "西北工业大学图书馆",
        address: "西安市碑林区友谊西路127号",
        phone: "029-88492300",
        website: "https://lib.nwpu.edu.cn/",
        description: "西北工业大学图书馆，航空航天类馆藏丰富。",
        image: "images/nwpu-library.svg"
      },
      {
        name: "西北大学图书馆",
        address: "西安市碑林区太白北路229号",
        phone: "029-88302000",
        website: "https://lib.nwu.edu.cn/",
        description: "西北大学图书馆，综合性大学图书馆。",
        image: "images/nwu-library.svg"
      },
      {
        name: "西安电子科技大学图书馆",
        address: "西安市雁塔区太白南路2号",
        phone: "029-88201000",
        website: "https://lib.xidian.edu.cn/",
        description: "西安电子科技大学图书馆，电子信息类文献特色。",
        image: "images/xidian-library.svg"
      },
      {
        name: "长安大学图书馆",
        address: "西安市雁塔区南二环路中段",
        phone: "029-82334000",
        website: "https://lib.chd.edu.cn/",
        description: "长安大学图书馆，交通运输类文献专业。",
        image: "images/chd-library.svg"
      },
      {
        name: "陕西师范大学图书馆",
        address: "西安市雁塔区长安南路199号",
        phone: "029-85310000",
        website: "https://lib.snnu.edu.cn/",
        description: "陕西师范大学图书馆，教育类文献丰富。",
        image: "images/snnu-library.svg"
      },
      {
        name: "西北农林科技大学图书馆",
        address: "咸阳市杨凌示范区邰城路3号",
        phone: "029-87080000",
        website: "https://lib.nwafu.edu.cn/",
        description: "西北农林科技大学图书馆，农林科学类文献特色。",
        image: "images/nwafu-library.svg"
      },
      {
        name: "西安理工大学图书馆",
        address: "西安市金花南路5号",
        phone: "029-82312000",
        website: "https://lib.xaut.edu.cn/",
        description: "西安理工大学图书馆，工程技术类文献专业。",
        image: "images/xaut-library.svg"
      },
      {
        name: "西安建筑科技大学图书馆",
        address: "西安市雁塔路13号",
        phone: "029-82202000",
        website: "https://lib.xauat.edu.cn/",
        description: "西安建筑科技大学图书馆，建筑土木类文献丰富。",
        image: "images/xauat-library.svg"
      },
      {
        name: "西安科技大学图书馆",
        address: "西安市雁塔中路58号",
        phone: "029-85583000",
        website: "https://lib.xust.edu.cn/",
        description: "西安科技大学图书馆，矿业安全类文献特色。",
        image: "images/xust-library.svg"
      },
      {
        name: "西安石油大学图书馆",
        address: "西安市雁塔区电子二路18号",
        phone: "029-88382000",
        website: "https://lib.xsyu.edu.cn/",
        description: "西安石油大学图书馆，石油工程类文献专业。",
        image: "images/xsyu-library.svg"
      },
      {
        name: "西安工程大学图书馆",
        address: "西安市金花南路19号",
        phone: "029-82330000",
        website: "https://lib.xpu.edu.cn/",
        description: "西安工程大学图书馆，纺织服装类文献丰富。",
        image: "images/xpu-library.svg"
      },
      {
        name: "西安外国语大学图书馆",
        address: "西安市长安区郭杜教育科技产业开发区文苑南路",
        phone: "029-85319000",
        website: "https://lib.xisu.edu.cn/",
        description: "西安外国语大学图书馆，外语文献专业馆藏。",
        image: "images/xisu-library.svg"
      },
      {
        name: "西北政法大学图书馆",
        address: "西安市长安区韦郭路中段",
        phone: "029-88182000",
        website: "https://lib.nwupl.edu.cn/",
        description: "西北政法大学图书馆，法学文献特色。",
        image: "images/nwupl-library.svg"
      },
      {
        name: "西安美术学院图书馆",
        address: "西安市雁塔区含光南路100号",
        phone: "029-88210000",
        website: "https://lib.xafa.edu.cn/",
        description: "西安美术学院图书馆，美术设计类文献专业。",
        image: "images/xafa-library.svg"
      },
      {
        name: "西安音乐学院图书馆",
        address: "西安市雁塔区长安中路108号",
        phone: "029-85250000",
        website: "https://lib.xacom.edu.cn/",
        description: "西安音乐学院图书馆，音乐艺术类文献丰富。",
        image: "images/xacom-library.svg"
      },
      {
        name: "西安体育学院图书馆",
        address: "西安市碑林区含光北路65号",
        phone: "029-88409000",
        website: "https://lib.xaipe.edu.cn/",
        description: "西安体育学院图书馆，体育科学类文献特色。",
        image: "images/xaipe-library.svg"
      }
    ]
  },
  {
    city: "重庆",
    libraries: [
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
      },
      {
        name: "西南大学图书馆",
        address: "重庆市北碚区天生路2号",
        phone: "023-68252300",
        website: "https://lib.swu.edu.cn/",
        description: "西南大学图书馆，综合性大学图书馆。",
        image: "images/swu-library.svg"
      },
      {
        name: "重庆邮电大学图书馆",
        address: "重庆市南岸区崇文路2号",
        phone: "023-62460000",
        website: "https://lib.cqupt.edu.cn/",
        description: "重庆邮电大学图书馆，信息通信类文献特色。",
        image: "images/cqupt-library.svg"
      },
      {
        name: "重庆交通大学图书馆",
        address: "重庆市南岸区学府大道66号",
        phone: "023-62652000",
        website: "https://lib.cqjtu.edu.cn/",
        description: "重庆交通大学图书馆，交通运输类文献专业。",
        image: "images/cqjtu-library.svg"
      },
      {
        name: "重庆理工大学图书馆",
        address: "重庆市巴南区红光大道69号",
        phone: "023-68667000",
        website: "https://lib.cqut.edu.cn/",
        description: "重庆理工大学图书馆，工程技术类文献丰富。",
        image: "images/cqut-library.svg"
      },
      {
        name: "重庆师范大学图书馆",
        address: "重庆市沙坪坝区大学城中路37号",
        phone: "023-65910000",
        website: "https://lib.cqnu.edu.cn/",
        description: "重庆师范大学图书馆，教育类文献特色。",
        image: "images/cqnu-library.svg"
      },
      {
        name: "重庆工商大学图书馆",
        address: "重庆市南岸区学府大道19号",
        phone: "023-62769000",
        website: "https://lib.ctbu.edu.cn/",
        description: "重庆工商大学图书馆，经济管理类文献专业。",
        image: "images/ctbu-library.svg"
      },
      {
        name: "重庆医科大学图书馆",
        address: "重庆市渝中区医学院路1号",
        phone: "023-68485000",
        website: "https://lib.cqmu.edu.cn/",
        description: "重庆医科大学图书馆，医学文献专业馆藏。",
        image: "images/cqmu-library.svg"
      },
      {
        name: "重庆文理学院图书馆",
        address: "重庆市永川区红河大道319号",
        phone: "023-49890000",
        website: "https://lib.cqwu.edu.cn/",
        description: "重庆文理学院图书馆，文理综合类文献丰富。",
        image: "images/cqwu-library.svg"
      },
      {
        name: "重庆三峡学院图书馆",
        address: "重庆市万州区天星路666号",
        phone: "023-58102000",
        website: "https://lib.sanxiau.edu.cn/",
        description: "重庆三峡学院图书馆，三峡文化类文献特色。",
        image: "images/sanxiau-library.svg"
      },
      {
        name: "重庆科技学院图书馆",
        address: "重庆市沙坪坝区大学城东路20号",
        phone: "023-65022000",
        website: "https://lib.cqust.edu.cn/",
        description: "重庆科技学院图书馆，应用技术类文献专业。",
        image: "images/cqust-library.svg"
      },
      {
        name: "重庆第二师范学院图书馆",
        address: "重庆市南岸区南山街道崇教路1号",
        phone: "023-61638000",
        website: "https://lib.cque.edu.cn/",
        description: "重庆第二师范学院图书馆，师范教育类文献丰富。",
        image: "images/cque-library.svg"
      },
      {
        name: "重庆警察学院图书馆",
        address: "重庆市沙坪坝区大学城景阳路2号",
        phone: "023-63964000",
        website: "https://lib.cqpc.edu.cn/",
        description: "重庆警察学院图书馆，公安法学类文献特色。",
        image: "images/cqpc-library.svg"
      },
      {
        name: "重庆城市管理职业学院图书馆",
        address: "重庆市沙坪坝区虎溪大学城南二路151号",
        phone: "023-65626000",
        website: "https://lib.cqcvc.edu.cn/",
        description: "重庆城市管理职业学院图书馆，城市管理类文献专业。",
        image: "images/cqcvc-library.svg"
      },
      {
        name: "重庆工程职业技术学院图书馆",
        address: "重庆市江津区滨江新城南北大道1号",
        phone: "023-61065000",
        website: "https://lib.cqvie.edu.cn/",
        description: "重庆工程职业技术学院图书馆，工程技术类文献丰富。",
        image: "images/cqvie-library.svg"
      },
      {
        name: "重庆电子工程职业学院图书馆",
        address: "重庆市沙坪坝区大学城东路76号",
        phone: "023-65928000",
        website: "https://lib.cqcet.edu.cn/",
        description: "重庆电子工程职业学院图书馆，电子工程类文献特色。",
        image: "images/cqcet-library.svg"
      }
    ]
  },
  {
    city: "天津",
    libraries: [
      {
        name: "天津图书馆",
        address: "天津市河西区平江道58号",
        phone: "022-83883600",
        website: "https://www.tjl.tj.cn/",
        description: "天津市重要的公共图书馆，现代化设施完善。",
        image: "images/tianjin-library.svg"
      },
      {
        name: "南开大学图书馆",
        address: "天津市南开区卫津路94号",
        phone: "022-23508176",
        website: "https://lib.nankai.edu.cn/",
        description: "南开大学图书馆，综合性大学图书馆。",
        image: "images/nankai-library.svg"
      },
      {
        name: "天津大学图书馆",
        address: "天津市南开区卫津路92号",
        phone: "022-27406244",
        website: "https://lib.tju.edu.cn/",
        description: "天津大学图书馆，理工科馆藏丰富。",
        image: "images/tju-library.svg"
      },
      {
        name: "天津师范大学图书馆",
        address: "天津市西青区宾水西道393号",
        phone: "022-23766000",
        website: "https://lib.tjnu.edu.cn/",
        description: "天津师范大学图书馆，教育类文献丰富。",
        image: "images/tjnu-library.svg"
      },
      {
        name: "天津工业大学图书馆",
        address: "天津市西青区宾水西道399号",
        phone: "022-83955000",
        website: "https://lib.tjpu.edu.cn/",
        description: "天津工业大学图书馆，纺织材料类文献特色。",
        image: "images/tjpu-library.svg"
      },
      {
        name: "天津科技大学图书馆",
        address: "天津市河西区大沽南路1038号",
        phone: "022-28190000",
        website: "https://lib.tust.edu.cn/",
        description: "天津科技大学图书馆，轻工食品类文献专业。",
        image: "images/tust-library.svg"
      },
      {
        name: "天津理工大学图书馆",
        address: "天津市西青区宾水西道391号",
        phone: "022-60216000",
        website: "https://lib.tjut.edu.cn/",
        description: "天津理工大学图书馆，工程技术类文献丰富。",
        image: "images/tjut-library.svg"
      },
      {
        name: "天津财经大学图书馆",
        address: "天津市河西区珠江道25号",
        phone: "022-28170000",
        website: "https://lib.tjufe.edu.cn/",
        description: "天津财经大学图书馆，财经类文献特色。",
        image: "images/tjufe-library.svg"
      },
      {
        name: "天津医科大学图书馆",
        address: "天津市和平区气象台路22号",
        phone: "022-83336000",
        website: "https://lib.tmu.edu.cn/",
        description: "天津医科大学图书馆，医学文献专业馆藏。",
        image: "images/tmu-library.svg"
      },
      {
        name: "天津中医药大学图书馆",
        address: "天津市静海区团泊新城西区鄱阳湖路10号",
        phone: "022-59596000",
        website: "https://lib.tjutcm.edu.cn/",
        description: "天津中医药大学图书馆，中医药文献丰富。",
        image: "images/tjutcm-library.svg"
      },
      {
        name: "天津外国语大学图书馆",
        address: "天津市河西区马场道117号",
        phone: "022-23280000",
        website: "https://lib.tjfsu.edu.cn/",
        description: "天津外国语大学图书馆，外语文献专业馆藏。",
        image: "images/tjfsu-library.svg"
      },
      {
        name: "天津商业大学图书馆",
        address: "天津市北辰区光荣道409号",
        phone: "022-26680000",
        website: "https://lib.tjcu.edu.cn/",
        description: "天津商业大学图书馆，商业管理类文献特色。",
        image: "images/tjcu-library.svg"
      },
      {
        name: "天津城建大学图书馆",
        address: "天津市西青区津静路26号",
        phone: "022-23085000",
        website: "https://lib.tjuci.edu.cn/",
        description: "天津城建大学图书馆，城市建设类文献专业。",
        image: "images/tjuci-library.svg"
      },
      {
        name: "天津农学院图书馆",
        address: "天津市西青区津静路22号",
        phone: "022-23781000",
        website: "https://lib.tjau.edu.cn/",
        description: "天津农学院图书馆，农业科学类文献丰富。",
        image: "images/tjau-library.svg"
      },
      {
        name: "天津美术学院图书馆",
        address: "天津市河北区天纬路4号",
        phone: "022-26240000",
        website: "https://lib.tjarts.edu.cn/",
        description: "天津美术学院图书馆，美术设计类文献特色。",
        image: "images/tjarts-library.svg"
      },
      {
        name: "天津音乐学院图书馆",
        address: "天津市河东区十一经路57号",
        phone: "022-24160000",
        website: "https://lib.tjcm.edu.cn/",
        description: "天津音乐学院图书馆，音乐艺术类文献专业。",
        image: "images/tjcm-library.svg"
      },
      {
        name: "天津体育学院图书馆",
        address: "天津市河西区卫津南路51号",
        phone: "022-23012000",
        website: "https://lib.tjus.edu.cn/",
        description: "天津体育学院图书馆，体育科学类文献丰富。",
        image: "images/tjus-library.svg"
      }
    ]
  },
  {
    city: "苏州",
    libraries: [
      {
        name: "苏州图书馆",
        address: "苏州市姑苏区人民路858号",
        phone: "0512-65220089",
        website: "https://www.szlib.com/",
        description: "苏州市重要的公共图书馆，古典与现代相结合。",
        image: "images/suzhou-library.svg"
      },
      {
        name: "苏州大学图书馆",
        address: "苏州市姑苏区十梓街1号",
        phone: "0512-65112671",
        website: "https://lib.suda.edu.cn/",
        description: "苏州大学图书馆，综合性大学图书馆。",
        image: "images/suda-library.svg"
      },
      {
        name: "西交利物浦大学图书馆",
        address: "苏州市工业园区独墅湖高教区仁爱路111号",
        phone: "0512-88161000",
        website: "https://lib.xjtlu.edu.cn/",
        description: "西交利物浦大学图书馆，国际化教育特色。",
        image: "images/xjtlu-library.svg"
      },
      {
        name: "苏州科技大学图书馆",
        address: "苏州市虎丘区学府路99号",
        phone: "0512-68096000",
        website: "https://lib.usts.edu.cn/",
        description: "苏州科技大学图书馆，工程技术类文献丰富。",
        image: "images/usts-library.svg"
      },
      {
        name: "常熟理工学院图书馆",
        address: "苏州市常熟市南三环路99号",
        phone: "0512-52251000",
        website: "https://lib.cslg.edu.cn/",
        description: "常熟理工学院图书馆，应用技术类文献特色。",
        image: "images/cslg-library.svg"
      },
      {
        name: "苏州大学文正学院图书馆",
        address: "苏州市吴中区吴中大道1188号",
        phone: "0512-66557000",
        website: "https://lib.sdwz.cn/",
        description: "苏州大学文正学院图书馆，独立学院图书馆。",
        image: "images/sdwz-library.svg"
      },
      {
        name: "苏州大学应用技术学院图书馆",
        address: "苏州市昆山市周庄镇大学路1号",
        phone: "0512-57118000",
        website: "https://lib.sdyy.cn/",
        description: "苏州大学应用技术学院图书馆，应用技术类文献专业。",
        image: "images/sdyy-library.svg"
      },
      {
        name: "苏州工艺美术职业技术学院图书馆",
        address: "苏州市虎丘区致能大道189号",
        phone: "0512-66508000",
        website: "https://lib.sgmart.edu.cn/",
        description: "苏州工艺美术职业技术学院图书馆，工艺美术类文献丰富。",
        image: "images/sgmart-library.svg"
      },
      {
        name: "苏州经贸职业技术学院图书馆",
        address: "苏州市虎丘区学府路287号",
        phone: "0512-62910000",
        website: "https://lib.szjm.edu.cn/",
        description: "苏州经贸职业技术学院图书馆，经贸管理类文献特色。",
        image: "images/szjm-library.svg"
      },
      {
        name: "苏州工业职业技术学院图书馆",
        address: "苏州市虎丘区致能大道189号",
        phone: "0512-66508000",
        website: "https://lib.siit.edu.cn/",
        description: "苏州工业职业技术学院图书馆，工业技术类文献专业。",
        image: "images/siit-library.svg"
      },
      {
        name: "苏州农业职业技术学院图书馆",
        address: "苏州市虎丘区西园路279号",
        phone: "0512-66098000",
        website: "https://lib.szai.edu.cn/",
        description: "苏州农业职业技术学院图书馆，农业技术类文献丰富。",
        image: "images/szai-library.svg"
      },
      {
        name: "苏州卫生职业技术学院图书馆",
        address: "苏州市虎丘区科华路28号",
        phone: "0512-62690000",
        website: "https://lib.szhct.edu.cn/",
        description: "苏州卫生职业技术学院图书馆，卫生医学类文献特色。",
        image: "images/szhct-library.svg"
      },
      {
        name: "苏州职业大学图书馆",
        address: "苏州市虎丘区致能大道189号",
        phone: "0512-66508000",
        website: "https://lib.jssvc.edu.cn/",
        description: "苏州职业大学图书馆，职业技术类文献专业。",
        image: "images/jssvc-library.svg"
      },
      {
        name: "苏州工业园区职业技术学院图书馆",
        address: "苏州市工业园区独墅湖高教区若水路1号",
        phone: "0512-62557000",
        website: "https://lib.sipivt.edu.cn/",
        description: "苏州工业园区职业技术学院图书馆，园区技术类文献丰富。",
        image: "images/sipivt-library.svg"
      },
      {
        name: "苏州健雄职业技术学院图书馆",
        address: "苏州市太仓市科教新城健雄路1号",
        phone: "0512-53940000",
        website: "https://lib.wjxvtc.edu.cn/",
        description: "苏州健雄职业技术学院图书馆，职业技术类文献特色。",
        image: "images/wjxvtc-library.svg"
      },
      {
        name: "苏州信息职业技术学院图书馆",
        address: "苏州市吴江区鲈乡南路1237号",
        phone: "0512-63050000",
        website: "https://lib.szitu.edu.cn/",
        description: "苏州信息职业技术学院图书馆，信息技术类文献专业。",
        image: "images/szitu-library.svg"
      },
      {
        name: "苏州托普信息职业技术学院图书馆",
        address: "苏州市昆山市巴城镇湖滨北路288号",
        phone: "0512-57650000",
        website: "https://lib.szetop.com/",
        description: "苏州托普信息职业技术学院图书馆，信息工程类文献丰富。",
        image: "images/szetop-library.svg"
      }
    ]
  },
  {
    city: "青岛",
    libraries: [
      {
        name: "青岛市图书馆",
        address: "青岛市市南区延吉路109号",
        phone: "0532-85012812",
        website: "https://www.qdlib.net/",
        description: "青岛市重要的公共图书馆，海滨城市文化地标。",
        image: "images/qingdao-library.svg"
      },
      {
        name: "中国海洋大学图书馆",
        address: "青岛市崂山区松岭路238号",
        phone: "0532-66782500",
        website: "https://lib.ouc.edu.cn/",
        description: "中国海洋大学图书馆，海洋科学文献特色。",
        image: "images/ouc-library.svg"
      },
      {
        name: "青岛大学图书馆",
        address: "青岛市市南区宁夏路308号",
        phone: "0532-85953000",
        website: "https://lib.qdu.edu.cn/",
        description: "青岛大学图书馆，综合性大学图书馆。",
        image: "images/qdu-library.svg"
      }
    ]
  },
  {
    city: "厦门",
    libraries: [
      {
        name: "厦门市图书馆",
        address: "厦门市思明区体育路95号",
        phone: "0592-5371800",
        website: "https://www.xmlib.net/",
        description: "厦门市重要的公共图书馆，闽南文化特色。",
        image: "images/xiamen-library.svg"
      },
      {
        name: "厦门大学图书馆",
        address: "厦门市思明区思明南路422号",
        phone: "0592-2182360",
        website: "https://library.xmu.edu.cn/",
        description: "厦门大学图书馆，综合性大学图书馆，环境优美。",
        image: "images/xmu-library.svg"
      },
      {
        name: "集美大学图书馆",
        address: "厦门市集美区银江路185号",
        phone: "0592-6181000",
        website: "https://lib.jmu.edu.cn/",
        description: "集美大学图书馆，海洋特色文献丰富。",
        image: "images/jmu-library.svg"
      }
    ]
  },
  {
    city: "大连",
    libraries: [
      {
        name: "大连市图书馆",
        address: "大连市西岗区长白街7号",
        phone: "0411-83600000",
        website: "https://www.dl-library.com/",
        description: "大连市重要的公共图书馆，东北地区文化中心。",
        image: "images/dalian-library.svg"
      },
      {
        name: "大连理工大学图书馆",
        address: "大连市甘井子区凌工路2号",
        phone: "0411-84708320",
        website: "https://lib.dlut.edu.cn/",
        description: "大连理工大学图书馆，理工科馆藏丰富。",
        image: "images/dlut-library.svg"
      },
      {
        name: "大连海事大学图书馆",
        address: "大连市甘井子区凌海路1号",
        phone: "0411-84723300",
        website: "https://lib.dlmu.edu.cn/",
        description: "大连海事大学图书馆，海事文献特色馆藏。",
        image: "images/dlmu-library.svg"
      }
    ]
  },
  {
    city: "长沙",
    libraries: [
      {
        name: "湖南省图书馆",
        address: "长沙市芙蓉区韶山北路169号",
        phone: "0731-84174122",
        website: "https://www.library.hn.cn/",
        description: "湖南省最大的公共图书馆，湖湘文化特色。",
        image: "images/hunan-library.svg"
      },
      {
        name: "中南大学图书馆",
        address: "长沙市岳麓区麓山南路932号",
        phone: "0731-88876000",
        website: "https://lib.csu.edu.cn/",
        description: "中南大学图书馆，综合性大学图书馆。",
        image: "images/csu-library.svg"
      },
      {
        name: "湖南大学图书馆",
        address: "长沙市岳麓区麓山南路2号",
        phone: "0731-88823000",
        website: "https://lib.hnu.edu.cn/",
        description: "湖南大学图书馆，千年学府文化底蕴深厚。",
        image: "images/hnu-library.svg"
      },
      {
        name: "湖南师范大学图书馆",
        address: "长沙市岳麓区麓山路36号",
        phone: "0731-88872000",
        website: "https://lib.hunnu.edu.cn/",
        description: "湖南师范大学图书馆，教育类文献丰富。",
        image: "images/hunnu-library.svg"
      }
    ]
  },
  {
    city: "郑州",
    libraries: [
      {
        name: "河南省图书馆",
        address: "郑州市中原区嵩山南路150号",
        phone: "0371-67181499",
        website: "https://www.henanlib.gov.cn/",
        description: "河南省最大的公共图书馆，中原文化特色。",
        image: "images/henan-library.svg"
      },
      {
        name: "郑州大学图书馆",
        address: "郑州市高新区科学大道100号",
        phone: "0371-67780000",
        website: "https://lib.zzu.edu.cn/",
        description: "郑州大学图书馆，综合性大学图书馆。",
        image: "images/zzu-library.svg"
      },
      {
        name: "河南大学图书馆",
        address: "开封市龙亭区明伦街85号",
        phone: "0371-22860000",
        website: "https://lib.henu.edu.cn/",
        description: "河南大学图书馆，百年名校文化底蕴深厚。",
        image: "images/henu-library.svg"
      }
    ]
  },
  {
    city: "济南",
    libraries: [
      {
        name: "山东省图书馆",
        address: "济南市历下区二环东路2912号",
        phone: "0531-85590666",
        website: "https://www.sdlib.com/",
        description: "山东省最大的公共图书馆，齐鲁文化特色。",
        image: "images/shandong-library.svg"
      },
      {
        name: "山东大学图书馆",
        address: "济南市历城区山大南路27号",
        phone: "0531-88364000",
        website: "https://lib.sdu.edu.cn/",
        description: "山东大学图书馆，综合性大学图书馆。",
        image: "images/sdu-library.svg"
      },
      {
        name: "济南大学图书馆",
        address: "济南市市中区南辛庄西路336号",
        phone: "0531-82767000",
        website: "https://lib.ujn.edu.cn/",
        description: "济南大学图书馆，综合性大学图书馆。",
        image: "images/ujn-library.svg"
      }
    ]
  },
  {
    city: "福州",
    libraries: [
      {
        name: "福建省图书馆",
        address: "福州市鼓楼区湖东路227号",
        phone: "0591-87597100",
        website: "https://www.fjlib.net/",
        description: "福建省最大的公共图书馆，闽文化特色。",
        image: "images/fujian-library.svg"
      },
      {
        name: "福州大学图书馆",
        address: "福州市闽侯县上街镇学园路2号",
        phone: "0591-22865000",
        website: "https://lib.fzu.edu.cn/",
        description: "福州大学图书馆，理工科馆藏丰富。",
        image: "images/fzu-library.svg"
      },
      {
        name: "福建师范大学图书馆",
        address: "福州市仓山区上三路8号",
        phone: "0591-83465000",
        website: "https://lib.fjnu.edu.cn/",
        description: "福建师范大学图书馆，教育类文献丰富。",
        image: "images/fjnu-library.svg"
      }
    ]
  },
  {
    city: "昆明",
    libraries: [
      {
        name: "云南省图书馆",
        address: "昆明市五华区翠湖南路141号",
        phone: "0871-65320000",
        website: "https://www.ynlib.cn/",
        description: "云南省最大的公共图书馆，民族文化特色。",
        image: "images/yunnan-library.svg"
      },
      {
        name: "云南大学图书馆",
        address: "昆明市五华区翠湖北路2号",
        phone: "0871-65030000",
        website: "https://lib.ynu.edu.cn/",
        description: "云南大学图书馆，综合性大学图书馆。",
        image: "images/ynu-library.svg"
      },
      {
        name: "昆明理工大学图书馆",
        address: "昆明市呈贡区景明南路727号",
        phone: "0871-65916000",
        website: "https://lib.kmust.edu.cn/",
        description: "昆明理工大学图书馆，理工科馆藏丰富。",
        image: "images/kmust-library.svg"
      }
    ]
  }
]; 
