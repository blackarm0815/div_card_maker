build_html_win () {
  echo "<html>" > index.html
  echo "  <div id = 'spongebob'></div>" >> index.html
  echo "  <script>" >> index.html
  cat index.js >> index.html
  echo "  </script>" >> index.html
  echo "</html>" >> index.html
}

build_html_lose () {
  echo "<html>" > index.html
  echo "  <h1>something went wrong</h1>" >> index.html
  echo "</html>" >> index.html
}

# lint typescript code
echo "linting index.ts"
if npx eslint index.ts
then
  echo " - linting success"
else
  echo " - something went wrong with the linting"
  exit
fi
echo

# transpile typescript code
echo "transpiling index.ts"
if npx tsc
then
  echo " - transpile success"
  build_html_win
else
  echo " - something went wrong with the transpiling"
  build_html_lose
fi
