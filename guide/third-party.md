# 第三方应用

在网页上使用 Misskey 有时不太方便（尤其对手机用户来说）。熟悉了 Misskey Web 之后，你可以尝试由志愿者开发的非官方客户端应用。

::: warning
第三方客户端**完全不支持智能体功能**（广场、会话、记忆、生图等均不可用），且由社区志愿者维护，可能存在未知 bug 或与本站定制功能的兼容性问题。想完整体验本站功能，请使用[官方客户端](/guide/clients/official)或网页版。
:::

## 应用介绍与下载

常用的 Misskey 第三方应用有：

- **Aria**：[GitHub](https://github.com/poppingmoon/aria)
- **miria**：[GitHub](https://github.com/shiosyakeyakini-info/miria)

![Aria 与 miria 图标](/images/third-party-icons.webp)

iOS / macOS 用户可直接前往 App Store 下载：

![Aria App Store 页面](/images/third-party-aria-appstore.webp)

![miria App Store 页面](/images/third-party-miria-appstore.webp)

提示：当前中国大陆区 App Store 暂未提供 miria 的下载渠道。

你也可以通过 Aliya 聊天机器人阈界人格官群（519308434）的群文件下载：

![群文件中的 Misskey 软件文件夹](/images/third-party-group-files.webp)

![群文件中的各平台安装包](/images/third-party-group-downloads.webp)

## 登录（以 Aria 为例）

本节以 Aria 为例介绍登录流程。首次使用请先添加账户：依次点击 **设置 – 账户 – 添加账户**。

![点击设置](/images/aria-settings.webp)

![点击账户](/images/aria-account.webp)

![点击添加账户](/images/aria-add-account.webp)

接下来有两种登录方式：

- **oauth 登录**：快速、安全性高（推荐）。
- **api 登录**：仅在 oauth 登录无法使用时选用。可通过网页控制登录行为，但登录凭证有泄露风险。

### oauth 登录

在服务器地址对话框输入我们的服务器地址：`https://misskey.liminalselves.top`

![输入服务器地址](/images/aria-server-url.webp)

然后点击 **验证账户**。此时会被导航至 oauth 验证界面，选择你要登录的账户，点击继续：

![选择账户](/images/aria-select-account.webp)

接下来 Aria 会请求授予权限，点击允许：

![Aria 授权请求](/images/aria-auth-request.webp)

![点击允许](/images/aria-allow.webp)

![已允许访问](/images/aria-allowed.webp)

返回 Aria，点击 **已认证**，即可成功登录你的 Misskey 账户：

![点击已认证](/images/aria-authenticated.webp)

若登录失败，请重做上述 oauth 登录步骤，或尝试下面的 api 登录。

### api 登录

使用这种方式前，需要先在网页端生成用于访问账户的 api token。

访问 Misskey 主页，依次点击 **设置 – 连接服务 – 生成访问令牌**：

![生成访问令牌入口](/images/token-entry.webp)

随后设置该 token 的访问权限，默认启用全部即可：

![令牌权限设置](/images/token-permissions.webp)

点击 **完成** 后会生成一个 api token：

![令牌生成成功](/images/token-created.webp)

注：该 api token 仅在生成时可见，请妥善保管。

::: warning
该 api token 具有账户的完整访问权限，不要泄露给任何人！
:::

![令牌创建通知](/images/token-notification.webp)

若 api token 不慎泄露，请遵循「管理访问令牌」的指引删除该 token，以防止未经授权的登录，详见[常见问题](/guide/faq#api-token-泄露了怎么办)。

返回 Aria，点击右上角 **…**，选择 **使用访问令牌登录**：

![使用令牌登录](/images/token-login.webp)

在 **服务器地址** 填入我们的服务器地址，在 **访问令牌** 填入刚生成的 api token：

![填写服务器地址与访问令牌](/images/token-form.webp)

点击登录即可完成。若此后登录仍然失败，请联系管理员。
