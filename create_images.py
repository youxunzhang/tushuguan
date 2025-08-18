#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成图书馆图片文件的脚本
"""

import os
from PIL import Image, ImageDraw, ImageFont
import random

def create_library_image(filename, library_name, city_name):
    """创建一个图书馆图片"""
    # 创建图片尺寸
    width, height = 400, 300
    
    # 创建图片
    img = Image.new('RGB', (width, height), color='white')
    draw = ImageDraw.Draw(img)
    
    # 定义颜色
    colors = [
        (102, 126, 234),  # 蓝色
        (118, 75, 162),   # 紫色
        (45, 55, 72),     # 深灰
        (74, 85, 104),    # 中灰
        (113, 128, 150),  # 浅灰
    ]
    
    # 随机选择背景色
    bg_color = random.choice(colors)
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # 添加渐变效果
    for y in range(height):
        alpha = int(255 * (1 - y / height * 0.3))
        color = tuple(int(c * alpha / 255) for c in bg_color)
        draw.line([(0, y), (width, y)], fill=color)
    
    # 添加图书馆图标（简化的书本图标）
    icon_size = 80
    icon_x = (width - icon_size) // 2
    icon_y = (height - icon_size) // 2 - 20
    
    # 绘制书本图标
    book_color = (255, 255, 255)
    book_width = 60
    book_height = 40
    
    # 书本主体
    draw.rectangle([icon_x + 10, icon_y + 20, icon_x + 10 + book_width, icon_y + 20 + book_height], 
                   fill=book_color, outline=(200, 200, 200), width=2)
    
    # 书本线条
    for i in range(3):
        y_offset = icon_y + 25 + i * 8
        draw.line([(icon_x + 15, y_offset), (icon_x + 10 + book_width - 5, y_offset)], 
                  fill=(150, 150, 150), width=1)
    
    # 添加文字
    try:
        # 尝试使用系统字体
        font_large = ImageFont.truetype("arial.ttf", 24)
        font_small = ImageFont.truetype("arial.ttf", 16)
    except:
        # 如果找不到字体，使用默认字体
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # 图书馆名称
    text = library_name
    bbox = draw.textbbox((0, 0), text, font=font_large)
    text_width = bbox[2] - bbox[0]
    text_x = (width - text_width) // 2
    text_y = icon_y + icon_size + 10
    
    # 添加文字阴影
    draw.text((text_x + 2, text_y + 2), text, fill=(0, 0, 0, 100), font=font_large)
    draw.text((text_x, text_y), text, fill=(255, 255, 255), font=font_large)
    
    # 城市名称
    city_text = city_name
    bbox = draw.textbbox((0, 0), city_text, font=font_small)
    city_text_width = bbox[2] - bbox[0]
    city_text_x = (width - city_text_width) // 2
    city_text_y = text_y + 35
    
    draw.text((city_text_x + 1, city_text_y + 1), city_text, fill=(0, 0, 0, 100), font=font_small)
    draw.text((city_text_x, city_text_y), city_text, fill=(255, 255, 255, 200), font=font_small)
    
    # 保存图片
    img.save(filename, 'JPEG', quality=85)
    print(f"创建图片: {filename}")

def main():
    """主函数"""
    # 确保images目录存在
    if not os.path.exists('images'):
        os.makedirs('images')
    
    # 图书馆数据
    libraries = [
        ("national-library.jpg", "国家图书馆", "北京"),
        ("capital-library.jpg", "首都图书馆", "北京"),
        ("pku-library.jpg", "北京大学图书馆", "北京"),
        ("tsinghua-library.jpg", "清华大学图书馆", "北京"),
        ("ruc-library.jpg", "中国人民大学图书馆", "北京"),
        ("bnu-library.jpg", "北京师范大学图书馆", "北京"),
        ("bit-library.jpg", "北京理工大学图书馆", "北京"),
        ("buaa-library.jpg", "北京航空航天大学图书馆", "北京"),
        ("shanghai-library.jpg", "上海图书馆", "上海"),
        ("fudan-library.jpg", "复旦大学图书馆", "上海"),
        ("sjtu-library.jpg", "上海交通大学图书馆", "上海"),
        ("tongji-library.jpg", "同济大学图书馆", "上海"),
        ("ecnu-library.jpg", "华东师范大学图书馆", "上海"),
        ("guangzhou-library.jpg", "广州图书馆", "广州"),
        ("sysu-library.jpg", "中山大学图书馆", "广州"),
        ("scut-library.jpg", "华南理工大学图书馆", "广州"),
        ("jnu-library.jpg", "暨南大学图书馆", "广州"),
        ("shenzhen-library.jpg", "深圳图书馆", "深圳"),
        ("szu-library.jpg", "深圳大学图书馆", "深圳"),
        ("sustech-library.jpg", "南方科技大学图书馆", "深圳"),
        ("hangzhou-library.jpg", "杭州图书馆", "杭州"),
        ("zju-library.jpg", "浙江大学图书馆", "杭州"),
        ("zhejiang-library.jpg", "浙江图书馆", "杭州"),
        ("nanjing-library.jpg", "南京图书馆", "南京"),
        ("nju-library.jpg", "南京大学图书馆", "南京"),
        ("seu-library.jpg", "东南大学图书馆", "南京"),
        ("njnu-library.jpg", "南京师范大学图书馆", "南京"),
        ("chengdu-library.jpg", "成都图书馆", "成都"),
        ("scu-library.jpg", "四川大学图书馆", "成都"),
        ("uestc-library.jpg", "电子科技大学图书馆", "成都"),
        ("swjtu-library.jpg", "西南交通大学图书馆", "成都"),
        ("wuhan-library.jpg", "武汉图书馆", "武汉"),
        ("whu-library.jpg", "武汉大学图书馆", "武汉"),
        ("hust-library.jpg", "华中科技大学图书馆", "武汉"),
        ("ccnu-library.jpg", "华中师范大学图书馆", "武汉"),
        ("shaanxi-library.jpg", "陕西省图书馆", "西安"),
        ("xjtu-library.jpg", "西安交通大学图书馆", "西安"),
        ("nwpu-library.jpg", "西北工业大学图书馆", "西安"),
        ("nwu-library.jpg", "西北大学图书馆", "西安"),
        ("chongqing-library.jpg", "重庆图书馆", "重庆"),
        ("cqu-library.jpg", "重庆大学图书馆", "重庆"),
        ("swu-library.jpg", "西南大学图书馆", "重庆"),
        ("tianjin-library.jpg", "天津图书馆", "天津"),
        ("nankai-library.jpg", "南开大学图书馆", "天津"),
        ("tju-library.jpg", "天津大学图书馆", "天津"),
        ("qingdao-library.jpg", "青岛市图书馆", "青岛"),
        ("ouc-library.jpg", "中国海洋大学图书馆", "青岛"),
        ("dalian-library.jpg", "大连图书馆", "大连"),
        ("dlut-library.jpg", "大连理工大学图书馆", "大连"),
        ("xiamen-library.jpg", "厦门市图书馆", "厦门"),
        ("xmu-library.jpg", "厦门大学图书馆", "厦门"),
        ("suzhou-library.jpg", "苏州图书馆", "苏州"),
        ("suda-library.jpg", "苏州大学图书馆", "苏州"),
        ("wuxi-library.jpg", "无锡市图书馆", "无锡"),
        ("ningbo-library.jpg", "宁波市图书馆", "宁波"),
        ("hunan-library.jpg", "湖南省图书馆", "长沙"),
        ("hnu-library.jpg", "湖南大学图书馆", "长沙"),
        ("csu-library.jpg", "中南大学图书馆", "长沙"),
        ("henan-library.jpg", "河南省图书馆", "郑州"),
        ("zzu-library.jpg", "郑州大学图书馆", "郑州"),
        ("shandong-library.jpg", "山东省图书馆", "济南"),
        ("sdu-library.jpg", "山东大学图书馆", "济南"),
        ("anhui-library.jpg", "安徽省图书馆", "合肥"),
        ("ustc-library.jpg", "中国科学技术大学图书馆", "合肥"),
        ("hfut-library.jpg", "合肥工业大学图书馆", "合肥"),
        ("fujian-library.jpg", "福建省图书馆", "福州"),
        ("fzu-library.jpg", "福州大学图书馆", "福州"),
        ("jiangxi-library.jpg", "江西省图书馆", "南昌"),
        ("ncu-library.jpg", "南昌大学图书馆", "南昌"),
        ("yunnan-library.jpg", "云南省图书馆", "昆明"),
        ("ynu-library.jpg", "云南大学图书馆", "昆明"),
        ("guizhou-library.jpg", "贵州省图书馆", "贵阳"),
        ("gzu-library.jpg", "贵州大学图书馆", "贵阳"),
        ("guangxi-library.jpg", "广西壮族自治区图书馆", "南宁"),
        ("gxu-library.jpg", "广西大学图书馆", "南宁"),
        ("hainan-library.jpg", "海南省图书馆", "海口"),
        ("hainanu-library.jpg", "海南大学图书馆", "海口"),
        ("tibet-library.jpg", "西藏自治区图书馆", "拉萨"),
        ("ningxia-library.jpg", "宁夏回族自治区图书馆", "银川"),
        ("nxu-library.jpg", "宁夏大学图书馆", "银川"),
        ("xinjiang-library.jpg", "新疆维吾尔自治区图书馆", "乌鲁木齐"),
        ("xju-library.jpg", "新疆大学图书馆", "乌鲁木齐"),
        ("neimenggu-library.jpg", "内蒙古自治区图书馆", "呼和浩特"),
        ("imu-library.jpg", "内蒙古大学图书馆", "呼和浩特"),
        ("heilongjiang-library.jpg", "黑龙江省图书馆", "哈尔滨"),
        ("hit-library.jpg", "哈尔滨工业大学图书馆", "哈尔滨"),
        ("hrbeu-library.jpg", "哈尔滨工程大学图书馆", "哈尔滨"),
        ("jilin-library.jpg", "吉林省图书馆", "长春"),
        ("jlu-library.jpg", "吉林大学图书馆", "长春"),
        ("nenu-library.jpg", "东北师范大学图书馆", "长春"),
        ("liaoning-library.jpg", "辽宁省图书馆", "沈阳"),
        ("neu-library.jpg", "东北大学图书馆", "沈阳"),
        ("lnu-library.jpg", "辽宁大学图书馆", "沈阳"),
        ("hebei-library.jpg", "河北省图书馆", "石家庄"),
        ("hbu-library.jpg", "河北大学图书馆", "石家庄"),
        ("shanxi-library.jpg", "山西省图书馆", "太原"),
        ("sxu-library.jpg", "山西大学图书馆", "太原"),
        ("gansu-library.jpg", "甘肃省图书馆", "兰州"),
        ("lzu-library.jpg", "兰州大学图书馆", "兰州"),
        ("nwnu-library.jpg", "西北师范大学图书馆", "兰州"),
        ("qinghai-library.jpg", "青海省图书馆", "西宁"),
        ("qhu-library.jpg", "青海大学图书馆", "西宁"),
        ("zhuhai-library.jpg", "珠海市图书馆", "珠海"),
        ("zhbit-library.jpg", "北京理工大学珠海学院图书馆", "珠海"),
        ("foshan-library.jpg", "佛山市图书馆", "佛山"),
        ("dongguan-library.jpg", "东莞市图书馆", "东莞"),
        ("zhongshan-library.jpg", "中山市图书馆", "中山"),
        ("huizhou-library.jpg", "惠州市图书馆", "惠州"),
        ("jiangmen-library.jpg", "江门市图书馆", "江门"),
        ("zhaoqing-library.jpg", "肇庆市图书馆", "肇庆"),
        ("qingyuan-library.jpg", "清远市图书馆", "清远"),
        ("shaoguan-library.jpg", "韶关市图书馆", "韶关"),
        ("heyuan-library.jpg", "河源市图书馆", "河源"),
        ("meizhou-library.jpg", "梅州市图书馆", "梅州"),
        ("shanwei-library.jpg", "汕尾市图书馆", "汕尾"),
        ("jieyang-library.jpg", "揭阳市图书馆", "揭阳"),
        ("chaozhou-library.jpg", "潮州市图书馆", "潮州"),
        ("shantou-library.jpg", "汕头市图书馆", "汕头"),
    ]
    
    # 创建默认图片
    create_library_image("default-library.jpg", "图书馆", "中国")
    
    # 创建所有图书馆图片
    for filename, library_name, city_name in libraries:
        create_library_image(filename, library_name, city_name)
    
    print(f"\n成功创建了 {len(libraries) + 1} 张图片！")

if __name__ == "__main__":
    main()
