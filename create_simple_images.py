#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简化的图书馆图片生成脚本
"""

import os
import base64

def create_simple_image(filename, library_name, city_name):
    """创建一个简单的SVG图片"""
    # 创建SVG图片内容
    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- 背景 -->
  <rect width="400" height="300" fill="url(#grad1)"/>
  
  <!-- 书本图标 -->
  <rect x="170" y="120" width="60" height="40" fill="white" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="180" y1="130" x2="220" y2="130" stroke="#cbd5e0" stroke-width="1"/>
  <line x1="180" y1="138" x2="220" y2="138" stroke="#cbd5e0" stroke-width="1"/>
  <line x1="180" y1="146" x2="220" y2="146" stroke="#cbd5e0" stroke-width="1"/>
  
  <!-- 图书馆名称 -->
  <text x="200" y="200" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" font-weight="bold">{library_name}</text>
  
  <!-- 城市名称 -->
  <text x="200" y="220" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle">{city_name}</text>
</svg>'''
    
    # 保存为SVG文件
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    
    print(f"创建图片: {filename}")

def main():
    """主函数"""
    # 确保images目录存在
    if not os.path.exists('images'):
        os.makedirs('images')
    
    # 图书馆数据
    libraries = [
        ("national-library.svg", "国家图书馆", "北京"),
        ("capital-library.svg", "首都图书馆", "北京"),
        ("pku-library.svg", "北京大学图书馆", "北京"),
        ("tsinghua-library.svg", "清华大学图书馆", "北京"),
        ("ruc-library.svg", "中国人民大学图书馆", "北京"),
        ("bnu-library.svg", "北京师范大学图书馆", "北京"),
        ("bit-library.svg", "北京理工大学图书馆", "北京"),
        ("buaa-library.svg", "北京航空航天大学图书馆", "北京"),
        ("shanghai-library.svg", "上海图书馆", "上海"),
        ("fudan-library.svg", "复旦大学图书馆", "上海"),
        ("sjtu-library.svg", "上海交通大学图书馆", "上海"),
        ("tongji-library.svg", "同济大学图书馆", "上海"),
        ("ecnu-library.svg", "华东师范大学图书馆", "上海"),
        ("guangzhou-library.svg", "广州图书馆", "广州"),
        ("sysu-library.svg", "中山大学图书馆", "广州"),
        ("scut-library.svg", "华南理工大学图书馆", "广州"),
        ("jnu-library.svg", "暨南大学图书馆", "广州"),
        ("shenzhen-library.svg", "深圳图书馆", "深圳"),
        ("szu-library.svg", "深圳大学图书馆", "深圳"),
        ("sustech-library.svg", "南方科技大学图书馆", "深圳"),
        ("hangzhou-library.svg", "杭州图书馆", "杭州"),
        ("zju-library.svg", "浙江大学图书馆", "杭州"),
        ("zhejiang-library.svg", "浙江图书馆", "杭州"),
        ("nanjing-library.svg", "南京图书馆", "南京"),
        ("nju-library.svg", "南京大学图书馆", "南京"),
        ("seu-library.svg", "东南大学图书馆", "南京"),
        ("njnu-library.svg", "南京师范大学图书馆", "南京"),
        ("chengdu-library.svg", "成都图书馆", "成都"),
        ("scu-library.svg", "四川大学图书馆", "成都"),
        ("uestc-library.svg", "电子科技大学图书馆", "成都"),
        ("swjtu-library.svg", "西南交通大学图书馆", "成都"),
        ("wuhan-library.svg", "武汉图书馆", "武汉"),
        ("whu-library.svg", "武汉大学图书馆", "武汉"),
        ("hust-library.svg", "华中科技大学图书馆", "武汉"),
        ("ccnu-library.svg", "华中师范大学图书馆", "武汉"),
        ("shaanxi-library.svg", "陕西省图书馆", "西安"),
        ("xjtu-library.svg", "西安交通大学图书馆", "西安"),
        ("nwpu-library.svg", "西北工业大学图书馆", "西安"),
        ("nwu-library.svg", "西北大学图书馆", "西安"),
        ("chongqing-library.svg", "重庆图书馆", "重庆"),
        ("cqu-library.svg", "重庆大学图书馆", "重庆"),
        ("swu-library.svg", "西南大学图书馆", "重庆"),
        ("tianjin-library.svg", "天津图书馆", "天津"),
        ("nankai-library.svg", "南开大学图书馆", "天津"),
        ("tju-library.svg", "天津大学图书馆", "天津"),
        ("qingdao-library.svg", "青岛市图书馆", "青岛"),
        ("ouc-library.svg", "中国海洋大学图书馆", "青岛"),
        ("dalian-library.svg", "大连图书馆", "大连"),
        ("dlut-library.svg", "大连理工大学图书馆", "大连"),
        ("xiamen-library.svg", "厦门市图书馆", "厦门"),
        ("xmu-library.svg", "厦门大学图书馆", "厦门"),
        ("suzhou-library.svg", "苏州图书馆", "苏州"),
        ("suda-library.svg", "苏州大学图书馆", "苏州"),
        ("wuxi-library.svg", "无锡市图书馆", "无锡"),
        ("ningbo-library.svg", "宁波市图书馆", "宁波"),
        ("hunan-library.svg", "湖南省图书馆", "长沙"),
        ("hnu-library.svg", "湖南大学图书馆", "长沙"),
        ("csu-library.svg", "中南大学图书馆", "长沙"),
        ("henan-library.svg", "河南省图书馆", "郑州"),
        ("zzu-library.svg", "郑州大学图书馆", "郑州"),
        ("shandong-library.svg", "山东省图书馆", "济南"),
        ("sdu-library.svg", "山东大学图书馆", "济南"),
        ("anhui-library.svg", "安徽省图书馆", "合肥"),
        ("ustc-library.svg", "中国科学技术大学图书馆", "合肥"),
        ("hfut-library.svg", "合肥工业大学图书馆", "合肥"),
        ("fujian-library.svg", "福建省图书馆", "福州"),
        ("fzu-library.svg", "福州大学图书馆", "福州"),
        ("jiangxi-library.svg", "江西省图书馆", "南昌"),
        ("ncu-library.svg", "南昌大学图书馆", "南昌"),
        ("yunnan-library.svg", "云南省图书馆", "昆明"),
        ("ynu-library.svg", "云南大学图书馆", "昆明"),
        ("guizhou-library.svg", "贵州省图书馆", "贵阳"),
        ("gzu-library.svg", "贵州大学图书馆", "贵阳"),
        ("guangxi-library.svg", "广西壮族自治区图书馆", "南宁"),
        ("gxu-library.svg", "广西大学图书馆", "南宁"),
        ("hainan-library.svg", "海南省图书馆", "海口"),
        ("hainanu-library.svg", "海南大学图书馆", "海口"),
        ("tibet-library.svg", "西藏自治区图书馆", "拉萨"),
        ("ningxia-library.svg", "宁夏回族自治区图书馆", "银川"),
        ("nxu-library.svg", "宁夏大学图书馆", "银川"),
        ("xinjiang-library.svg", "新疆维吾尔自治区图书馆", "乌鲁木齐"),
        ("xju-library.svg", "新疆大学图书馆", "乌鲁木齐"),
        ("neimenggu-library.svg", "内蒙古自治区图书馆", "呼和浩特"),
        ("imu-library.svg", "内蒙古大学图书馆", "呼和浩特"),
        ("heilongjiang-library.svg", "黑龙江省图书馆", "哈尔滨"),
        ("hit-library.svg", "哈尔滨工业大学图书馆", "哈尔滨"),
        ("hrbeu-library.svg", "哈尔滨工程大学图书馆", "哈尔滨"),
        ("jilin-library.svg", "吉林省图书馆", "长春"),
        ("jlu-library.svg", "吉林大学图书馆", "长春"),
        ("nenu-library.svg", "东北师范大学图书馆", "长春"),
        ("liaoning-library.svg", "辽宁省图书馆", "沈阳"),
        ("neu-library.svg", "东北大学图书馆", "沈阳"),
        ("lnu-library.svg", "辽宁大学图书馆", "沈阳"),
        ("hebei-library.svg", "河北省图书馆", "石家庄"),
        ("hbu-library.svg", "河北大学图书馆", "石家庄"),
        ("shanxi-library.svg", "山西省图书馆", "太原"),
        ("sxu-library.svg", "山西大学图书馆", "太原"),
        ("gansu-library.svg", "甘肃省图书馆", "兰州"),
        ("lzu-library.svg", "兰州大学图书馆", "兰州"),
        ("nwnu-library.svg", "西北师范大学图书馆", "兰州"),
        ("qinghai-library.svg", "青海省图书馆", "西宁"),
        ("qhu-library.svg", "青海大学图书馆", "西宁"),
        ("zhuhai-library.svg", "珠海市图书馆", "珠海"),
        ("zhbit-library.svg", "北京理工大学珠海学院图书馆", "珠海"),
        ("foshan-library.svg", "佛山市图书馆", "佛山"),
        ("dongguan-library.svg", "东莞市图书馆", "东莞"),
        ("zhongshan-library.svg", "中山市图书馆", "中山"),
        ("huizhou-library.svg", "惠州市图书馆", "惠州"),
        ("jiangmen-library.svg", "江门市图书馆", "江门"),
        ("zhaoqing-library.svg", "肇庆市图书馆", "肇庆"),
        ("qingyuan-library.svg", "清远市图书馆", "清远"),
        ("shaoguan-library.svg", "韶关市图书馆", "韶关"),
        ("heyuan-library.svg", "河源市图书馆", "河源"),
        ("meizhou-library.svg", "梅州市图书馆", "梅州"),
        ("shanwei-library.svg", "汕尾市图书馆", "汕尾"),
        ("jieyang-library.svg", "揭阳市图书馆", "揭阳"),
        ("chaozhou-library.svg", "潮州市图书馆", "潮州"),
        ("shantou-library.svg", "汕头市图书馆", "汕头"),
    ]
    
    # 创建默认图片
    create_simple_image("images/default-library.svg", "图书馆", "中国")
    
    # 创建所有图书馆图片
    for filename, library_name, city_name in libraries:
        create_simple_image(f"images/{filename}", library_name, city_name)
    
    print(f"\n成功创建了 {len(libraries) + 1} 张SVG图片！")

if __name__ == "__main__":
    main()
