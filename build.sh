build_html_win () {
  #
  echo '<html lang="en">' > div_card_maker.html
  echo '<head>' >> div_card_maker.html
  echo '  <meta charset="UTF-8">' >> div_card_maker.html
  echo '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' >> div_card_maker.html
  echo '  <title>div_card_maker</title>' >> div_card_maker.html
  echo '  <style>' >> div_card_maker.html
  #
  #
  cat index.css >> div_card_maker.html
  #
  #
  echo '  </style>' >> div_card_maker.html
  echo '</head>' >> div_card_maker.html
  echo '<body>' >> div_card_maker.html
  #
  #
  cat basic.html >> div_card_maker.html
  #
  #
  echo '    <script>' >> div_card_maker.html
  #
  #
  # add javascript, replacing four spaces with two in javascript
  sed 's/    /  /g' index.js >> div_card_maker.html
  #
  #
  echo '     </script>' >> div_card_maker.html
  echo '</body>' >> div_card_maker.html
  echo '</html>' >> div_card_maker.html
}

build_html_lose () {
  echo '<html>' > div_card_maker.html
  echo '  <h1>something went wrong</h1>' >> div_card_maker.html
  echo '</html>' >> div_card_maker.html
}

# lint typescript code
echo 'linting index.ts'
if npx eslint index.ts
then
  echo ' - linting success'
else
  echo ' - something went wrong with the linting'
  exit
fi
echo

# transpile typescript code
echo 'transpiling index.ts'
if npx tsc
then
  echo ' - transpile success'
  build_html_win
else
  echo ' - something went wrong with the transpiling'
  build_html_lose
fi
