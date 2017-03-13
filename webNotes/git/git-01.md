###创建库
		git config --global user.email ""//设置用户邮箱和用户名
		git config ==global user.name ""
		git init 将当前名录设为仓库
		git add xxxx.html 添加文件到库中
		git commit -m '本次提交的说明注释'   提交文件到库中 
		pwd 查看当前路径

###文件修改提交回退
		git status 查看库状态
		git.diff 查看文件修改的内容
		git log  版本的历史记录
		cat xxxx.html 查看文件内容
		git reset --hard HEAD~ 回退一个版本 几个~几个版本（还原版本库）
		git reset --hard 456451//被退回的新版本的commit id 再次回到最新版本
		git reflog 之前的每次命令 可以查看之前的版本id
		git checkout -- file 将工作区的修改 退回到暂存区（如果已经add）或者版本库（还原工作区的文件）
		git reset HEAD file 可以将已经add到暂存区的内容 退回到工作区（还原暂存区的修改 到工作区）

###关联一个远程库
		git remote add origin git@server-name:path/repo-name.git  关联一个远程库
		git push -u origin master 第一次推送 将本地分支mater 与远程分支master分支连在一起
		git push origin master 可以将最新修改推送

###克隆一个远程库
		git clone git@server-name:path/repo 克隆一个远程库

###分支的创建和使用
		* git checkout(切换分支) -b（创建分支） dev
		* git brach 查看当前分支
		* git checkout master 切换分支到 
		* git merge dev 将指定分支合并到当前分支上 就是直接将master指针指向dev分支
		* git branch -d dev 删除分支
		* git merge --no-ff dev 合并分支 相较于直接快速合并 保留了分支合并的记录

###保存读取分支 
		* git stash dev 分支存档（可以将工作区的修改展示隐藏储存）
		* git stash pop 恢复存档 并清除存储激记录 
		* git stash list 查看存储记录
		* git stash apply xxxxx 可以读取指定的存储内容 但是不会i删除存储记录

###强制删除没有被合并的分支 
		git branch -D dev  强制删除 未合并的分支


###多人协作问题
		git remote  查看远程库信息
		git remote -v 查看详细信息
		git checkout -b  dev origin/dev 克隆下来的库只有master分支 可以用这个方法将远程的dev分支也下载到本地
		git branch --set-upstream dev origin/dev 通过该方法把本地的dev与远程dev分支相连
		git pull 将最新的文件抓取下来与本地自动合并 无法合并会进行提示 修改后 再提交上去

###标签
		git tag v1.0  给当前最新提交的commit打上标签
		git tag v1.0 45655454(commit id 前面提到用 git log 查询)
		git show v1.0 查看标签信息
		git tag -a v1.0 -m "版本说明文字"
		
		git tag -d v0.1 删除标签
		git push origin v1.0 推送一个标签到远程
		git push origin --tags 推送所有未推送的本地标签
		
		删除远程标签 
		1. git tag -d v1.0 先删除本地标签
		2. git push origin : refs.tags/v1.0 

		git push origin --delete dev 删除远程分支
