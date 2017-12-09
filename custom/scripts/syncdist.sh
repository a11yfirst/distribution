#!/usr/bin/env bash

# This script uses rsync to add the A11yFirst plugins and supporting files
# to the distribution files hierarchy produced by the CKBuilder tool.

# The location of the distribution files is specified as the first argument
# to the script and saved in the DISTPATH variable.

# The location of the source files, which is typically a clone or checkout
# of the a11yfirst branch of the A11yFirst plugins-dev repository, is
# specified herein as the value of the SRC variable.

# Note: You may need to change the value of the SRC variable to match the
# location of your plugins-dev working copy.

# For more information on the  distribution build process, see the
# custom/a11yfirst.js config file.

# The folders, relative to the top-level folder, that are synchronized:

# 1. custom
# 2. plugins/a11yfirsthelp
# 3. plugins/a11yformat
# 4. plugins/a11yheading
# 5. plugins/a11ystylescombo
# 6. plugins/balloonpanel/skins/a11yfirst
# 7. skins/a11yfirst

if [ $# -eq 0 ]; then
  echo "Syntax:"
  echo "    $0 <distribution-folder-path>"
  exit 1
fi

DISTPATH=$1
SRC="$HOME/Sites/plugins-dev"

if [ ! -d $DISTPATH ]; then
  echo "Error: $DISTPATH not found"
  exit
fi

PLUGINS=(
  a11yfirsthelp
  a11yformat
  a11yheading
  a11ystylescombo
)

RSYNC="rsync -av --delete-excluded --exclude='.DS_Store'"

FOLDER="custom"
CMD="$RSYNC $SRC/$FOLDER $DISTPATH"
echo
echo $CMD
eval $CMD

FOLDER="plugins"
for PLUGIN in "${PLUGINS[@]}"
do
  CMD="$RSYNC $SRC/$FOLDER/$PLUGIN $DISTPATH/$FOLDER"
  echo
  echo $CMD
  eval $CMD
done

FOLDER="plugins/balloonpanel/skins"
CMD="$RSYNC $SRC/$FOLDER/a11yfirst $DISTPATH/$FOLDER"
echo
echo $CMD
eval $CMD

FOLDER="skins"
CMD="$RSYNC $SRC/$FOLDER/a11yfirst $DISTPATH/$FOLDER"
echo
echo $CMD
eval $CMD
