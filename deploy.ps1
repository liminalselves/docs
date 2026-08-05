# deploy.ps1 - 构建并推送 dist 到 deploy 分支
# 用法: .\deploy.ps1

Write-Host "正在构建..." -ForegroundColor Cyan
npx vitepress build
if ($LASTEXITCODE -ne 0) { Write-Host "构建失败!" -ForegroundColor Red; exit 1 }

Write-Host "正在推送到 deploy 分支..." -ForegroundColor Cyan

# 进入 dist 目录，初始化为独立 git 仓库并推送
$distPath = ".vitepress\dist"
Push-Location $distPath

git init
git checkout -b deploy
git add -A
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git remote add origin https://github.com/liminalselves/docs.git
git push -f origin deploy

Pop-Location

# 清理 dist 中的 .git
Remove-Item -Recurse -Force ".vitepress\dist\.git" -ErrorAction SilentlyContinue

Write-Host "部署完成! 服务器执行 git pull 即可更新。" -ForegroundColor Green