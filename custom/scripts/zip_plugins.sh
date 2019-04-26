#!/usr/bin/env bash

DEVPATH="$HOME/Sites/plugins-dev"

ARCHIVEPATH="$DEVPATH/custom/zip"

PLUGINS="a11yfirsthelp a11yheading a11yimage a11ylink a11ystylescombo"

cd $DEVPATH/plugins

for A11YPLUGIN in $PLUGINS
do
  ZIPFILE=${ARCHIVEPATH}/${A11YPLUGIN}.zip
  CMD="zip -r $ZIPFILE $A11YPLUGIN"
  echo $CMD
  eval $CMD
done
