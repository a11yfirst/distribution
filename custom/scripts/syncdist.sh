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
# 2. plugins/a11ychecker
# 2. plugins/a11yfirsthelp
# 3. plugins/a11yheading
# 4. plugins/a11yimage
# 5. plugins/a11ylink
# 6. plugins/a11ystylescombo

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
  a11ychecker
  a11yfirsthelp
  a11yheading
  a11yimage
  a11ylink
  a11ystylescombo
)

RSYNC="rsync -av --delete --delete-excluded --exclude='.DS_Store'"
COUNT=0

COUNT=$((COUNT + 1))
SRCPATH="$SRC/custom"
CMD="$RSYNC $SRCPATH $DISTPATH"
echo
echo "$COUNT. $SRCPATH"
eval $CMD

PARENT="plugins"
for PLUGIN in "${PLUGINS[@]}"
do
  COUNT=$((COUNT + 1))
  SRCPATH="$SRC/$PARENT/$PLUGIN"
  CMD="$RSYNC $SRCPATH $DISTPATH/$PARENT"
  echo
  echo "$COUNT. $SRCPATH"
  eval $CMD
done

# Change RSYNC command to target specific files instead of folders

RSYNC="rsync -ptgov"

FILES=(
  .gitlab-ci.yml
  index.html
)

SRCPATH="$SRC/custom/gitlab"
for FILE in "${FILES[@]}"
do
  COUNT=$((COUNT + 1))
  CMD="$RSYNC $SRCPATH/$FILE $DISTPATH"
  echo
  echo "$COUNT. $SRCPATH/$FILE"
  eval $CMD
done
