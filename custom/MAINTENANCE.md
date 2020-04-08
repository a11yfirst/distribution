# Maintenance of A11yFirst

## Overview

This document outlines the procedures needed for incorporating changes made
to the CKEditor 4 development repository, located at
[https://github.com/ckeditor/ckeditor4](https://github.com/ckeditor/ckeditor4),
into the A11yFirst plugins development repository.

Following these procedures allows us to “stay in sync” with the major/minor
releases (4.x) branch of CKEditor 4, which will potentially introduce new
features and bug fixes to A11yFirst as they are added to CKEditor 4.

While there may be various reasons for creating maintenance releases of
A11yFirst, they are especially important when security updates are made to
CKEditor 4.

## Procedures

In particular, we want to first merge all commits made to the `major` branch
in the upstream repository into our development repository's `master` branch,
and then merge our `master` branch into our `a11yfirst-master` branch.

Once the upstream commits have been merged into `a11yfirst-master`, we then
need to test all of our plugins to ensure that none of the changes/commits
have had any undesirable effects on our code.

### Merge `upstream/major` branch changes into `plugins-dev/master`

1. Add a remote, by convention named `upstream`, that references the CKEditor
   repository from which our project was forked, and that contains the changes
   we want to incorporate:

   `git remote add upstream https://github.com/ckeditor/ckeditor4`

1. Fetch the branches and their respective commits from the upstream repo:

   `git fetch upstream`

1. Checkout the `plugins-dev` repository's local `master` branch:

   `git checkout master`

1. Merge the changes from `upstream/major` and push to our remote `master`
   branch on `origin`:

   `git merge upstream/major`

   `git push origin master`

1. Remove the `upstream` remote reference from `plugins-dev`:

   `git remote rm upstream`

### Merge updated `master` branch into `a11yfirst-master` and test

1. Merge the changes now in the `master` branch into `a11yfirst-master`:

   `git checkout a11yfirst-master`

   `git pull # make sure branch is up to date`

   `git merge master`

1. Test the functionality of the A11yFirst plugins.

1. If everything is working in all plugins, push the merged changes in the
   `a11yfirst-master` branch to the `plugins-dev` repository's `origin`:

   `git push # assumes a11yfirst-master is current branch`

1. Follow the instructions in the `DISTRIBUTION.md` document to create a new
   distribution version of A11yFirst using the CKEditor 4 Builder app. Note
   that the Builder app will create a downloadable distribution based on the
   latest major version, which should correspond to the latest version in the
   `upstream/major` branch.

## Notes

1. During the heavier development phase of A11yFirst, we tracked the `master`
   branch of what was then called `ckeditor-dev`, now renamed to `ckeditor4`.
   Now that we are in more of a maintenance phase, we determined that it would
   be beneficial to track the `ckeditor4/major` branch instead, to merge in
   updates on a release-by-release basis.

2. Going forward, the A11yFirst CHANGELOG should indicate for each A11yFirst
   version, the CKEditor 4 version against which it was tested.
