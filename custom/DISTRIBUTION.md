# Creating a new distribution

## Preparations

1. Ensure that the `plugins-dev` working copy `a11yfirst-master` branch
   includes all changes needed for the new distribution:
   * Update `version` in the `a11yfirst-help.js` file
   * Update the ZIP files in the `custom/zip` folder by running:
     `custom/scripts/zip_plugins.sh`
   * Update `scripts/syncdist.sh` file when necessary
   * Update `CHANGELOG.md` by adding the release notes for the new version
   * Update `DISTRIBUTION.md` (this file) as needed
   * Commit all changes and push to origin

## CKEditor Builder

1. Use the [CKEditor Builder](https://ckeditor.com/cke4/builder) app to create
   a new build, following the instructions in `config.js`.

   * Note: If nothing has changed with the build process since the last
     distribution, you can upload the `build-config.js` from the previous
     distribution to the Builder app

1. Download the Builder ZIP file and expand it to a new folder

## Update `distribution` repository working copy

1. Change directory to the `distribution` working copy folder, checkout the
   `master` branch, and issue the following command to make sure it is up to
   date with origin:

   `git pull`

1. Use the following command to delete all files from the working copy:

   `git rm -r *`

1. Commit the changes, but do not push them:

   `git commit -am "Delete all files in preparation for new distribution"`

1. Copy all files from the new build folder to the working copy folder, for
   example:

   `cp -r ~/Downloads/ckeditor/* ./`

1. Run the script `syncdist.sh` giving it the location of the working copy
   folder.

   * Note: The script assumes that the files is will rsync into the
     distribution are located in `$HOME/Sites/plugins-dev`

1. Test the distribution in the browser:

   * All new editor functionality
   * New version number in A11yFirstHelp dialog
   * Updates to `CHANGELOG.md`

1. Add all files, commit and push the changes:

   `git add -A`

   `git commit -m "Initial commit for version <n.n.n>"`

   `git push`

## Tag the new release for both `distribution` and `plugins-dev`

1. Create a new tag for `distribution` and push it to origin

   `git tag -n    # list all tags with their messages`

   `git tag -a <tag-name> -m "<message>" # where <tag-name> is formatted a11yfirst-vN.N.N`

   `git push origin <tag-name>`

1. Create a new tag for `plugins-dev` (using same commands as previous step)

## Setup development environment for next version

1. Update the `stable` branches for both `plugins-dev` and `distribution` by
   merging in the new tags.

1. After creating a new distribution version, depending on how much time has
   elapsed since the last distribution, it may be desirable to merge in all
   changes from the upstream repository from which plugins-dev was forked,
   namely `https://github.com/ckeditor/ckeditor-dev`. Roughly speaking, this
   involves the following two steps:
   1. merge the upstream/master branch into the local master branch
   1. merge the local master branch into the a11yfirst branch

1. By merging in the upstream changes after a new distribution has been
   released, it allows for new development to proceed with the latest CKEditor
   changes, while also allowing time for developers to discover whether any of
   those changes have had an unexpected effect on any of our plugins.
