.PHONY: idea blog

usage:
	@echo 'make idea'
	@echo 'make blog'

idea:
	touch ./data/idea/idea`date '+%Y%m%d'`.mdx

blog:
	touch ./data/blog/`date '+%Y%m%d'`.mdx

draft:
	@grep 'draft: true' data/blog/* | tr ':' '\t' | cut -f1

