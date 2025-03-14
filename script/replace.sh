#!/bin/bash

# 文件路径
FILE_PATH="$1"

# 创建临时文件
TMP_FILE=$(mktemp)

# 使用 awk 处理文件，只替换文本内容中的引号，不替换属性中的引号和import语句中的引号
awk '
BEGIN { in_tag = 0; in_attr = 0; }
{
  line = $0;
  result = "";

  # 检查是否是import语句
  is_import = (index(line, "import ") == 1);

  for (i = 1; i <= length(line); i++) {
    char = substr(line, i, 1);

    # 检测是否在标签内
    if (char == "<") in_tag = 1;
    if (char == ">") in_tag = 0;

    # 检测是否在属性值内
    if (in_tag && char == "\"") in_attr = !in_attr;

    # 只替换不在标签内、不在属性值内、不在import语句中的引号
    if (!in_tag && char == "\"" && !in_attr && !is_import) {
      result = result "&quot;";
    } else if (!in_tag && char == "\047" && !in_attr && !is_import) { # \047 是单引号的八进制表示
      result = result "&apos;";
    } else {
      result = result char;
    }
  }
  print result;
}' "$FILE_PATH" > "$TMP_FILE"

# 检查处理是否成功
if [ $? -eq 0 ]; then
  # 备份原文件
  cp "$FILE_PATH" "${FILE_PATH}.bak"

  # 将处理后的内容移回原文件
  mv "$TMP_FILE" "$FILE_PATH"

  echo "文件处理完成，原文件已备份为 ${FILE_PATH}.bak"
else
  echo "处理失败"
  rm "$TMP_FILE"
fi
