.PHONY: idea blog

usage:
	@echo 'make idea'
	@echo 'make blog'

idea:
	touch ./data/idea/idea`date '+%Y%m%d'`.mdx

blog:
	touch ./data/idea/idea`date '+%Y%m%d'`.mdx

