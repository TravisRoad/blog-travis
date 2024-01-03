#!/bin/bash
# CHATGPT ALL RIGHTS RESERVED

idea() {
    idea="./data/idea/idea$(date '+%Y%m%d').mdx"
    touch $idea
    echo "success"
    echo $idea
}

blog() {
    filename="./data/blog/$(date '+%Y%m%d').mdx"
    touch $filename
    echo "success"
    echo $filename
}

draft() {
    grep 'draft: true' data/blog/* | tr ':' '\t' | cut -f1
}

star() {
    grep 'star: true' data/blog/* | tr ':' '\t' | cut -f1
}

# if [ $# -eq 0 ]; then
#     echo "Please provide an argument. Usage: ./blog.sh [idea|blog|draft|star]"
#     exit 1
# fi

case $1 in
    "idea")
        idea
        ;;
    "blog")
        blog
        ;;
    "draft")
        draft
        ;;
    "star")
        star
        ;;
    *)
        echo "Invalid argument. Usage: ./blog.sh [idea|blog|draft|star]"
        exit 0
        ;;
esac
