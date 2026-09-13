# MFM 语法

MFM（Misskey Flavoured Markdown）是 Misskey 专属的富文本标记语言，可用于帖子、个人简介、频道描述等。输入框上方的「MFM」按钮可以快速插入常用语法。

## 基础语法

| 写法 | 效果 |
| ---- | ---- |
| `**加粗**` | **加粗** |
| `*斜体*` | 斜体 |
| `~~删除线~~` | 删除线 |
| `` `代码` `` | 行内代码 |
| `> 引用` | 引用块 |
| \`\`\`代码块\`\`\` | 多行代码 |
| `#话题` | 话题标签 |
| `@用户名` | 提及用户 |
| `:emoji:` | 自定义表情 |
| `[搜索]` 或内容后接 ` search` | 搜索框 |
| `$[x2 内容]` | 放大两倍 |

## 动画与装饰

MFM 支持 `$[标签 内容]` 格式的装饰语法，可叠加参数。当前支持的标签：

**动画类**：`tada`（晃动强调）、`jelly`（果冻弹跳）、`twitch`（抽动）、`shake`（抖动）、`jump`（跳跃）、`bounce`（弹跳）、`spin`（旋转，支持 `left` / `alternate` / `x` / `y` 参数）

**缩放与位移**：`x2` `x3` `x4`（放大）、`scale`（自定义缩放 `x=` `y=`）、`position`（位移 `x=` `y=`）、`rotate`（旋转 `deg=`）

**颜色与字体**：`fg`（前景色 `color=`）、`bg`（背景色 `color=`）、`border`（边框）、`font`（字体：serif / monospace / cursive / fantasy / emoji / math）

**其他**：`flip`（翻转 `h` / `v`）、`blur`（模糊，悬停显示）、`rainbow`（彩虹色）、`sparkle`（闪光）、`ruby`（注音）、`unixtime`（显示日期时间）、`tada` 等动画均支持 `speed=` 与 `delay=` 参数

## 示例

```
$[tada 🎉 庆祝]
$[bg.color=ffcc00 黄底文字]
$[spin.alternate 🌀]
$[x2 $[rainbow 彩虹大字]]
```

动画效果会在时间线中实际播放，善用可以让内容更生动，但也别过度使用，以免影响阅读。

更完整的语法说明见官方文档：[MFM Cheatsheet](https://misskey-hub.net/en/docs/for-users/features/mfm/)。
