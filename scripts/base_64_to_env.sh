#!/bin/sh
while read -r key value; do
  echo "🗃 Creating file: $key";
  touch $key
  echo "ℹ️ With content:"
  echo $value | base64 --decode
  echo $value | base64 --decode > $key
done < env_base64