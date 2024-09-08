echo "linting index.ts"
if npx eslint index.ts
then
  echo " - linting success"
else
  echo " - something went wrong with the linting"
fi
echo
#
echo "transpiling index.ts"
if npx tsc
then
  echo " - transpile success"
else
  echo " - something went wrong with the transpiling"
fi