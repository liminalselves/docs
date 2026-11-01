# 第三方应用

社区支持**网页端和[官方 App](/guide/clients/official)**。以下第三方 Misskey 客户端由第三方开发，**不由阈界人格项目组维护**，项目组不提供支持。

::: warning
第三方客户端**完全不支持智能体**（广场、会话、记忆、生图等均不可用），也可能与本站的定制功能不兼容。
:::

## 应用介绍与下载

常用的第三方客户端：

- **Aria**：[GitHub](https://github.com/poppingmoon/aria)
- **miria**：[GitHub](https://github.com/shiosyakeyakini-info/miria)

![Aria 与 miria 图标](/images/third-party-icons.webp)

iOS / macOS 用户可直接前往 App Store 下载：

![Aria App Store 页面](/images/third-party-aria-appstore.webp)

![miria App Store 页面](/images/third-party-miria-appstore.webp)

中国大陆区 App Store 暂未上架 miria。

也可以在官方 Q 群（519308434）的群文件中下载：

![群文件中的 Misskey 软件文件夹](/images/third-party-group-files.webp)

![群文件中的各平台安装包](/images/third-party-group-downloads.webp)

## 登录（以 Aria 为例）

首次使用先添加账户：依次点击 **设置 → 账户 → 添加账户**。

![点击设置](/images/aria-settings.webp)

![点击账户](/images/aria-account.webp)

![点击添加账户](/images/aria-add-account.webp)

接下来有两种登录方式：

- **OAuth 登录**：推荐，无需手动处理令牌。
- **API 登录**：仅在 OAuth 登录不可用时使用，需要手动生成访问令牌，令牌有泄露风险。

### OAuth 登录

在服务器地址中输入 `https://misskey.liminalselves.top`：

![输入服务器地址](/images/aria-server-url.webp)

点击 **验证账户**，跳转到授权页面后选择要登录的账户，点击继续：

![选择账户](/images/aria-select-account.webp)

Aria 请求授权，点击允许：

![Aria 授权请求](/images/aria-auth-request.webp)

![点击允许](/images/aria-allow.webp)

![已允许访问](/images/aria-allowed.webp)

返回 Aria，点击 **已认证** 即可登录：

![点击已认证](/images/aria-authenticated.webp)

登录失败时，重做以上步骤，或改用下面的 API 登录。

### API 登录

先在社区网页端依次点击 **设置 → 连接服务 → 生成访问令牌**：

![生成访问令牌入口](/images/token-entry.webp)

设置令牌权限，启用全部即可：

![令牌权限设置](/images/token-permissions.webp)

点击 **完成** 后生成访问令牌：

![令牌生成成功](/images/token-created.webp)

::: warning
令牌只在生成时显示一次。它具有账号的完整访问权限，不要泄露给任何人。
:::

![令牌创建通知](/images/token-notification.webp)

令牌泄露时的处理见[常见问题](/guide/faq#访问令牌泄露了怎么办)。

返回 Aria，点击右上角 **…**，选择 **使用访问令牌登录**：

![使用令牌登录](/images/token-login.webp)

在 **服务器地址** 填入 `https://misskey.liminalselves.top`，在 **访问令牌** 填入刚生成的令牌：

![填写服务器地址与访问令牌](/images/token-form.webp)

点击登录即可完成。仍然失败时请[联系项目组](/guide/faq#联系项目组)。
