if [ ! -d /tmp/notiz ]; then
  git clone git@github.com:jliocsar/notiz.git /tmp/notiz
fi

cd /tmp/notiz
bun i
./setup.ts >/dev/null
cd $HOME
rm -rf /tmp/notiz
