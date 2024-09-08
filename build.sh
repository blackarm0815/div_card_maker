build_html_win () {
  #html
  echo '<html lang="en">' > index.html
  echo '<head>' >> index.html
  echo '  <meta charset="UTF-8">' >> index.html
  echo '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' >> index.html
  echo '  <title>div_card_maker</title>' >> index.html
  echo '  <style>' >> index.html
  #
  echo '    .blackBackground {' >> index.html
  echo '      background-color: #000000;' >> index.html
  echo '    }' >> index.html
  #
  echo '    .whiteText {' >> index.html
  echo '      color: #ffffff;' >> index.html
  echo '    }' >> index.html
  #
  echo '    .spectrumA {' >> index.html
  echo '      background-color: #005c00;' >> index.html
  echo '      color: #ffffff;' >> index.html
  echo '    }' >> index.html
  #
  echo '    .spectrumB {' >> index.html
  echo '      background-color: #999900;' >> index.html
  echo '      color: #ffffff;' >> index.html
  echo '    }' >> index.html
  #
  echo '    .spectrumC {' >> index.html
  echo '      background-color: #bd5e00;' >> index.html
  echo '      color: #ffffff;' >> index.html
  echo '    }' >> index.html
  #
  echo '    .spectrumD {' >> index.html
  echo '      background-color: #ad0000;' >> index.html
  echo '      color: #ffffff;' >> index.html
  echo '    }' >> index.html
  #
  echo '  </style>' >> index.html
  echo '</head>' >> index.html
  echo '<body>' >> index.html
  echo '    <div id = 'holder_abcdefg'></div>' >> index.html
  echo '    <script>' >> index.html
  # add javascript, replacing four spaces with two in javascript
  sed 's/    /  /g' index.js >> index.html
  # html
  echo '     </script>' >> index.html
  echo '</body>' >> index.html
  echo '</html>' >> index.html
}

build_html_lose () {
  echo '<html>' > index.html
  echo '  <h1>something went wrong</h1>' >> index.html
  echo '</html>' >> index.html
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
