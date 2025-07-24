.PHONY: help idea blog

help: usage
	@echo "可用命令:"
	@echo "  help    - 显示帮助信息"
	@echo "  idea    - 生成博客创意 (执行 ./script/blog.sh idea)"
	@echo "  blog    - 创建博客文章 (执行 ./script/blog.sh blog)"
	@echo "  draft   - 创建草稿 (执行 ./script/blog.sh draft)"
	@echo "  star    - 星标功能 (执行 ./script/blog.sh star)"

usage:
	@./script/blog.sh

idea:
	@./script/blog.sh idea

blog:
	@./script/blog.sh blog

draft:
	@./script/blog.sh draft

star:
	@./script/blog.sh star
